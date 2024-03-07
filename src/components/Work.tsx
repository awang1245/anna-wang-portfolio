import "../styles/Work.css";
function Work() {
  return (
    <>
      <main>
        <div className="work">
          <section className="overview">
            <div className="grouping">
              <h1>Beestar.org</h1>
              <div className="subheading">
                Responsive Redesign | Spring 2024
              </div>
            </div>
            <div className="grouping">
              <p>
                In this project, I redesigned Beestar.org, a site that offers
                both free and paid programs for students K-8, supplementing
                learning in language arts, math, science, among other subjects.
                Specifically, I worked on the home page, which needed to
                accomodate both existing and new users.
              </p>
              <p>
                After identifying accessibility and usability issues, I created
                sketches, lo-fi wireframes, and a hi-fi prototype in Figma.
                Finally, I developed the new, responsive website, equipped with
                a modernized UI to support a broad range of screen dimensions.
              </p>
            </div>
            <a
              href="https://awang1245.github.io/beestar-responsive-redesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="public/redesigned.png"></img>
            </a>
          </section>
          <section className="issues">
            <h2>Responsive Redesign</h2>
          </section>

          <img src="public/original.png"></img>
        </div>
      </main>
    </>
  );
}

export default Work;
