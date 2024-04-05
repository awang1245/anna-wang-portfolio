import "../styles/KopiDevelopment.css";
import kopi from "../../public/kopi/kopi.png";
import etsy from "../../public/kopi/etsy.png";
import goldbelly from "../../public/kopi/goldbelly.png";
import weee from "../../public/kopi/weee.png";

function KopiDevelopment() {
  return (
    <main className="kopi">
      <div className="kopi-content">
        <section className="overview">
          <div className="grouping">
            <h1>Kopi Organic Roastery</h1>
            <div className="subheading">
              React Development | Branding | Competitive Analysis | April 2024
            </div>
          </div>
          <div className="grouping">
            <p>
              In this project, I designed and developed a website for an
              imaginary coffee brand, Kopi Organic Roastery. The goal was to
              create an interactive list-based interface where users are able to
              select and aggregate items. Users are able to browse, filter, and
              sort through Kopi's signature coffee offerings and add them to
              cart.
            </p>
            <p>
              My process involved first conducting a competitive analysis on
              three competing food and beverage platforms, building out the Kopi
              brand, and then sketching, prototyping, and developing an online
              platform for purchasing its products.
            </p>
          </div>
          <a
            href="https://awang1245.github.io/kopi-development/"
            target="_blank"
            rel="noopener noreferrer"
            className="standard-img"
          >
            <img src={kopi} alt="image of the kopi roastery website" />
          </a>
        </section>
        <section className="process">
          <h2>Competitive Analysis</h2>
          <div className="process-content">
            <p className="description">
              The research I did for this project involved conducting a
              competitive analysis on three major companies Etsy, Goldbelly, and
              Weee!, online platforms where users can purchase food and
              beverages. I gained valuable insight on their strengths and
              weaknesses as competitors, along with learning from how they each
              appeared to address usability issues and implement certain
              features in their design processes.
            </p>
            <div className="split">
              <div className="details">
                <h3>Etsy</h3>
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
                <img src={etsy} alt="image of Beestar's home page" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default KopiDevelopment;
