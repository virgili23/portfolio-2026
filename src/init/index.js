import scrollSpy from "../scrollSpy";
import lazyLoad from "../lazyLoad";
import navToggle from "./navToggle";

// export function initSite() {
//   navToggle();
//   scrollSpy();
//   lazyLoad();
// }

export function initSite() {
  const cleanups = [];

  const navCleanup = navToggle?.();
  if (typeof navCleanup === "function") cleanups.push(navCleanup);

  const spyCleanup = scrollSpy?.();
  if (typeof spyCleanup === "function") cleanups.push(spyCleanup);

  const lazyCleanup = lazyLoad?.();
  if (typeof lazyCleanup === "function") cleanups.push(lazyCleanup);

  return () => cleanups.forEach((fn) => fn());
}
