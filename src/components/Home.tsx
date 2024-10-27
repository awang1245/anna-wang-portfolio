import "../styles/Home.css";
import "@dotlottie/player-component";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projects";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";
import { NavLink } from "react-router-dom";

export interface WorkData {
  name: string;
  path: string;
  time: string;
  tags: string[];
  nav?: string;
  featured: boolean;
}

function Home() {
  const [medScreen, setMedScreen] = useState<boolean>(false);
  const [isDark] = useRecoilState<boolean>(isDarkState);

  useEffect(() => {
    const detectScreenSize = () => {
      const windowWidth = window.innerWidth;
      setMedScreen(windowWidth <= 2400);
    };

    detectScreenSize();

    const handleResize = () => {
      detectScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"}>
        <div className="home">
          <div className="text">
            <div className="intro-left">
              <div className="top">
                Hi, I’m{" "}
                <NavLink
                  className={isDark ? "name-dark" : "name-light"}
                  to="/about"
                >
                  Anna
                </NavLink>
                . <br />a front-end developer and
                <br />
                product designer.
              </div>
              <div className="bottom">My favorite sushi is spicy salmon.</div>
            </div>
            <div className="intro-right">
              <p>I’m a junior at Brown University studying Computer Science.</p>
              <p>
                I approach computing and design as ways to create meaningful
                relationships between people and products. My style balances a
                love for cleanliness and pixel-perfection, with empathy and
                delight.
              </p>
            </div>
          </div>
          <div className="lower-intro">
            <div className="sushi-belt">
              <script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                type="module"
              ></script>

              <dotlottie-player
                src="https://lottie.host/29b13877-8aed-4c2c-9298-c4e09e1c28f4/5BKcZ0di5y.json"
                background="transparent"
                style={medScreen ? { minWidth: "2850px" } : {}}
                speed="0.3"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="welcome">
              Welcome, make yourself comfortable, and enjoy your stay.
            </div>
          </div>
        </div>
        <div className="featured-work" id="featured">
          <h1>Featured Work</h1>
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
