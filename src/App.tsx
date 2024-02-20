import About from "./components/About";
import Home from "./components/Home";
import Play from "./components/Play";
import Work from "./components/Work";
import "./styles/App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  window.onscroll = () => myFunction();

  function myFunction() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progBar = document.getElementById("prog-bar") as HTMLElement | null;
    if (progBar) {
      progBar.style.width = scrolled + "%";
    }
  }

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
