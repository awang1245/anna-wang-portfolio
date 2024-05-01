import "../styles/Home.css";
import "@dotlottie/player-component";
import { useEffect, useState } from "react";

function Home() {
  const [wideScreen, setWideScreen] = useState<boolean>(false);

  useEffect(() => {
    const detectWide = () => {
      setWideScreen(window.innerWidth > 1600);
    };

    detectWide();
    window.addEventListener("resize", detectWide);

    return () => {
      window.removeEventListener("resize", detectWide);
    };
  });

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
          <div className="lower-intro">
            <div className="sushi-belt">
              <script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                type="module"
              ></script>
              <dotlottie-player
                src="https://lottie.host/a7977099-2933-4065-94ce-5f9e5a9d47b1/f7j2aSIHgG.json"
                background="transparent"
                style={wideScreen ? {} : { minWidth: "2850px" }}
                speed="0.3"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="welcome">
              Welcome, grab a snack, and enjoy your stay.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
