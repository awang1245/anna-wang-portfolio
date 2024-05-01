import { useEffect, useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Play from "./components/Play";
import Work from "./components/Work";
import "./styles/App.css";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "../public/logo.svg";
import starFilled from "../public/star-filled.svg";
import resume from "../public/resume.pdf";
import Beestar from "./components/Beestar";
import ABTesting from "./components/ABTesting";
import KopiDevelopment from "./components/KopiDevelopment";

function App() {
  const [isShown, setIsShown] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const progBar = document.getElementById("prog-bar");
    if (progBar) {
      progBar.style.width = 0 + "%";
    }
    const progStar = document.getElementById("prog-star");
    if (progStar) {
      progStar.style.visibility = "hidden";
    }
  }, [location]);

  useEffect(() => {
    const handleKeyPress = (e: { key: string }) => {
      switch (e.key) {
        case "0":
          navigate("/");
          break;
        case "1":
          navigate("/work");
          break;
        case "2":
          navigate("/play");
          break;
        case "3":
          navigate("/about");
          break;
        case "4":
          window.location.href =
            "https://awang1245.github.io/anna-wang-portfolio/assets/resume-DyKsdSxX.pdf";
          break;
        case "h":
          setIsShown((prevIsShown) => !prevIsShown);
      }
      if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4"
      ) {
        const key = document.querySelector(`[data-key="${e.key}"]`);
        if (key && !key.classList.contains("clicked")) {
          key.classList.add("clicked");
        }
      } else {
        const key = document.querySelector("." + e.key);
        if (key && !key.classList.contains("clicked")) {
          key.classList.add("clicked");
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  function smoothScroll(dx: number, dy: number) {
    window.scrollTo({
      top: window.scrollY + dy,
      left: window.scrollX + dx,
      behavior: "smooth",
    });
  }

  window.addEventListener("keydown", function (e) {
    if (e.key.startsWith("Arrow")) {
      e.preventDefault();

      let scrollStep = 100;
      let dx = 0,
        dy = 0;
      switch (e.key) {
        case "ArrowUp":
          dy = -scrollStep;
          break;
        case "ArrowDown":
          dy = scrollStep;
          break;
        case "ArrowLeft":
          dx = -scrollStep;
          break;
        case "ArrowRight":
          dx = scrollStep;
          break;
      }
      const key = document.querySelector("." + e.key);
      if (key && !key.classList.contains("clicked")) {
        key.classList.add("clicked");
      }
      smoothScroll(dx, dy);
    }
  });

  window.addEventListener("keyup", function (e) {
    if (e.key.startsWith("Arrow")) {
      e.preventDefault();
      const key = document.querySelector("." + e.key);
      if (key && key.classList.contains("clicked")) {
        key.classList.remove("clicked");
      }
    }

    if (
      e.key.startsWith("0") ||
      e.key.startsWith("1") ||
      e.key.startsWith("2") ||
      e.key.startsWith("3") ||
      e.key.startsWith("4")
    ) {
      const key = document.querySelector(`[data-key="${e.key}"]`);
      if (key && key.classList.contains("clicked")) {
        key.classList.remove("clicked");
      }
    }
  });

  /**
   * Handles functionality of horizontal scroll bar on page.
   */
  const handleScroll = () => {
    // how much is currently scrolled
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // how much can be scrolled
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (currScroll / height) * 100; // get percentage value
    const progBar = document.getElementById("prog-bar");
    const progStar = document.getElementById("prog-star");

    if (progBar && progStar) {
      // once mounted
      progBar.style.width = scrolled + "%";
      if (parseInt(progBar.style.width) > 0) {
        // if user has started scrolling
        progStar.style.visibility = "visible";
      } else {
        progStar.style.visibility = "hidden"; // hide star if no progress bar is visible
      }
    }
    // separate statement bc progBar width needs to be updated first before star's location is determined
    if (progBar && progStar) {
      const progBarWidth = progBar.getBoundingClientRect().width;
      const progStarOffset = progBarWidth - 12; // half of width of star, so it is centered
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
      <header>
        <nav>
          <NavLink to="/">
            <img src={logo} className="logo" alt="site logo" />
          </NavLink>
          <ul className="right-links">
            <li>
              <NavLink to={"/work"}>01&nbsp; Work</NavLink>
            </li>
            <li>
              <NavLink to={"/play"}>02&nbsp; Play</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>03&nbsp; About</NavLink>
            </li>
            <li>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                04&nbsp; Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="scroll-indicator">
          <div className="progress-bar" id="prog-bar" />
          <img
            src={starFilled}
            alt="star tracking the end of the horizontal scroll progress bar"
            className="progress-star"
            id="prog-star"
          />
        </div>
      </header>
      {isShown && (
        <div className="key-controls">
          <div className="keys-label">
            <ul className="keys">
              <div className="ArrowUp" />
              <div className="ArrowDown" />
              <div className="ArrowLeft" />
              <div className="ArrowRight" />
            </ul>
            <div className="control-label">Scroll</div>
          </div>
          <div className="keys-label">
            <ul className="keys">
              <div data-key="0" />
              <div data-key="1" />
              <div data-key="2" />
              <div data-key="3" />
              <div data-key="4" />
            </ul>
            <div className="control-label">Navigate to page</div>
          </div>
          <div className="keys-label">
            <ul className="keys">
              <div className="h" />
            </ul>
            <div className="control-label">Hide</div>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        {/* add a not found page */}
        {/* routes to work pages */}
        <Route path="/beestar-redesign" element={<Beestar />} />
        <Route path="/ab-testing" element={<ABTesting />} />
        <Route path="/kopi-development" element={<KopiDevelopment />} />
      </Routes>
    </article>
  );
}

export default App;
