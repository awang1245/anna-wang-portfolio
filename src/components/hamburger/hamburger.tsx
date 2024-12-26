import { HashLink } from "react-router-hash-link";
import "./hamburger.css";
import ducky from "../../../public/main/ducky.svg";
import resume from "../../../public/main/resume.pdf";
import { NavLink } from "react-router-dom";
import { isDarkState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Hamburger = () => {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  const location = useLocation();

  // collapse hamburger menu whenever a navlink is clicked
  useEffect(() => {
    const input = document.getElementById("toggle-menu") as HTMLInputElement;
    if (input) {
      input.checked = false;
    }
  }, [location]);

  return (
    <nav className="mobile-nav" role="navigation">
      <NavLink className={isDark ? "dark-logo-link" : "logo-link"} to="/">
        <div className="logo">
          <img src={ducky} className="logo-duck" alt="vector art of duck" />
          Anna Wang
        </div>
      </NavLink>
      <div className="hamburger">
        <input
          id="toggle-menu"
          type="checkbox"
          className={isDark ? "input-dark" : "input-light"}
        />
        <div className="menu-icon">
          <span className={isDark ? "span-dark" : "span-light"}></span>
          <span className={isDark ? "span-dark" : "span-light"}></span>
          <span className={isDark ? "span-dark" : "span-light"}></span>
        </div>
        <ul className="hamburger-links">
          <li>
            <HashLink
              smooth
              className={isDark ? "dark-link" : "light-link"}
              to="/#work"
            >
              <p>01&nbsp; Work</p>
            </HashLink>
          </li>
          <li>
            <NavLink
              className={isDark ? "dark-link" : "light-link"}
              to={"/about"}
            >
              <p>02&nbsp; About</p>
            </NavLink>
          </li>
          {/* <li>
              <NavLink
                className={isDark ? "dark-link" : "light-link"}
                to={"/play"}
              >
                03&nbsp; Play
              </NavLink>
            </li> */}
          <li>
            <a
              className={isDark ? "dark-link" : "light-link"}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>03&nbsp; Resume</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
