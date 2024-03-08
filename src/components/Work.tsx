import "../styles/Work.css";
import redesigned from "../../public/redesigned.png";
import original from "../../public/original.png";
import accessibility from "../../public/accessibility.png";
import speedSketches from "../../public/speed_sketches.png";
import finalSketch from "../../public/final_sketch.png";
import deskWire from "../../public/desktop_wireframe.png";
import tabWire from "../../public/tablet_wireframe.png";
import mobWire from "../../public/mobile_wireframe.png";
import guide from "../../public/guide.png";
import deskHifi from "../../public/desktop_hifi.png";
import tabHifi from "../../public/tablet_hifi.png";
import mobHifi from "../../public/mobile_hifi.png";
import monitor from "../../public/monitor.png";
import tablet from "../../public/tablet.png";
import mobile from "../../public/mobile.png";

function Work() {
  return (
    <>
      <main className="work">
        <div className="work-content">
          <section className="overview">
            <div className="grouping">
              <h1>Beestar.org</h1>
              <div className="subheading">
                Responsive Redesign | Spring 2024
              </div>
            </div>
            <div className="grouping">
              <p>
                In this project, I redesigned{" "}
                <a
                  href="https://www.beestar.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beestar.org
                </a>
                , a site that offers both free and paid programs for students
                K-8, supplementing learning in language arts, math, science,
                among other subjects. I chose this website because I used to be
                a part of their free math program in elementary school, which
                had great content, but the interface was confusing and hard to
                navigate.
              </p>
              <p>
                I focused on redesigning the home page, which needed to
                accomodate both new and existing users. After identifying
                accessibility and usability issues, I created sketches, lo-fi
                wireframes, and a hi-fi prototype in Figma. Finally, I developed
                the new, responsive website, equipped with a modernized UI to
                support a broad range of screen dimensions.
              </p>
            </div>
            <a
              href="https://awang1245.github.io/beestar-responsive-redesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="redesigned-img"
            >
              <img src={redesigned} />
            </a>
          </section>
          <section className="issues">
            <h2>Identifying the Problem</h2>
            <div className="split">
              <div className="details">
                <h3>Observations</h3>
                <ul className="details-list">
                  <li>
                    There is limited color contrast throughout the webpage.
                  </li>
                  <li>
                    The site has minimal entry points to guide the user's
                    reading pattern due to inconsistent usages in colors and
                    font sizes.
                  </li>
                  <li>
                    There are long, dense chunks of text affecting the site's
                    readability and efficiency, especially for new users.
                  </li>
                  <li>
                    Gestalt principles are utilized in the shapes and groupings
                    of different elements, but the site is not clearly visually
                    sectioned off which can make navigation confusing.
                  </li>
                  <li>
                    The site lacks affordances informing the user what elements
                    can be interacted with. None of the buttons have hover or
                    click animations. Some are flat, while others have box
                    shadows that are also found on noninteractive elements.
                  </li>
                </ul>
              </div>
              <a
                href="https://www.beestar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="original-img"
              >
                <img src={original} />
              </a>
            </div>
            <div className="split">
              <a
                href="https://wave.webaim.org/report#/https://www.beestar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="original-img"
              >
                <img src={accessibility} />
              </a>
              <div className="details">
                <h3>Accessibility Concerns</h3>
                <p className="description">
                  After running the original site through WebAIM WAVE, the
                  following issues with accessibility were identified:
                </p>
                <ul className="details-list">
                  <li>
                    Major low contrast issues with the navigation bar, making
                    readability difficult for users with low vision.
                  </li>
                  <li>
                    The site is missing alternative text for most of the smaller
                    images on the site, making these elements unavailable to
                    screenreaders.
                  </li>
                  <li>
                    The site description has fully justified text which creates
                    readability issues on varying screen sizes.
                  </li>
                  <li>
                    The interactive elements on the site are unavailable to both
                    mouse and keyboard users, making navigation inaccessible for
                    those with mobility issues.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="design">
            <h2>Redesign Process</h2>
            <div className="design-content">
              <h3>Initial Sketches</h3>
              <div className="sketches">
                <div className="half-screen">
                  <img src={speedSketches} />
                </div>
                <div className="half-screen">
                  <img src={finalSketch} />
                </div>
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
              <p className="description">
                I liked the top right sketch the most, as it gives the user an
                overview of all of Beestar's programs offerings in a left
                sidebar, while details about each program and resources for each
                are shown to the right. I refined it into a final sketch, while
                also incorporating some elements from the others.
              </p>
            </div>
            <div className="design-content">
              <h3>Lo-Fi Wireframes</h3>
              <div className="images">
                <img src={deskWire} className="redesigned-img" />
                <div className="sketches">
                  <div className="half-screen">
                    <img src={tabWire} />
                  </div>
                  <div className="half-screen">
                    <img src={mobWire} />
                  </div>
                </div>
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
              <p className="description">
                I liked the top right sketch the most, as it gives the user an
                overview of all of Beestar's programs offerings in a left
                sidebar, while details about each program and resources for each
                are shown to the right. I refined it into a final sketch, while
                also incorporating some elements from the others.
              </p>
            </div>
            <div className="design-content">
              <h3>Visual Design Style Guide</h3>
              <div className="screens">
                <img className="full-img" src={guide} />
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
            </div>
            <div className="design-content">
              <h3>Hi-Fi Prototypes</h3>
              <div className="screens">
                <div className="smaller-screens">
                  <img src={tabHifi} className="tablet-img" />

                  <img src={mobHifi} className="mobile-img" />
                </div>
                <a
                  href="https://www.figma.com/proto/HwQfYuhn5fPOSoCXn83LFC/Anna-Wang-Responsive-Redesign?type=design&node-id=45-568&t=Xv1KNFD9kodZr5h4-1&scaling=scale-down&page-id=27%3A35&starting-point-node-id=45%3A568&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="desktop-img"
                >
                  <img src={deskHifi} />
                </a>
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
              <p className="description">
                I liked the top right sketch the most, as it gives the user an
                overview of all of Beestar's programs offerings in a left
                sidebar, while details about each program and resources for each
                are shown to the right. I refined it into a final sketch, while
                also incorporating some elements from the others.
              </p>
            </div>
          </section>
          <section className="design">
            <h2>Development</h2>
            <div className="design-content">
              <div className="images">
                <div className="top-final">
                  <a
                    href="https://www.figma.com/proto/HwQfYuhn5fPOSoCXn83LFC/Anna-Wang-Responsive-Redesign?type=design&node-id=45-568&t=Xv1KNFD9kodZr5h4-1&scaling=scale-down&page-id=27%3A35&starting-point-node-id=45%3A568&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desktop-final"
                  >
                    <img src={redesigned} />
                  </a>
                  <div className="tablet-final">
                    <img src={tablet} className="tablet-img" />
                  </div>
                </div>
                <div className="bottom-final">
                  <div className="monitor-final">
                    <img src={monitor} />
                  </div>
                  <div className="mobile-final">
                    <img src={mobile} className="mobile-img" />
                  </div>
                </div>
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
              <p className="description">
                I liked the top right sketch the most, as it gives the user an
                overview of all of Beestar's programs offerings in a left
                sidebar, while details about each program and resources for each
                are shown to the right. I refined it into a final sketch, while
                also incorporating some elements from the others.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Work;
