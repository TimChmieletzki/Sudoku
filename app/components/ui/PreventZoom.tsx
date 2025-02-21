"use client";

import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    const disablePinchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (e: TouchEvent) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    const disableTrackpadZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", disablePinchZoom, {
      passive: false,
    });
    document.addEventListener("touchend", preventDoubleTapZoom, false);
    document.addEventListener("wheel", disableTrackpadZoom, { passive: false });

    return () => {
      document.removeEventListener("touchmove", disablePinchZoom);
      document.removeEventListener("touchend", preventDoubleTapZoom);
      document.removeEventListener("wheel", disableTrackpadZoom);
    };
  }, []);

  return null;
}
