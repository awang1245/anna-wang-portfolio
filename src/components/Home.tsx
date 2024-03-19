import "../styles/Home.css";
import "@dotlottie/player-component";
import ikura from "../../public/ikura.svg";
import tuna from "../../public/tuna.svg";
import shrimp from "../../public/shrimp.svg";
import tamago from "../../public/tamago.svg";
import maki from "../../public/maki.svg";
import salmon from "../../public/salmon.svg";
import ducky from "../../public/ducky.svg";
import tako from "../../public/tako.svg";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main>
        <div className="home">
          <div className="text">
            <div className="intro">
              Hi, I'm Anna. <br />
              I'm a UI developer and designer studying
              <br />
              Computer Science and Business at Brown University.
            </div>
            <p>
              My interests lie at the intersection of technology and design, and
              my goal is to develop <br />
              interfaces that foster meaningful relationships between users and
              products.
            </p>
          </div>
          <div className="sushi-belt">
            <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <dotlottie-player
              src="https://lottie.host/58ba3c4d-3096-45b3-a6e8-9d34dacf933d/6uHUa42zzw.json"
              background="transparent"
              speed="1"
              style={{ minWidth: "1440px", maxWidth: "1440px" }}
              loop
              autoplay
            ></dotlottie-player>
            <div className="marquee">
              <div className="belt-items">
                <img src={ikura} alt="salmon roe sushi graphic" />
                <img src={tuna} alt="tuna sushi graphic" />
                <img src={shrimp} alt="shrimp sushi graphic" />
                <img src={tamago} alt="egg sushi graphic" />
                <img src={maki} alt="salmon avocado roll graphic" />
                <img src={salmon} alt="salmon sushi grapihc" />
                <img src={ducky} alt="a duck on a conveyor belt" />
                <img src={tako} alt="octopus sushi graphic" />
                <img src={ikura} alt="salmon roe sushi graphic" />
                <img src={tuna} alt="tuna sushi graphic" />
                <img src={shrimp} alt="shrimp sushi graphic" />
                <img src={tamago} alt="egg sushi graphic" />
                <img src={maki} alt="salmon avocado roll graphic" />
                <img src={salmon} alt="salmon sushi grapihc" />
                <img src={ducky} alt="a duck on a conveyor belt" />
                <img src={tako} alt="octopus sushi graphic" />
              </div>
            </div>
            {/* <script
              src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
              type="module"
            ></script>
            <dotlottie-player
              src="https://lottie.host/4ed74697-ef51-4e22-a9cd-bcb355dcf9a1/WVmAV4lMnK.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player> */}
          </div>
          <div className="welcome">
            Welcome, grab a snack, and enjoy your stay.
          </div>
          <p>
            this is a new site that is a WIP! pls go to the work page for uiux
            projects
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;
