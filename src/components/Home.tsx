import "../styles/Home.css";
import "@dotlottie/player-component";

function Home() {
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
              I'm interested in the intersection of technology and design, and
              my goal is to develop <br />
              interfaces that foster meaningful relationships between users and
              products.
            </p>
          </div>
          <script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          ></script>
          <dotlottie-player
            src="https://lottie.host/58ba3c4d-3096-45b3-a6e8-9d34dacf933d/6uHUa42zzw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
          <div className="marquee">
            <div className="belt-items">
              <img src="src/assets/ikura.svg" />
              <img src="src/assets/shrimp.svg" />
              <img src="src/assets/tamago.svg" />
              <img src="src/assets/maki.svg" />
              <img src="src/assets/salmon.svg" />
              <img src="src/assets/ducky.svg" />
              <img src="src/assets/tako.svg" />
              <img src="src/assets/tuna.svg" />
              <img src="src/assets/ikura.svg" />
              <img src="src/assets/shrimp.svg" />
              <img src="src/assets/tamago.svg" />
              <img src="src/assets/maki.svg" />
              <img src="src/assets/salmon.svg" />
              <img src="src/assets/ducky.svg" />
              <img src="src/assets/tako.svg" />
              <img src="src/assets/tuna.svg" />
            </div>
          </div>
          <div className="welcome">
            Welcome, grab a snack, and enjoy your stay.
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
