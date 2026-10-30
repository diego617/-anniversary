import gsap from "gsap";
import { attachGestureController } from "./gesture-controller";
import {
  animateInitialScene,
  animateSceneFeature,
  resetSceneVisualState,
  transitionBetweenScenes,
} from "./scene-animations";

type ExperienceState = {
  currentIndex: number;
  direction: "forward" | "backward";
  isTransitioning: boolean;
};

class AnniversaryExperience {
  private readonly root: HTMLElement;
  private readonly scenes: HTMLElement[];
  private readonly progressButtons: HTMLButtonElement[];
  private readonly previousButton: HTMLButtonElement;
  private readonly nextButton: HTMLButtonElement;
  private readonly status: HTMLElement;
  private readonly currentNumber: HTMLElement;
  private readonly progressFill: HTMLElement;
  private readonly reducedMotion: boolean;
  private readonly cleanups: Array<() => void> = [];
  private transitionTimeline: gsap.core.Timeline | null = null;
  private featureTimeline: gsap.core.Timeline | null = null;
  private state: ExperienceState = {
    currentIndex: 0,
    direction: "forward",
    isTransitioning: false,
  };

  constructor(root: HTMLElement) {
    this.root = root;
    this.scenes = Array.from(root.querySelectorAll<HTMLElement>("[data-scene]"));
    this.progressButtons = Array.from(
      root.querySelectorAll<HTMLButtonElement>("[data-progress-index]"),
    );
    this.previousButton = this.requireElement("[data-previous]");
    this.nextButton = this.requireElement("[data-next]");
    this.status = this.requireElement("[data-scene-status]");
    this.currentNumber = this.requireElement("[data-current-number]");
    this.progressFill = this.requireElement("[data-progress-fill]");
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  init(): () => void {
    this.bindControls();
    this.bindReasons();
    this.updateChrome();
    this.transitionTimeline = animateInitialScene(this.scenes[0]!, this.reducedMotion);
    this.preloadNextImage();

    const onPageHide = () => this.destroy();
    window.addEventListener("pagehide", onPageHide, { once: true });
    this.cleanups.push(() => window.removeEventListener("pagehide", onPageHide));
    return () => this.destroy();
  }

  private requireElement<T extends Element>(selector: string): T {
    const element = this.root.querySelector<T>(selector);
    if (!element) throw new Error(`No se encontró el elemento requerido: ${selector}`);
    return element;
  }

  private bindControls(): void {
    const previous = () => this.goTo(this.state.currentIndex - 1);
    const next = () => this.goTo(this.state.currentIndex + 1);
    const restart = () => this.goTo(0);

    this.previousButton.addEventListener("click", previous);
    this.nextButton.addEventListener("click", next);
    this.root
      .querySelectorAll<HTMLElement>("[data-go-next]")
      .forEach((button) => button.addEventListener("click", next));
    this.root
      .querySelectorAll<HTMLElement>("[data-restart]")
      .forEach((button) => button.addEventListener("click", restart));
    this.progressButtons.forEach((button) => {
      const index = Number(button.dataset.progressIndex);
      const handler = () => this.goTo(index);
      button.addEventListener("click", handler);
      this.cleanups.push(() => button.removeEventListener("click", handler));
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    this.cleanups.push(
      () => this.previousButton.removeEventListener("click", previous),
      () => this.nextButton.removeEventListener("click", next),
      () =>
        this.root
          .querySelectorAll<HTMLElement>("[data-go-next]")
          .forEach((button) => button.removeEventListener("click", next)),
      () =>
        this.root
          .querySelectorAll<HTMLElement>("[data-restart]")
          .forEach((button) => button.removeEventListener("click", restart)),
      () => window.removeEventListener("keydown", onKeyDown),
      attachGestureController(this.root, { onNext: next, onPrevious: previous }),
    );
  }

  private bindReasons(): void {
    const container = this.root.querySelector<HTMLElement>("[data-reasons]");
    if (!container) return;
    const button = container.querySelector<HTMLButtonElement>("[data-reason-trigger]");
    const text = container.querySelector<HTMLElement>("[data-reason-text]");
    const counter = container.querySelector<HTMLElement>("[data-reason-counter]");
    const values = JSON.parse(container.dataset.reasonsValues ?? "[]") as string[];
    if (!button || !text || !counter || values.length === 0) return;

    let reasonIndex = -1;
    const showNextReason = () => {
      reasonIndex = (reasonIndex + 1) % values.length;
      const update = () => {
        text.textContent = values[reasonIndex] ?? "";
        counter.textContent = `Razón ${reasonIndex + 1} de ${values.length}`;
        button.setAttribute("aria-label", "Descubrir la siguiente razón");
      };

      if (this.reducedMotion) update();
      else {
        gsap
          .timeline()
          .to(text, { autoAlpha: 0, y: -8, duration: 0.18 })
          .add(update)
          .fromTo(
            text,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.38, ease: "power2.out" },
          );
        gsap.fromTo(button, { scale: 0.92 }, { scale: 1, duration: 0.45, ease: "back.out(1.8)" });
      }
    };

    button.addEventListener("click", showNextReason);
    this.cleanups.push(() => button.removeEventListener("click", showNextReason));
  }

  private goTo(index: number): void {
    if (
      this.state.isTransitioning ||
      index < 0 ||
      index >= this.scenes.length ||
      index === this.state.currentIndex
    )
      return;

    const outgoing = this.scenes[this.state.currentIndex]!;
    const incoming = this.scenes[index]!;
    this.state.direction = index > this.state.currentIndex ? "forward" : "backward";
    this.state.isTransitioning = true;
    this.setControlsDisabled(true);
    this.featureTimeline?.kill();
    this.transitionTimeline?.kill();
    resetSceneVisualState(incoming);

    incoming.dataset.active = "true";
    incoming.setAttribute("aria-hidden", "false");
    incoming.removeAttribute("inert");

    this.transitionTimeline = transitionBetweenScenes({
      outgoing,
      incoming,
      direction: this.state.direction,
      reducedMotion: this.reducedMotion,
      onComplete: () => {
        outgoing.dataset.active = "false";
        outgoing.setAttribute("aria-hidden", "true");
        outgoing.setAttribute("inert", "");
        resetSceneVisualState(outgoing);
        gsap.set(outgoing, { clearProps: "opacity,visibility,zIndex" });
        gsap.set(incoming, { clearProps: "opacity,visibility,zIndex" });

        this.state.currentIndex = index;
        this.state.isTransitioning = false;
        this.updateChrome();
        this.featureTimeline = animateSceneFeature(incoming, this.reducedMotion);
        this.preloadNextImage();
        this.root.dispatchEvent(
          new CustomEvent("anniversary:scene-change", {
            detail: { index, id: incoming.id, direction: this.state.direction },
          }),
        );
      },
    });
  }

  private updateChrome(): void {
    const { currentIndex } = this.state;
    this.setControlsDisabled(false);
    this.previousButton.disabled = currentIndex === 0;
    this.nextButton.hidden = currentIndex === this.scenes.length - 1;
    this.currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");
    this.progressFill.style.transform = `scaleX(${(currentIndex + 1) / this.scenes.length})`;

    this.progressButtons.forEach((button, index) => {
      if (index === currentIndex) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });

    const active = this.scenes[currentIndex]!;
    const title = active.querySelector("h1, h2")?.textContent?.trim() ?? active.id;
    this.status.textContent = `Escena ${currentIndex + 1} de ${this.scenes.length}: ${title}`;
  }

  private setControlsDisabled(disabled: boolean): void {
    this.root
      .querySelectorAll<HTMLButtonElement>(".scene-controls button, .scene-progress button")
      .forEach((button) => {
        button.disabled = disabled;
      });
  }

  private preloadNextImage(): void {
    const next = this.scenes[this.state.currentIndex + 1];
    const source = next
      ?.querySelector<HTMLSourceElement>("picture source")
      ?.srcset.split(",")
      .at(-1)
      ?.trim()
      .split(" ")[0];
    if (!source) return;
    const image = new Image();
    image.src = source;
  }

  destroy(): void {
    this.transitionTimeline?.kill();
    this.featureTimeline?.kill();
    this.cleanups.splice(0).forEach((cleanup) => cleanup());
  }
}

const root = document.querySelector<HTMLElement>("[data-anniversary-root]");
if (root) new AnniversaryExperience(root).init();
