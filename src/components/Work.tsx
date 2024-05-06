import { NavLink } from "react-router-dom";
import "../styles/Work.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";

function Work() {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <>
      <main>
        <div className="work-content">
          <NavLink
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
        </div>
      </main>
    </>
  );
}

export default Work;
