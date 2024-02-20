import { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Play from "./components/Play";
import Work from "./components/Work";
import "./styles/App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progBar = document.getElementById("prog-bar");
    const progStar = document.getElementById("prog-star");
    if (progBar && progStar) {
      progBar.style.width = scrolled + "%";
      if (parseInt(progBar.style.width) > 0) {
        progStar.style.visibility = "visible";
      } else {
        progStar.style.visibility = "hidden";
      }
    }
    if (progBar && progStar) {
      const progBarWidth = progBar.getBoundingClientRect().width;
      const progStarOffset = progBarWidth - 12;
      progStar.style.left = progStarOffset + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/">
              <img src="src/assets/logo.svg" className="logo" />
            </NavLink>
            <ul className="right-links">
              <li>
                <NavLink to="/work">01 Work</NavLink>
              </li>
              <li>
                <NavLink to="/play">02 Play</NavLink>
              </li>
              <li>
                <NavLink to="/about">03 About</NavLink>
              </li>
              <li>
                <a
                  href="src/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  04 Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="scroll-indicator">
            <div className="progress-bar" id="prog-bar" />
            <img
              src="src/assets/star-filled.svg"
              className="progress-star"
              id="prog-star"
            />
          </div>
        </header>
        <footer></footer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </article>
  );
}

export default App;
