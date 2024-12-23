import "./project_card.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import { NavLink } from "react-router-dom";
import { WorkData } from "../home/home";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  work: WorkData;
}

const ProjectCard = ({ work }: ProjectCardProps) => {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <div
        className={`card-back ${inView ? "card-back-visible" : ""}`}
        ref={ref}
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
