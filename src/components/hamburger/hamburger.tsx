import { HashLink } from "react-router-hash-link";
import "./hamburger.css";
import ducky from "../../../public/main/ducky.svg";
import resume from "../../../public/main/resume.pdf";
import { NavLink } from "react-router-dom";
import { isDarkState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";

const Hamburger = () => {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <nav className="mobile-nav">
      <NavLink className={isDark ? "dark-link" : "light-link"} to="/">
        <div className="logo">
          <img src={ducky} className="logo-duck" alt="vector art of duck" />
          Anna Wang
        </div>
      </NavLink>
      <div className="hamburger">
        <input
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
              01&nbsp; Work
            </HashLink>
          </li>
          <li>
            <NavLink
              className={isDark ? "dark-link" : "light-link"}
              to={"/about"}
            >
              02&nbsp; About
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
              03&nbsp; Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
