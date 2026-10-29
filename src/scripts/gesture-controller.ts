type SwipeHandlers = {
  onNext: () => void;
  onPrevious: () => void;
};

export function attachGestureController(element: HTMLElement, handlers: SwipeHandlers): () => void {
  let startX = 0;
  let startY = 0;
  let pointerId: number | null = null;

  const onPointerDown = (event: PointerEvent) => {
    if (event.pointerType === "mouse" || (event.target as HTMLElement).closest("button, a")) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
  };

  const onPointerUp = (event: PointerEvent) => {
    if (pointerId !== event.pointerId) return;
    const distanceX = event.clientX - startX;
    const distanceY = event.clientY - startY;
    pointerId = null;

    if (Math.abs(distanceX) < 48 || Math.abs(distanceX) < Math.abs(distanceY) * 1.25) return;
    if (distanceX < 0) handlers.onNext();
    else handlers.onPrevious();
  };

  const reset = () => {
    pointerId = null;
  };

  element.addEventListener("pointerdown", onPointerDown, { passive: true });
  element.addEventListener("pointerup", onPointerUp, { passive: true });
  element.addEventListener("pointercancel", reset, { passive: true });

  return () => {
    element.removeEventListener("pointerdown", onPointerDown);
    element.removeEventListener("pointerup", onPointerUp);
    element.removeEventListener("pointercancel", reset);
  };
}
