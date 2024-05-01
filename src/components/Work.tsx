import { NavLink } from "react-router-dom";
import "../styles/Work.css";
import { motion } from "framer-motion";

function Work() {
  return (
    <>
      <motion.main
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="work"
      >
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
      </motion.main>
    </>
  );
}

export default Work;
