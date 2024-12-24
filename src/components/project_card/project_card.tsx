import "./project_card.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import { NavLink } from "react-router-dom";
import { WorkData } from "../home/home";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  work: WorkData;
  index: number;
}

const ProjectCard = ({ work, index }: ProjectCardProps) => {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  const [delay, setDelay] = useState<string>("0s");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      // if viewport height is tall enough to show at least one project card,
      // set delay so that they load in sequentially with other elements on home
      if (window.innerHeight > 800) {
        console.log("already in view, card #: " + index);
        setDelay(`${(index + 1) * 0.1 + 1}s`); // e.g., 1.2s, 1.4s, 1.6s
        // if viewport height is not tall enough to show cards, set smaller delay
        // offset by 0.2s when cards are scrolled into view
      } else {
        console.log("scrolled into view, card #: " + index);
        setDelay(`${(index + 1) * 0.1}s`); // e.g., 0.2s, 0.4s, 0.6s
      }
    }
  }, [inView, index]);

  return (
    <>
      <div
        className={`card-back ${inView ? "card-back-visible" : ""}`}
        ref={ref}
        style={{ animationDelay: delay }}
      >
        {work.nav ? (
          <NavLink
            className={isDark ? "card-link-dark" : "card-link-light"}
            to={work.nav}
          >
            <img className="card-img" src={work.path} loading="lazy" />
            <div className="card-info">
              <div className="card-row">
                <div className="card-name">{work.name}</div>
                <div className="card-time">{work.time}</div>
              </div>
              <div className="card-tags">
                {work.tags.map((tag, index) => (
                  <div className="card-tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </NavLink>
        ) : (
          <div>
            <img className="card-img" src={work.path} loading="lazy" />
            <div className="card-info">
              <div className="card-row">
                <div className="card-name">{work.name}</div>
                <div className="card-time">{work.time}</div>
              </div>
              <div className="card-tags">
                {work.tags.map((tag, index) => (
                  <div className="card-tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
