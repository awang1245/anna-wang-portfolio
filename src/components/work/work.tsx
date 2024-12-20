import "./work.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import { projects } from "../../data/projects";
import { WorkData } from "../home/home";
import ProjectCard from "../project_card/project_card";

export const scrollToSection = (name: string) => {
  const section = document.getElementById(name);
  if (section) {
    const offsetTop = section.offsetTop - 112;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

function Work() {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"}>
        <div className="work-content">
          <h1>All Work</h1>
          <div className="project-cards">
            {projects.map((work: WorkData, index: number) => (
              <ProjectCard work={work} key={index} />
            ))}
          </div>
          {/* <NavLink
            className={isDark ? "dark-link" : "light-link"}
            to={"/beestar-redesign"}
          >
            <div className="work-card">Beestar.org</div>
          </NavLink>
          <NavLink
            className={isDark ? "dark-link" : "light-link"}
            to={"/ab-testing"}
          >
            <div className="work-card">AB Testing</div>
          </NavLink>
          <NavLink
            className={isDark ? "dark-link" : "light-link"}
            to={"/kopi-development"}
          >
            <div className="work-card">Kopi Organic Roastery</div>
          </NavLink>
          <NavLink
            className={isDark ? "dark-link" : "light-link"}
            to={"/gmcafe"}
          >
            <div className="work-card">Good Morning Café NFT</div>
          </NavLink> */}
        </div>
      </main>
    </>
  );
}

export default Work;
