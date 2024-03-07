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
              <img src="public/ikura.svg" alt="salmon roe sushi graphic" />
              <img src="public/tuna.svg" alt="tuna sushi graphic" />
              <img src="public/shrimp.svg" alt="shrimp sushi graphic" />
              <img src="public/tamago.svg" alt="egg sushi graphic" />
              <img src="public/maki.svg" alt="salmon avocado roll graphic" />
              <img src="public/salmon.svg" alt="salmon sushi grapihc" />
              <img src="public/ducky.svg" alt="a duck on a conveyor belt" />
              <img src="public/tako.svg" alt="octopus sushi graphic" />
              <img src="public/ikura.svg" alt="salmon roe sushi graphic" />
              <img src="public/tuna.svg" alt="tuna sushi graphic" />
              <img src="public/shrimp.svg" alt="shrimp sushi graphic" />
              <img src="public/tamago.svg" alt="egg sushi graphic" />
              <img src="public/maki.svg" alt="salmon avocado roll graphic" />
              <img src="public/salmon.svg" alt="salmon sushi grapihc" />
              <img src="public/ducky.svg" alt="a duck on a conveyor belt" />
              <img src="public/tako.svg" alt="octopus sushi graphic" />
            </div>
          </div>
          <div className="welcome">
            Welcome, grab a snack, and enjoy your stay.
          </div>
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
          ,
        </div>
      </main>
    </>
  );
}

export default Home;
