import "./play.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";

function Play() {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"}>
        <div className="play">
          <p>Nothing to see here yet! Check back in Summer 2024.</p>
        </div>
      </main>
    </>
  );
}

export default Play;
