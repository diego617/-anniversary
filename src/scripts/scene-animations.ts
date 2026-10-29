import gsap from "gsap";

export const TRANSITION_DURATION = 0.9;
export const TRANSITION_EASE = "power3.inOut";

type TransitionOptions = {
  outgoing: HTMLElement;
  incoming: HTMLElement;
  direction: "forward" | "backward";
  reducedMotion: boolean;
  onComplete: () => void;
};

export function transitionBetweenScenes({
  outgoing,
  incoming,
  direction,
  reducedMotion,
  onComplete,
}: TransitionOptions): gsap.core.Timeline {
  const offset = direction === "forward" ? 34 : -34;
  const outgoingContent = outgoing.querySelector(".scene__content");
  const incomingContent = incoming.querySelector(".scene__content");
  const incomingItems = incoming.querySelectorAll<HTMLElement>("[data-animate]");
  const duration = reducedMotion ? 0.16 : TRANSITION_DURATION;

  gsap.set(incoming, { autoAlpha: 1, zIndex: 3 });
  gsap.set(outgoing, { zIndex: 2 });
  gsap.set(incomingContent, { x: reducedMotion ? 0 : offset, autoAlpha: 0 });
  if (!reducedMotion) gsap.set(incomingItems, { y: 22, autoAlpha: 0 });

  const timeline = gsap.timeline({ defaults: { ease: TRANSITION_EASE }, onComplete });
  timeline
    .to(outgoingContent, { x: -offset, autoAlpha: 0, duration: duration * 0.42 }, 0)
    .fromTo(
      incoming.querySelector(".scene-background, .memory-visual"),
      { autoAlpha: 0, scale: reducedMotion ? 1 : 1.025 },
      { autoAlpha: 1, scale: 1, duration },
      0,
    )
    .to(incomingContent, { x: 0, autoAlpha: 1, duration: duration * 0.72 }, duration * 0.24);

  if (incomingItems.length > 0) {
    timeline.to(
      incomingItems,
      {
        y: 0,
        autoAlpha: 1,
        duration: reducedMotion ? 0.01 : 0.55,
        stagger: reducedMotion ? 0 : 0.08,
      },
      duration * 0.48,
    );
  }

  return timeline;
}

export function animateInitialScene(
  scene: HTMLElement,
  reducedMotion: boolean,
): gsap.core.Timeline {
  const items = scene.querySelectorAll<HTMLElement>("[data-animate]");
  const background = scene.querySelector(".scene-background__primary-image");
  const timeline = gsap.timeline({ delay: reducedMotion ? 0 : 0.2 });

  gsap.set(items, { y: reducedMotion ? 0 : 24, autoAlpha: 0 });
  timeline.to(items, {
    y: 0,
    autoAlpha: 1,
    duration: reducedMotion ? 0.12 : 0.7,
    ease: "power3.out",
    stagger: reducedMotion ? 0 : 0.1,
  });

  if (!reducedMotion && background) {
    timeline.fromTo(background, { scale: 1 }, { scale: 1.02, duration: 18, ease: "none" }, 0);
  }

  return timeline;
}

export function animateSceneFeature(
  scene: HTMLElement,
  reducedMotion: boolean,
): gsap.core.Timeline | null {
  if (reducedMotion) return null;

  if (scene.classList.contains("scene--memories")) {
    const images = scene.querySelectorAll<HTMLElement>("[data-memory-image]");
    if (images.length !== 2) return null;
    const firstImage = images[0]!;
    const secondImage = images[1]!;
    const secondCaption = secondImage.querySelector("figcaption");
    const memoryTransitionDuration = 2.2;
    const timeline = gsap
      .timeline({ delay: 1.8 })
      .fromTo(
        secondImage,
        { autoAlpha: 0, xPercent: 4 },
        {
          autoAlpha: 1,
          xPercent: 0,
          duration: memoryTransitionDuration,
          ease: "power2.inOut",
        },
      )
      .to(
        firstImage,
        {
          autoAlpha: 0,
          xPercent: -3,
          duration: memoryTransitionDuration,
          ease: "power2.inOut",
        },
        "<",
      );
    if (secondCaption) {
      timeline.fromTo(
        secondCaption,
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 },
        "-=0.45",
      );
    }
    return timeline;
  }

  if (scene.classList.contains("scene--future")) {
    const picture = scene.querySelector(".scene-background picture");
    if (!picture) return null;
    return gsap
      .timeline()
      .fromTo(
        picture,
        { xPercent: -1.5, scale: 1.04 },
        { xPercent: 1.5, scale: 1.075, duration: 16, ease: "none" },
      );
  }

  if (scene.classList.contains("scene--finale")) {
    const signature = scene.querySelector("[data-signature]");
    if (!signature) return null;
    return gsap
      .timeline({ delay: 0.8 })
      .fromTo(
        signature,
        { autoAlpha: 0, clipPath: "inset(0 100% 0 0)" },
        { autoAlpha: 1, clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power2.out" },
      );
  }

  return null;
}

export function resetSceneVisualState(scene: HTMLElement): void {
  gsap.set(scene.querySelectorAll("[data-animate]"), {
    clearProps: "transform,opacity,visibility",
  });
  gsap.set(scene.querySelector(".scene__content"), { clearProps: "transform,opacity,visibility" });
  gsap.set(scene.querySelector(".scene-background, .memory-visual"), {
    clearProps: "transform,opacity,visibility",
  });
  const memoryImages = scene.querySelectorAll<HTMLElement>("[data-memory-image]");
  memoryImages.forEach((image, index) =>
    gsap.set(image, { clearProps: "all", autoAlpha: index === 0 ? 1 : 0 }),
  );
}
