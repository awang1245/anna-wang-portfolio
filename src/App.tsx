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
import resume from "../public/main/resume.pdf";
import Beestar from "./components/Beestar";
import ABTesting from "./components/ABTesting";
import KopiDevelopment from "./components/KopiDevelopment";
import { useRecoilState } from "recoil";
import { isDarkState } from "./components/atoms";
import GMCafe from "./components/GMCafe";
import ducky from "../public/main/logo-duck.svg";

function App() {
  const [isShown, setIsShown] = useState<boolean>(true);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkState);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToFeatured = () => {
    const featuredDiv = document.getElementById("featured");
    if (featuredDiv) {
      featuredDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  // when user chooses to go back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const progBar = document.getElementById("prog-bar");
      if (progBar) {
        progBar.style.width = 0 + "%";
      }
      const progStar = document.getElementById("prog-star");
      if (progStar) {
        progStar.style.visibility = "hidden";
      }
    }, 500);
  };

  // update scroll progress bar to 0%
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
    // Define actions for different keys
    const keyActions: { [key: string]: () => void } = {
      "0": () => navigate("/"),
      "1": () => navigate("/work"),
      "2": () => navigate("/play"),
      "3": () => navigate("/about"),
      "4": () =>
        window.open(
          "https://awang1245.github.io/anna-wang-portfolio/assets/resume-DyKsdSxX.pdf",
          "_blank"
        ),
      d: () => setIsDark((prevIsDark) => !prevIsDark),
      f: scrollToFeatured,
      t: scrollToTop,
      h: () => setIsShown((prevIsShown) => !prevIsShown),
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the key exists in keyActions and execute the corresponding action
      if (keyActions[e.key]) {
        keyActions[e.key](); // Execute action for key
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
        const key = document.querySelector(`.${e.key}`);
        if (key && !key.classList.contains("clicked")) {
          key.classList.add("clicked");
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Handle removing "clicked" class for keys
      if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4"
      ) {
        const key = document.querySelector(`[data-key="${e.key}"]`);
        if (key && key.classList.contains("clicked")) {
          key.classList.remove("clicked");
        }
      } else {
        const key = document.querySelector(`.${e.key}`);
        if (key && key.classList.contains("clicked")) {
          key.classList.remove("clicked");
        }
      }
    };

    // Add event listeners for keydown and keyup
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup function to remove event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [navigate, setIsDark, setIsShown]); // Include relevant dependencies

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
        setHasScrolled(true);
      } else {
        progStar.style.visibility = "hidden"; // hide star if no progress bar is visible
        setHasScrolled(false);
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
    <article className={isDark ? "dark-mode" : "light-mode"}>
      <header>
        <nav className={isDark ? "dark-nav" : "light-nav"}>
          <NavLink className={isDark ? "dark-link" : "light-link"} to="/">
            <div className="logo">
              <img src={ducky} className="logo-duck" />
              Anna Wang
            </div>
          </NavLink>
          <ul className="right-links">
            <li>
              <NavLink
                className={isDark ? "dark-link" : "light-link"}
                to={"/work"}
              >
                01&nbsp; Work
              </NavLink>
            </li>
            <li>
              <NavLink
                className={isDark ? "dark-link" : "light-link"}
                to={"/play"}
              >
                02&nbsp; Play
              </NavLink>
            </li>
            <li>
              <NavLink
                className={isDark ? "dark-link" : "light-link"}
                to={"/about"}
              >
                03&nbsp; About
              </NavLink>
            </li>
            <li>
              <a
                className={isDark ? "dark-link" : "light-link"}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                04&nbsp; Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="scroll-indicator">
          <div
            className={isDark ? "progress-bar-dark" : "progress-bar"}
            id="prog-bar"
          />
          <svg
            className="progress-star"
            id="prog-star"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
          >
            <path
              d="M18.9276 26.7535L17 33.5L15.0724 26.7535C14.06 23.2099 11.2901 20.44 7.74652 19.4276L1 17.5L7.74653 15.5724C11.2901 14.56 14.06 11.7901 15.0724 8.24652L17 1.5L18.9276 8.24653C19.94 11.7901 22.7099 14.56 26.2535 15.5724L33 17.5L26.2535 19.4276C22.7099 20.44 19.94 23.2099 18.9276 26.7535Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>
      {isShown && (
        <div
          className={`key-controls ${
            isDark ? "key-controls-dark" : "key-controls-light"
          }`}
        >
          <div className="left">
            <div className="keys-label">
              <ul className="keys">
                <div className="ArrowUp" />
                <div className="ArrowDown" />
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
              <div className="control-label">Navigate to Page</div>
            </div>
            <div className="keys-label">
              <ul className="keys">
                <div className="d" />
              </ul>
              <div className="control-label">Dark/Light</div>
            </div>
            {location.pathname === "/" && (
              <div className="keys-label">
                <ul className="keys">
                  <div className="f" />
                </ul>
                <div className="control-label">Featured Work</div>
              </div>
            )}
            {hasScrolled && (
              <div className="keys-label">
                <ul className="keys">
                  <div className="t" />
                </ul>
                <div className="control-label">Back to Top</div>
              </div>
            )}
          </div>
          <div className="right">
            <div className="keys-label">
              <ul className="keys">
                <div className="h" />
              </ul>
              <div className="control-label">Hide</div>
            </div>
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
        <Route path="/gmcafe" element={<GMCafe />} />
      </Routes>
    </article>
  );
}

export default App;
