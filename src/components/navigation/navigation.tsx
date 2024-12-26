import "./navigation.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import ducky from "../../../public/main/ducky.svg";
import resume from "../../../public/main/resume.pdf";
import { useEffect, useState } from "react";
import Hamburger from "../hamburger/hamburger";

const Navigation = () => {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    // function for checking if viewport width is tablet or mobile sized
    const checkViewportWidth = () => {
      if (window.innerWidth < 768) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    checkViewportWidth();

    // set up event listener to update showHamburger state when viewport width changes
    window.addEventListener("resize", checkViewportWidth);

    // clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  return (
    <>
      {showHamburger ? (
        <Hamburger />
      ) : (
        <nav
          className="desktop-nav"
          // className={showHamburger ? "mobile-nav" : ""}
        >
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
      )}
    </>
  );
};

export default Navigation;
