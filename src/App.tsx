import { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Play from "./components/Play";
import Work from "./components/Work";
import "./styles/App.css";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "0") {
        navigate("/");
      } else if (event.key === "1") {
        navigate("/work");
      } else if (event.key === "2") {
        navigate("/play");
      } else if (event.key === "3") {
        navigate("/about");
      } else if (event.key === "4") {
        navigate("/resume");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  function smoothScroll(dx: number, dy: number) {
    window.scrollBy({
      top: dy,
      left: dx,
      behavior: "smooth",
    });
  }

  let scrollTimer: number | null = null;
  window.addEventListener("keydown", function (e) {
    if (e.key.startsWith("Arrow")) {
      e.preventDefault();

      let scrollStep = 80;
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
      // Clear any previous scrollTimer and set a new one to ensure smooth scrolling
      clearTimeout(scrollTimer!);
      scrollTimer = setTimeout(function () {
        smoothScroll(dx, dy);
      }, 250); // Adjust this value as needed
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

  // try this also as alternative to the useffect?
  // window.onscroll = function () {
  //   handleScroll();
  // };

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
            <img src="/logo.svg" className="logo" alt="site logo" />
          </NavLink>
          <ul className="right-links">
            <li>
              <NavLink to="/work">01&nbsp; Work</NavLink>
            </li>
            <li>
              <NavLink to="/play">02&nbsp; Play</NavLink>
            </li>
            <li>
              <NavLink to="/about">03&nbsp; About</NavLink>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                04&nbsp; Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="scroll-indicator">
          <div className="progress-bar" id="prog-bar" />
          <img
            src="/star-filled.svg"
            alt="star tracking the end of the horizontal scroll progress bar"
            className="progress-star"
            id="prog-star"
          />
        </div>
      </header>
      {/* <footer>
        <div className="key-controls">
          <ul className="arrow-keys">
            <div className="ArrowUp" />
            <div className="ArrowDown" />
            <div className="ArrowLeft" />
            <div className="ArrowRight" />
          </ul>
        </div>
      </footer> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </article>
  );
}

export default App;
