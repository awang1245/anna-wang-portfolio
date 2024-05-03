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
import resume from "../public/resume.pdf";
import Beestar from "./components/Beestar";
import ABTesting from "./components/ABTesting";
import KopiDevelopment from "./components/KopiDevelopment";
import { useRecoilState } from "recoil";
import { isDarkState } from "./components/atoms";
// import { AnimatePresence } from "framer-motion";

function App() {
  const [isShown, setIsShown] = useState<boolean>(true);
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkState);
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
          break;
        case "d":
          setIsDark((prevIsDark) => !prevIsDark);
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

      let scrollStep = 160;
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
    } else {
      const key = document.querySelector("." + e.key);
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
    <article className={isDark ? "dark-mode" : "light-mode"}>
      <header>
        <nav className={isDark ? "dark-nav" : "light-nav"}>
          <NavLink className={isDark ? "dark-link" : "light-link"} to="/">
            {/* <img src={logo} className="logo" alt="site logo" /> */}
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="40"
              viewBox="0 0 35 40"
              fill="none"
            >
              <path
                d="M4.83736 12.3821C6.61041 10.3541 8.48511 8.43266 10.6083 6.7677C11.4553 6.10301 12.249 5.58997 13.3219 5.44315C13.4187 5.43025 13.6236 5.58997 13.4929 5.40766C13.5881 5.53834 13.5365 5.80938 13.5123 5.95297C13.4187 6.52086 13.1928 7.0581 12.9347 7.56791C11.6553 10.0879 10.1969 12.5225 8.87231 15.0199C7.54776 17.5173 6.09899 20.1487 4.71958 22.7187C3.18369 25.5808 1.75912 28.4993 0.202248 31.3501C-0.702833 33.0086 1.66232 34.346 2.70937 32.815C3.63704 31.4598 4.30173 29.8642 5.13582 28.4445C5.907 27.1312 6.71851 25.8422 7.55905 24.5725C9.33211 21.8959 11.1261 19.2033 13.0525 16.6349C15.103 13.9003 17.3778 11.3254 19.8059 8.9215C21.9774 6.77093 24.3039 4.53646 27.1917 3.37486C28.3211 2.9199 29.7956 2.54399 30.925 3.20868C32.1318 3.91855 31.8865 5.41895 31.5461 6.55474C31.0799 8.10838 30.2813 9.52811 29.4875 10.9333C28.6469 12.4224 27.8354 13.9277 26.9626 15.399C25.2251 18.3337 23.373 21.2135 21.9371 24.3127C20.6609 27.0667 19.4445 30.1401 19.3267 33.2103C19.2622 34.9091 19.6526 36.7031 20.7481 38.039C21.7435 39.2554 23.2762 39.854 24.8104 39.9782C28.3937 40.267 31.125 37.6372 33.2772 35.1204C33.787 34.5251 33.8629 33.6523 33.2772 33.0667C32.7561 32.5456 31.7349 32.4681 31.2234 33.0667C29.5924 34.9752 27.3998 37.5695 24.5717 37.0355C21.7435 36.5014 22.05 33.1231 22.5808 30.9887C24.1748 24.5805 28.2468 19.0952 31.4235 13.4098C32.9804 10.6236 35.2003 7.31462 34.6405 3.95727C34.0661 0.50635 30.3458 -0.555224 27.3579 0.261123C24.3103 1.0936 21.5773 3.20707 19.3219 5.3399C16.8164 7.70989 14.4544 10.2315 12.291 12.9193C9.91291 15.8717 7.80589 19.0274 5.68113 22.1637C4.73733 23.5577 3.82418 24.9726 2.95782 26.4165C2.49641 27.1861 2.04952 27.9637 1.61392 28.7462C1.14121 29.5964 0.745942 30.5466 0.197408 31.3485L2.70453 32.8134C4.2856 29.9174 5.72953 26.9489 7.29447 24.0449C8.90135 21.0635 10.5034 18.0804 12.1135 15.1006C12.904 13.6373 13.7075 12.1804 14.5093 10.7236C15.2224 9.42809 16.0468 8.1229 16.3211 6.6467C16.5953 5.1705 16.2517 3.62493 14.8029 2.90699C13.3542 2.18906 11.7134 2.63434 10.4017 3.38131C8.97717 4.19282 7.6736 5.36733 6.47328 6.47246C5.16325 7.67923 3.95164 8.98442 2.78036 10.3251C1.60908 11.6658 3.60154 13.7889 4.83413 12.3789L4.83736 12.3821Z"
                fill="currentColor"
              />
              <path
                d="M23.5679 22.7025C20.6994 21.57 17.4759 21.3006 14.4186 21.3732C9.95939 21.4812 5.53079 22.396 1.29901 23.7706C-0.470819 24.3449 0.285835 27.1505 2.0718 26.5713C6.06641 25.2742 10.2095 24.3804 14.4203 24.2772C17.2517 24.2078 20.1428 24.453 22.7983 25.5033C23.5275 25.7921 24.3923 25.1871 24.5843 24.4885C24.8101 23.6641 24.3019 22.9913 23.5695 22.7025H23.5679Z"
                fill="currentColor"
              />
            </svg>
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
          {/* <img
            src={starFilled}
            alt="star tracking the end of the horizontal scroll progress bar"
            className="progress-star"
            id="prog-star"
          /> */}
        </div>
      </header>
      {isShown && (
        <div className={isDark ? "key-controls-dark" : "key-controls-light"}>
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
              <div className="d" />
            </ul>
            <div className="control-label">Dark/Light</div>
          </div>
          <div className="keys-label">
            <ul className="keys">
              <div className="h" />
            </ul>
            <div className="control-label">Hide</div>
          </div>
        </div>
      )}
      {/* <AnimatePresence initial={false}> */}
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
      {/* </AnimatePresence> */}
    </article>
  );
}

export default App;
