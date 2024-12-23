import "./navigation.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import ducky from "../../../public/main/ducky.svg";
import resume from "../../../public/main/resume.pdf";

const Navigation = () => {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <nav className={isDark ? "dark-nav" : "light-nav"}>
      <NavLink className={isDark ? "dark-link" : "light-link"} to="/">
        <div className="logo">
          <img src={ducky} className="logo-duck" alt="vector art of duck" />
          Anna Wang
        </div>
      </NavLink>
      <ul className="right-links">
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
    </nav>
  );
};

export default Navigation;
