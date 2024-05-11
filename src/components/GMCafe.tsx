import "../styles/GMCafe.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";
import gmcafe from "../../public/gmcafe/gmcafe.png";
import x from "../../public/kopi/x.svg";
import check from "../../public/kopi/check.svg";
import interviews from "../../public/gmcafe/interviews.png";
import personas from "../../public/gmcafe/personas.png";
import wireframes from "../../public/gmcafe/wireframes.png";

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
                Product Design, User Research, Competitive Analysis, Figma,
                Adobe Illustrator
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
            <section className="overview">
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
                  community it has built since launching in 2022. As the sole
                  product designer, I created a link in a bio-style profile to
                  connect and enable over 1.5k GMCafé collectors to easily
                  promote their work and assets.
                </p>
              </div>
              <div className="section-content">
                <h3>The Problem & Defining Goals</h3>
                <p className="description">
                  Following major brand growth, GMCafé wanted to redirect focus
                  to bringing value to its holders. With the end goal of
                  launching a series of free tools to build community and
                  address needs in the Web3 space, the team decided to start
                  with user profiles in a link in bio-style to address two major
                  trends:
                </p>
                <ul className="details-list">
                  <li>
                    GMCafé and the broader NFT community operate primarily
                    through X (formerly Twitter) and Discord, where a link in
                    bio format is most efficient and easily sharable.
                  </li>
                  <li>
                    Existing tools were either paid, not designed with Web3
                    users in mind, or a combination of both.
                  </li>
                </ul>
              </div>
            </section>
            <section className="research">
              <h2>Research</h2>
              <div className="section-content">
                <h3>User Interviews</h3>
                <p className="description">
                  After defining our initial goals, I needed to better
                  understand the collectors within the GMCafé community. I
                  conducted interviews with current holders to find out their
                  needs in the space and experiences with existing link in bio
                  and promotional tools.
                </p>
                <img className="full-img" src={interviews} />
                <div className="interview-questions"></div>
              </div>
              <div className="section-content">
                <h3>Personas</h3>
                <p className="description">
                  I constructed two quick user personas based on my findings to
                  help guide my design process and consideration of features.
                </p>
                <img className="full-img" src={personas} />
              </div>
              <div className="section-content">
                <h3>Competitive Analysis</h3>
                <p className="description">
                  Following user research, I also conducted a competitive
                  analysis on two competing link in bio tools: Linktree and
                  Eth.co by constructing a feature comparison chart.
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
                  Analyzing our competing platforms allowed me to see what
                  worked well for them and feature gaps in the current Web3
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
            <section className="lofi">
              <h2>Lo-fi Prototyping</h2>
              <div className="section-content">
                <p className="description">
                  In addition to my findings from user and market research, I
                  wanted my design process to be guided by a strong sense of
                  what would make our feature uniquely GMCafé. I was creating
                  not just a link in bio tool but also a community profile. I
                  needed to effectively allocate space to display details about
                  each holder in the layout without impacting the utility of the
                  tool. Importantly, my designs needed to align with the themes
                  and playfulness of the GMCafé brand and artstyle.
                </p>
                <p className="description-top">
                  Following these guidelines, I created six sketches of possible
                  layouts for our feature.
                </p>
                <img className="full-img" src={wireframes} />
              </div>

              <div className="section-content"></div>
            </section>
            <section className="hifi">
              <h2>Hi-fi Prototyping</h2>
              <div className="section-content"></div>
            </section>
          </div>
          <div className="right">placeholder</div>
        </div>
      </div>
    </main>
  );
}

export default GMCafe;
