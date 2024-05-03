import "../styles/FeaturedCard.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";
import { NavLink } from "react-router-dom";
import { WorkData } from "./Home";

interface FeaturedCardProps {
  work: WorkData;
}

function FeaturedCard({ work }: FeaturedCardProps) {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  return (
    <>
      <div className="feat-back">
        <NavLink className="feat-link" to={work.nav}>
          <img className="feat-img" src={work.path} />
          <div className="feat-info">
            <div className="feat-row">
              <div className="feat-name">{work.name}</div>
              <div className="feat-time">{work.time}</div>
            </div>
            <div className="feat-tags">
              {work.tags.map((tag, index) => (
                <div className="feat-tag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default FeaturedCard;
