import "./styles/App.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isDarkState } from "./recoil/atoms.tsx";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/about.tsx";
import Home from "./components/home/home.tsx";
// import Play from "./components/Play";
// import Work from "./components/Work";
import NotFound from "./components/not_found/not_found.tsx";
import ABTesting from "./components/ab_testing/ab_testing.tsx";
import KopiDevelopment from "./components/kopi/kopi.tsx";
import Navigation from "./components/navigation/navigation.tsx";
import KeyControls from "./components/key_controls/key_controls.tsx";
import ProgressBar from "./components/progress_bar/progress_bar.tsx";
import Beestar from "./components/beestar/beestar.tsx";
import GMCafe from "./components/gmcafe/gmcafe.tsx";

function App() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <article className={isDark ? "dark-mode" : "light-mode"}>
      <header>
        <Navigation />
        <ProgressBar setHasScrolled={setHasScrolled} />
      </header>
      <KeyControls hasScrolled={hasScrolled} />
      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/play" element={<Play />} /> */}
        <Route path="/about" element={<About />} />

        {/* routes to work pages */}
        <Route path="/beestar-redesign" element={<Beestar />} />
        <Route path="/ab-testing" element={<ABTesting />} />
        <Route path="/kopi-development" element={<KopiDevelopment />} />
        <Route path="/gmcafe" element={<GMCafe />} />

        {/* catch all 404 not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
}

export default App;
