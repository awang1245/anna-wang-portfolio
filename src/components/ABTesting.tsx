import "../styles/ABTesting.css";
import verA from "../../public/version_A.png";
import verB from "../../public/version_B.png";

function ABTesting() {
  return (
    <>
      <main className="ab">
        <div className="ab-content">
          <section className="overview">
            <div className="grouping">
              <h1>MEDx A/B Testing</h1>
              <div className="subheading">A/B Testing | March 2024</div>
            </div>
            <div className="grouping">
              <p>In this project,</p>
              <p>I focused on</p>
            </div>
            <div className="split">
              <div className="half-screen">
                <img
                  src={verA}
                  alt="image of the original design called version A"
                />
                <p className="description">Version A: Before changes</p>
              </div>
              <div className="half-screen">
                <img
                  src={verB}
                  alt="image of the modified design called version B"
                />
                <p className="description">Version B: After changes</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default ABTesting;
