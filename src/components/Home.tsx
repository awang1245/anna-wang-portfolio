import "../styles/Home.css";
import "@dotlottie/player-component";
import { useEffect, useState } from "react";
import work from "../data/work.json";
// import { motion } from "framer-motion";

function Home() {
  const [medScreen, setMedScreen] = useState<boolean>(false);

  useEffect(() => {
    const detectScreenSize = () => {
      const windowWidth = window.innerWidth;
      setMedScreen(windowWidth <= 2400);
    };

    detectScreenSize();

    const handleResize = () => {
      detectScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <main>
        {/* <motion.main
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      > */}
        <div className="home">
          <div className="text">
            <div className="intro">
              Hi, I'm Anna. <br />
              I'm a UI developer and designer studying
              <br />
              Computer Science and Economics at Brown University.
            </div>
            <p>
              My interests lie at the intersection of technology and design, and
              my goal is to develop <br />
              interfaces that inspire delightful relationships between users and
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
                src="https://lottie.host/29b13877-8aed-4c2c-9298-c4e09e1c28f4/5BKcZ0di5y.json"
                background="transparent"
                style={medScreen ? { minWidth: "2850px" } : {}}
                speed="0.3"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="welcome">
              Welcome, make yourself comfortable, and enjoy your stay.
            </div>
          </div>
        </div>
        <div className="featured-work">
          <h1>My Featured Work</h1>
        </div>
        {/* </motion.main> */}
      </main>
    </>
  );
}

export default Home;
