import "./progress_bar.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ProgressBarProps {
  setHasScrolled: Dispatch<SetStateAction<boolean>>;
}

const ProgressBar = ({ setHasScrolled }: ProgressBarProps) => {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  const location = useLocation();

  /**
   * Update scroll progress bar to 0% whenever location changes on site
   * */
  useEffect(() => {
    window.scrollTo(0, 0);
    const progBar = document.getElementById("prog-bar");
    if (progBar) {
      progBar.style.width = 0 + "%";
    }
    const progStar = document.getElementById("prog-star");
    if (progStar) {
      progStar.style.visibility = "hidden";
    }
  }, [location]);

  /**
   * Handles functionality of horizontal scroll bar on page.
   */
  const handleScroll = () => {
    // how much is currently scrolled
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // how much can be scrolled
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (currScroll / height) * 100; // get percentage value
    const progBar = document.getElementById("prog-bar");
    const progStar = document.getElementById("prog-star");

    if (progBar && progStar) {
      // once mounted
      progBar.style.width = scrolled + "%";
      if (parseInt(progBar.style.width) > 0) {
        // if user has started scrolling
        progStar.style.visibility = "visible";
        setHasScrolled(true);
      } else {
        progStar.style.visibility = "hidden"; // hide star if no progress bar is visible
        setHasScrolled(false);
      }
    }
    // separate statement bc progBar width needs to be updated first before star's location is determined
    if (progBar && progStar) {
      const progBarWidth = progBar.getBoundingClientRect().width;
      const progStarOffset = progBarWidth - 12; // half of width of star, so it is centered
      progStar.style.left = progStarOffset + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div
        className={isDark ? "progress-bar-dark" : "progress-bar"}
        id="prog-bar"
      />
      <svg
        className="progress-star"
        id="prog-star"
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
      >
        <path
          d="M18.9276 26.7535L17 33.5L15.0724 26.7535C14.06 23.2099 11.2901 20.44 7.74652 19.4276L1 17.5L7.74653 15.5724C11.2901 14.56 14.06 11.7901 15.0724 8.24652L17 1.5L18.9276 8.24653C19.94 11.7901 22.7099 14.56 26.2535 15.5724L33 17.5L26.2535 19.4276C22.7099 20.44 19.94 23.2099 18.9276 26.7535Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
