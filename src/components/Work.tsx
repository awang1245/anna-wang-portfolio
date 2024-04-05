import { NavLink } from "react-router-dom";
import "../styles/Work.css";

function Work() {
  return (
    <>
      <main className="work">
        <div className="work-content">
          <NavLink to={"/beestar-redesign"}>
            <div className="work-card">Beestar.org</div>
          </NavLink>
          <NavLink to={"/ab-testing"}>
            <div className="work-card">AB Testing</div>
          </NavLink>
          <NavLink to={"/kopi-development"}>
            <div className="work-card">Kopi Organic Roastery</div>
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Work;
