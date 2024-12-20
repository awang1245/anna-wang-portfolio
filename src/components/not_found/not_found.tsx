import "./not_found.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import ducky from "../../../public/main/ducky.svg";
import { HashLink } from "react-router-hash-link";

function NotFound() {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  return (
    <>
      <main className={isDark ? "page-dark" : "page-light"}>
        <div className="not-found">
          <div className="duck-row">
            <img src={ducky} />
            <img src={ducky} className="duck-backward" />
            <img src={ducky} />
            <img src={ducky} className="duck-fallen" />
            <img src={ducky} className="fifth" />
          </div>
          <div className="error-message">
            <h1>Oops, my ducks aren’t in a row.</h1>
            <p>
              Sorry, the page you are looking for doesn't exist or has been
              moved. <br />
              <p>
                To find your way, check out{" "}
                <HashLink
                  smooth
                  className={isDark ? "hyperlink-dark" : "hyperlink"}
                  to="/#featured"
                >
                  my work
                </HashLink>
                !
              </p>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
