import { useLayoutEffect } from "react";

export default function useScrollReveal({ enabled = true, routeKey = "" } = {}) {
  useLayoutEffect(() => {
    const root = document.getElementById("main-content");
    if (!enabled || !root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tracked = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
          if (element.dataset.motionState === "pending") {
            element.dataset.motionState = "visible";
          }
          return;
        }

        // Replay only after a block has fully left the screen.
        const outsideScreen = entry.boundingClientRect.bottom <= 0 ||
          entry.boundingClientRect.top >= window.innerHeight;
        if (outsideScreen && !element.contains(document.activeElement)) {
          element.dataset.motionState = "pending";
        }
      });
    }, { threshold: [0, 0.12] });

    const registerTree = (node) => {
      if (preference.matches || !(node instanceof Element)) return;
      const elements = [
        ...(node.matches(".scroll-reveal") ? [node] : []),
        ...node.querySelectorAll(".scroll-reveal"),
      ];
      elements.forEach((element) => {
        if (tracked.has(element)) return;
        tracked.add(element);
        element.dataset.motionState = "pending";
        observer.observe(element);
      });
    };

    const clear = () => {
      observer.disconnect();
      tracked.forEach((element) => element.removeAttribute("data-motion-state"));
      tracked.clear();
    };
    const onPreferenceChange = () => {
      clear();
      registerTree(root);
    };
    const onAnimationEnd = (event) => {
      if (event.animationName === "scroll-motion-enter" &&
          event.target.dataset.motionState === "visible") {
        event.target.dataset.motionState = "settled";
      }
    };
    const onFocus = (event) => {
      // Keyboard navigation makes the focused block immediately readable.
      let element = event.target.closest(".scroll-reveal");
      while (element && root.contains(element)) {
        element.dataset.motionState = "settled";
        element = element.parentElement?.closest(".scroll-reveal");
      }
    };

    registerTree(root);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(registerTree));
      tracked.forEach((element) => {
        if (!root.contains(element)) {
          observer.unobserve(element);
          element.removeAttribute("data-motion-state");
          tracked.delete(element);
        }
      });
    });
    mutations.observe(root, { childList: true, subtree: true });
    preference.addEventListener("change", onPreferenceChange);
    root.addEventListener("animationend", onAnimationEnd);
    root.addEventListener("focusin", onFocus);

    return () => {
      mutations.disconnect();
      clear();
      preference.removeEventListener("change", onPreferenceChange);
      root.removeEventListener("animationend", onAnimationEnd);
      root.removeEventListener("focusin", onFocus);
    };
  }, [enabled, routeKey]);
}
