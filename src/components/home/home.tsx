import "./home.css";
import "@dotlottie/player-component";
import { useEffect, useState } from "react";
import ProjectCard from "../project_card/project_card";
import { projects } from "../../data/projects";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import { NavLink, useLocation } from "react-router-dom";

export interface WorkData {
  name: string;
  path: string;
  time: string;
  tags: string[];
  nav?: string;
  featured: boolean;
}

function Home() {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  const location = useLocation();

  useEffect(() => {
    // scroll to featured section if hash is present in url
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"}>
        <div className="home">
          <div className="home-text">
            <div className="intro-left">
              <div className="basic-intro">
                Hi, I’m{" "}
                <NavLink
                  className={isDark ? "name-dark" : "name-light"}
                  to="/about"
                >
                  Anna
                </NavLink>
                . <br />a product designer and
                <br />
                front-end developer.
              </div>
              <div className={isDark ? "fun-facts-dark" : "fun-facts-light"}>
                <ul className="facts">
                  <li>My favorite sushi is spicy salmon.</li>
                  <li>I LOVE ducks.</li>
                  <li>I pet kitties even though I'm allergic to them.</li>
                  <li>I study economics (sometimes).</li>
                  <li>I'm a bit of a caffeine addict.</li>
                  <li>I grew up in Philadelphia area.</li>
                  <li>I started designing in middle school.</li>
                  <li>I'm a huge Studio Ghibli fan.</li>
                  <li>My favorite sushi is spicy salmon.</li>
                </ul>
              </div>
            </div>
            <div className="intro-right">
              <p>I’m a junior at Brown University studying Computer Science.</p>
              <p className="top">
                I approach computing and design as ways to create meaningful
                relationships. I enjoy building digital spaces that bring people
                and products together.
              </p>
              <p>
                My style balances a love for cleanliness and pixel-perfection,
                with empathy and delight.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/annaawang/"
                  target="_blank"
                  className={isDark ? "social-dark" : "social-light"}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 0.999999 1.125 0 2.375 0C3.75 0 4.75 0.999999 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/awang1245"
                  target="_blank"
                  className={isDark ? "social-dark" : "social-light"}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99646 0C7.62248 0.0012701 5.32634 0.868282 3.51863 2.446C1.71091 4.02373 0.509489 6.20928 0.12919 8.61186C-0.251109 11.0144 0.214508 13.4774 1.44279 15.5603C2.67108 17.6432 4.58194 19.2102 6.83368 19.9812C7.33045 20.0762 7.51757 19.7588 7.51757 19.4888C7.51757 19.2189 7.50763 18.4362 7.50432 17.5805C4.7224 18.2002 4.13456 16.37 4.13456 16.37C3.68084 15.1816 3.0251 14.8692 3.0251 14.8692C2.11767 14.2342 3.093 14.2461 3.093 14.2461C4.09813 14.3191 4.62637 15.3038 4.62637 15.3038C5.51724 16.8708 6.96615 16.4175 7.53578 16.1527C7.6252 15.4888 7.88518 15.0372 8.17165 14.7809C5.94943 14.5228 3.6146 13.6434 3.6146 9.7147C3.60083 8.69582 3.96959 7.7105 4.64458 6.9626C4.54191 6.70453 4.19913 5.6621 4.74227 4.24615C4.74227 4.24615 5.58182 3.97111 7.49273 5.29708C9.13179 4.83751 10.8611 4.83751 12.5002 5.29708C14.4094 3.97111 15.2473 4.24615 15.2473 4.24615C15.7921 5.6587 15.4493 6.70114 15.3467 6.9626C16.0238 7.71062 16.3933 8.69766 16.3783 9.71809C16.3783 13.6552 14.0385 14.5228 11.813 14.7758C12.1707 15.095 12.4902 15.718 12.4902 16.6756C12.4902 18.0474 12.4787 19.151 12.4787 19.4888C12.4787 19.7622 12.6591 20.0813 13.1658 19.9812C15.4179 19.2101 17.3289 17.6428 18.5572 15.5595C19.7854 13.4763 20.2508 11.013 19.8701 8.61018C19.4893 6.20738 18.2873 4.02181 16.479 2.44436C14.6707 0.866906 12.374 0.000465046 9.99976 0H9.99646Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:anna_wang@brown.edu"
                  className={isDark ? "social-dark" : "social-light"}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-0.000488281 8.68555V16.857C-0.000488281 17.6147 0.300531 18.3415 0.83635 18.8773C1.37217 19.4131 2.09889 19.7141 2.85665 19.7141H17.1424C17.9001 19.7141 18.6269 19.4131 19.1627 18.8773C19.6985 18.3415 19.9995 17.6147 19.9995 16.857V8.68555L11.4967 13.917C11.0464 14.194 10.5281 14.3406 9.99951 14.3406C9.47088 14.3406 8.95261 14.194 8.50237 13.917L-0.000488281 8.68555Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.9995 7.00762V6.85714C19.9995 6.09938 19.6985 5.37266 19.1627 4.83684C18.6269 4.30102 17.9001 4 17.1424 4H2.85665C2.09889 4 1.37217 4.30102 0.83635 4.83684C0.300531 5.37266 -0.000488281 6.09938 -0.000488281 6.85714V7.00762L9.25094 12.701C9.47606 12.8395 9.7352 12.9128 9.99951 12.9128C10.2638 12.9128 10.523 12.8395 10.7481 12.701L19.9995 7.00762Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="lower-intro">
            <div className="sushi-belt">
              <div className="sushi-belt-content">
                <script
                  src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                  type="module"
                ></script>

                <dotlottie-player
                  src="https://lottie.host/29b13877-8aed-4c2c-9298-c4e09e1c28f4/5BKcZ0di5y.json"
                  background="transparent"
                  speed="0.3"
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
            <div className="welcome">
              Welcome, make yourself comfortable, and enjoy your stay.
            </div>
          </div>
        </div>
        <div className="featured-work" id="featured">
          {/* <h1>Featured Work</h1> */}
          <div className="featured-cards">
            {projects
              .filter((work) => work.featured)
              .map((work: WorkData, index: number) => (
                <ProjectCard work={work} key={index} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
