import "../styles/GMCafe.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";
import gmcafe from "../../public/gmcafe/gmcafe.png";
import x from "../../public/kopi/x.svg";
import check from "../../public/kopi/check.svg";
import interviews from "../../public/gmcafe/interviews.png";
import personas from "../../public/gmcafe/personas.png";
import competitors from "../../public/gmcafe/competitors.png";
import wireframes from "../../public/gmcafe/wireframes.png";
import finalLofi from "../../public/gmcafe/final-lofi.png";
import hifi1 from "../../public/gmcafe/hifi1.png";
import finalHifi from "../../public/gmcafe/final-hifi.png";

export const scrollToSection = (name: string) => {
  const section = document.getElementById(name);
  if (section) {
    const offsetTop = section.offsetTop - 112;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

function GMCafe() {
  const [isDark] = useRecoilState<boolean>(isDarkState);

  return (
    <main className={isDark ? "page-dark" : "page-light"}>
      <div className="gmcafe">
        <section className="blurb">
          <div className="grouping">
            <h1>Good Morning Café NFT</h1>
            <div className="description">
              Designing a link in bio profile to build community and enable
              1.5k+ GMCafé collectors to promote their work and assets.
            </div>
          </div>
          <div className="blurb-info">
            <div className="blurb-item">
              <div className="item-name">Role</div>
              <div className="item-content">Product Designer</div>
            </div>
            <div className="blurb-item">
              <div className="item-name">Duration</div>
              <div className="item-content">May - June 2023</div>
            </div>
            <div className="blurb-item">
              <div className="item-name">Team</div>
              <div className="item-content">
                Ben &#40;Founder&#41;, <br></br>Jane &#40;Developer&#41;
              </div>
            </div>
            <div className="blurb-item">
              <div className="item-name">Skills</div>
              <div className="item-content">
                Product Design, User Research, Competitive Analysis, Figma
              </div>
            </div>
          </div>
          <a
            href="https://www.figma.com/proto/2EoWk6itNHXvBVz2agiEXj/gmcafe?type=design&node-id=319-3921&t=oInIfMszHR73tyZ6-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=319%3A3921&mode=design"
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "cover-img-dark" : "cover-img"}
          >
            <img src={gmcafe} alt="image of gmcafe mobile screens" />
          </a>
        </section>
        <div className="process">
          <div className="left">
            <ul>
              <li>
                <a
                  className={isDark ? "button-dark" : "button-light"}
                  onClick={() => scrollToSection("overview")}
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  className={isDark ? "button-dark" : "button-light"}
                  onClick={() => scrollToSection("research")}
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  className={isDark ? "button-dark" : "button-light"}
                  onClick={() => scrollToSection("lofi")}
                >
                  Lo-fi Designs
                </a>
              </li>
              <li>
                <a
                  className={isDark ? "button-dark" : "button-light"}
                  onClick={() => scrollToSection("hifi")}
                >
                  Hi-fi Designs
                </a>
              </li>
              <li>
                <a
                  className={isDark ? "button-dark" : "button-light"}
                  onClick={() => scrollToSection("final")}
                >
                  Final Prototype
                </a>
              </li>
              <li>
                <a
                  className={isDark ? "button-dark" : "button-light"}
                  onClick={() => scrollToSection("conclusion")}
                >
                  Conclusion
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <section className="overview" id="overview">
              <h2>Overview</h2>
              <div className="section-content">
                <p className="description">
                  <a
                    href="https://www.gmcafe.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isDark ? "hyperlink-dark" : "hyperlink"}
                  >
                    Good Morning Café
                  </a>{" "}
                  is an NFT brand featuring Ben Colefax's signature art style.
                  Its next steps were to innovate new tech to engage the
                  community it has grown since launching in 2022. As the sole
                  product designer, I created a link in a bio-style profile to
                  connect and enable over 1.5k GMCafé collectors to easily
                  promote their work and assets.
                </p>
              </div>
              <div className="section-content">
                <h3>The Problem</h3>
                <div className="emphasis">
                  <div className="callout">
                    GMCafé needed to engage its community.
                    <br />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      className="star"
                    >
                      <path
                        d="M18.9276 26.7535L17 33.5L15.0724 26.7535C14.06 23.2099 11.2901 20.44 7.74652 19.4276L1 17.5L7.74653 15.5724C11.2901 14.56 14.06 11.7901 15.0724 8.24652L17 1.5L18.9276 8.24653C19.94 11.7901 22.7099 14.56 26.2535 15.5724L33 17.5L26.2535 19.4276C22.7099 20.44 19.94 23.2099 18.9276 26.7535Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text">
                    <p className="description">
                      Following major brand growth, GMCafé wanted to redirect
                      focus to bringing value to its holders. With the end goal
                      of launching a series of free tools to address collector
                      needs in the Web3 space— to build an online community,{" "}
                      <b>we needed to start with user profiles.</b>
                    </p>
                    <p className="description-list">
                      We decided on a <b>link in bio-style</b> to address two
                      major trends:
                    </p>
                    <ul className="details-list">
                      <li>
                        GMCafé and the broader NFT community operate primarily
                        through X (formerly Twitter) and Discord, where a link
                        in bio format is most efficient and easily sharable.
                      </li>
                      <li>
                        Existing tools were either paid, not designed with Web3
                        users in mind, or a combination of both.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="research" id="research">
              <h2>Research</h2>
              <div className="section-content">
                <h3>User Interviews</h3>
                <p className="description-img">
                  After defining our initial goals, I needed to better
                  understand the collectors within the GMCafé community as
                  someone with limited familiarity with the NFT space. I
                  conducted interviews with current holders to find out their
                  needs and experiences with existing link in bio and
                  promotional tools.
                </p>
                <img className="full-img" src={interviews} />
                <div className="interview-questions"></div>
              </div>
              <div className="section-content">
                <h3>Personas</h3>
                <p className="description-img">
                  I constructed two quick user personas based on my findings to
                  help guide my design process and consider what features our
                  holders needed most.
                </p>
                <img className="full-img" src={personas} />
              </div>
              <div className="section-content">
                <h3>Competitive Analysis</h3>
                <p className="description-img">
                  Following user research, I also conducted a competitive
                  analysis on two other link in bio platforms: Linktree, which
                  is most widely used by the general public, and Eth.co, a newer
                  tool geared toward NFT collectors, similar to GMCafé's
                  mission.
                </p>
                <img className="full-img" src={competitors} />
                <p className="description-top">
                  I constructed the following feature comparison chart:
                </p>
                <div className="table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <div className="row-content">factors</div>
                        </th>
                        <th>
                          <div className="row-content">Linktree</div>
                        </th>
                        <th>
                          <div className="row-content">Eth.co</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="row-content">free tier</div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={check} className="check-icon" />
                            <div className="explanation">
                              free tier gives access to unlimited links and
                              basic features
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={x} />
                            <div className="explanation">
                              one tier requiring ENS, a Web3 username that is
                              paid for annually
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>branding/customization</td>
                        <td>
                          <div className="row-content">
                            <img src={check} />
                            <div className="explanation">
                              basic customization with limited colors and
                              backgrounds
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={check} />
                            <div className="explanation">
                              more customization including custom backgrounds
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>organization</td>
                        <td>
                          <div className="row-content">
                            <img src={check} className="check-icon" />
                            <div className="explanation">
                              users can group links and name groups
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={x} className="check-icon" />
                            <div className="explanation">
                              no organization of links, preset categories for
                              displayed assets
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>social media integrations</td>
                        <td>
                          <div className="row-content">
                            <img src={x} className="check-icon" />
                            <div className="explanation">
                              limited social media integrations that do not
                              include Web3 platforms
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={x} className="check-icon" />
                            <div className="explanation">
                              no dedicated social media feature
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>user interface</td>
                        <td>
                          <div className="row-content">
                            <img src={check} className="check-icon" />
                            <div className="explanation">
                              clean, single column format
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={x} className="check-icon" />
                            <div className="explanation">
                              bulky UI requires significant scrolling
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>custom domain</td>
                        <td>
                          <div className="row-content">
                            <img src={x} />
                            <div className="explanation">
                              no custom domain supported
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={check} />
                            <div className="explanation">
                              custom domain, but user needs ENS
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>showcasing NFTs</td>
                        <td>
                          <div className="row-content">
                            <img src={check} />
                            <div className="explanation">
                              display limited number of NFTs with OpenSea
                              integration
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={check} className="check-icon" />
                            <div className="explanation">
                              display any collected and created assets, no
                              custom organization
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>community</td>
                        <td>
                          <div className="row-content">
                            <img src={x} />
                            <div className="explanation">
                              no dedicated community features
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="row-content">
                            <img src={check} className="check-icon" />
                            <div className="explanation">
                              shows users supporting you/that you support
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="description">
                  Analyzing our competing platforms allowed me to see where they
                  were successful and identify feature gaps in the current Web3
                  landscape. Here are my takeaways leading into the design
                  process for our product:
                </p>
                <ul className="details-list">
                  <li>
                    Simple, single column format with basic customization for
                    ease of use and efficiency
                  </li>
                  <li>
                    Allow collectors to showcase featured GMCafé assets they own
                  </li>
                  <li>
                    Enable custom organization of links to meet the unique needs
                    of our major holder demographics
                  </li>
                  <li>
                    Offer integrations with major Web3 platforms used by
                    collectors and artists
                  </li>
                  <li>Provide free custom domains that do not require ENS</li>
                </ul>
              </div>
            </section>
            <section className="lofi" id="lofi">
              <h2>Lo-fi Designs</h2>
              <div className="section-content">
                <h3>Ideation</h3>
                <div className="emphasis">
                  <div className="callout">
                    Making our product unique <br />
                    to GMCafé
                    <br />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      className="star"
                    >
                      <path
                        d="M18.9276 26.7535L17 33.5L15.0724 26.7535C14.06 23.2099 11.2901 20.44 7.74652 19.4276L1 17.5L7.74653 15.5724C11.2901 14.56 14.06 11.7901 15.0724 8.24652L17 1.5L18.9276 8.24653C19.94 11.7901 22.7099 14.56 26.2535 15.5724L33 17.5L26.2535 19.4276C22.7099 20.44 19.94 23.2099 18.9276 26.7535Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text">
                    {" "}
                    <p className="description">
                      In addition to my findings from user and market research,
                      I wanted my design process to be guided by a strong sense
                      of what would make our feature uniquely GMCafé.{" "}
                      <b>
                        I was creating not just a link in bio tool but also a
                        community profile.
                      </b>
                    </p>
                    <p className="description">
                      I needed to effectively allocate space to display user
                      details without impacting the utility of the tool.
                      Importantly, my designs needed to align with the themes
                      and playfulness of the GMCafé brand and artstyle.
                    </p>
                  </div>
                </div>
                <p className="description-top">
                  Following these guidelines, I created five sketches of
                  potential layouts for our link in bio profile:
                </p>
                <img className="full-img" src={wireframes} />
              </div>
              <div className="section-content">
                <h3>Final Designs</h3>
                <p className="description-list">
                  After presenting my sketches to the founder and team, we
                  narrowed it down to two designs, which they wanted to see
                  prototyped before we made a final decision.
                </p>
                <ul className="details-list-img">
                  <li>
                    Version A better accomplished the goal of honoring the
                    GMCafé brand.
                  </li>
                  <li>
                    Version B had a simpler, more practical interface that could
                    better fit profile content.
                  </li>
                </ul>
                <img className="full-img" src={finalLofi} />
              </div>
            </section>
            <section className="hifi" id="hifi">
              <h2>Hi-fi Designs</h2>
              <div className="section-content">
                <h3>First Iteration</h3>
                <div className="emphasis">
                  <div className="callout">
                    Prioritizing <br /> Our Users
                    <br />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="35"
                      viewBox="0 0 34 35"
                      fill="none"
                      className="star"
                    >
                      <path
                        d="M18.9276 26.7535L17 33.5L15.0724 26.7535C14.06 23.2099 11.2901 20.44 7.74652 19.4276L1 17.5L7.74653 15.5724C11.2901 14.56 14.06 11.7901 15.0724 8.24652L17 1.5L18.9276 8.24653C19.94 11.7901 22.7099 14.56 26.2535 15.5724L33 17.5L26.2535 19.4276C22.7099 20.44 19.94 23.2099 18.9276 26.7535Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text">
                    {" "}
                    <p className="description">
                      Based on feedback on my lo-fi designs, I built out screens
                      for Version A and Version B in Figma so that the team
                      could better visualize how each layout would look before
                      moving on to final iterations and development.
                    </p>
                    <p className="description">
                      I also tried various color combinations on both designs to
                      test their compatibility with customization.
                    </p>
                  </div>
                </div>
                <p className="description-top-list">
                  After comparing the two,{" "}
                  <b>we decided to proceed with Version B</b> based on the
                  following considerations:
                </p>
                <ul className="details-list-img">
                  <li>
                    The team liked the "storefront" aesthetic of Version A, but
                    the design cluttered the upper portion of the profile,
                    making content tightly packed and spacing inflexible,
                    especially for bulkier NFTs.
                  </li>
                  <li>
                    Version B was less forward in branding, but the colors and
                    integration of NFTs as avatars still gave the interface a
                    strong GMCafé feel. By allowing more breathing room for the
                    profile information, the interface would be less
                    overwhelming and more functional for collectors and
                    visitors.
                  </li>
                </ul>
                <img className="full-img" src={hifi1} />
              </div>
              <div className="section-content">
                <h3>Final Screens</h3>
                <p className="description-list">
                  For my second and final iteration, since the link in bio
                  features and profile format were mostly finalized, I focused
                  on refining the informational content of the profile,
                  resulting in the following final changes:
                </p>
                <ul className="details-list-img">
                  <li>
                    Users now have a bio to give a brief description of
                    themselves
                  </li>
                  <li>
                    Added a join date for holders and changed birthdays to be
                    the same format for consistency
                  </li>
                  <li>
                    Profiles display asset counts and time zones to help
                    facilitate trading and communication
                  </li>
                  <li>
                    Standardized the look of social media icons (adapted from
                    Tabler) and added more Web3 platforms
                  </li>
                </ul>
                <img className="full-img" src={finalHifi} />
              </div>
            </section>
            <section className="final" id="final">
              <h2>Final Prototype</h2>
              <div className="section-content">
                <a
                  href="https://www.figma.com/proto/2EoWk6itNHXvBVz2agiEXj/gmcafe?node-id=1123-4387&t=7OUdUAqS3gR0JrXf-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1123%3A4387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "cover-img-dark" : "cover-img"}
                >
                  <img src={gmcafe} />
                </a>
              </div>
            </section>
            <section className="conclusion" id="conclusion">
              <h2>Conclusion</h2>
              <p className="description">
                This project was a lot of fun as it was my first time designing
                beyond a school or personal setting, and I loved working with
                the GMCafé team. During these two months, one of my biggest
                challenges was designing for a space I was unfamiliar with. User
                research was essential in helping me understand collectors in
                the NFT space, specifically the GMCafé community.
              </p>
              <p className="description">
                I also battled with finding the right balance between GMCafé's
                two main priorities for the product: branding and functionality.
                It was interesting undergoing the design process for two quite
                different versions, seeing them both from the beginning and
                almost to the end. Ultimately, what helped us come to a decision
                in the end was refocusing on and prioritizing our users.
              </p>
              <p className="description">
                GMCafé has largely finished development and will soon release
                the link in bio profile alongside other features I have also
                been working on, so stay tuned :)
              </p>
              <p className="description">
                If you haven't had a chance to yet, please check out the final
                prototype{" "}
                <a
                  href="https://www.figma.com/proto/2EoWk6itNHXvBVz2agiEXj/gmcafe?node-id=1123-4387&t=7OUdUAqS3gR0JrXf-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1123%3A4387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "hyperlink-dark" : "hyperlink"}
                >
                  here
                </a>
                !
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GMCafe;
