import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import FeaturedListings from "./components/FeaturedListings";
import WorkListings from "./components/WorkListings";

import { useEffect } from "react";
import { initSite } from "./init";
// import lazyLoad from "./lazyLoad";

export default function App() {
  useEffect(() => {
    let cleanup = () => {};

    const raf = requestAnimationFrame(() => {
      cleanup = initSite();
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, []);
  return (
    <main>
      <Header />
      <About />
      <WorkListings />
      <FeaturedListings />
      <Footer />
    </main>
  );
}
