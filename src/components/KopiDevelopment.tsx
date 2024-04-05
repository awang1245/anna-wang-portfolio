import "../styles/KopiDevelopment.css";
import kopi from "../../public/kopi/kopi.png";
import etsy from "../../public/kopi/etsy.png";
import goldbelly from "../../public/kopi/goldbelly.png";
import weee from "../../public/kopi/weee.png";
import x from "../../public/kopi/x.svg";
import check from "../../public/kopi/check.svg";
import branding from "../../public/kopi/branding.png";
import sketch from "../../public/kopi/sketch.png";
import prototype from "../../public/kopi/prototype.png";

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
              In this project, I designed and developed a website for my
              imagined coffee brand, Kopi Organic Roastery. The goal was to
              create an interactive list-based interface where users are able to
              select and aggregate items. Users can browse, filter, and sort
              through Kopi's signature coffee offerings and add them to their
              carts.
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
        <section className="analysis">
          <h2>Competitive Analysis</h2>
          <div className="analysis-content">
            <p className="description">
              My research process for this project involved conducting a
              competitive analysis on three companies Etsy, Goldbelly, and Weee
              by creating a competitive comparison chart. All of them are online
              platforms where users are able to purchase food and beverages.
              Specifically, I am analyzing their means of favoriting/saving and
              aggregating items and using these insights to help me develop my
              own web app.
            </p>
            <p className="description">
              I compare Etsy and Goldbelly's favoriting functionality and Weee's
              saving item functionality across a number of relevant factors, and
              go into further detail about each platform afterward.
            </p>
          </div>
          <div className="table-content">
            <table>
              <tr>
                <th>
                  <div className="row-content">factors</div>
                </th>
                <th>
                  <div className="row-content">Etsy</div>
                </th>
                <th>
                  <div className="row-content">Goldbelly</div>
                </th>
                <th>
                  <div className="row-content">Weee!</div>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="row-content">filtering options</div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      custom filters based on user's favorited items; can search
                      within favorites
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">no filtering offered</div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      custom filters based on types of user's saved foods
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>sorting options</td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">
                      only default order of newest added
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      offers sorting by recommended, best sellers, popularity,
                      and price
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">
                      only default order of newest added
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>quick add/removal</td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">
                      removal takes longer since user needs to specify the
                      collection
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      simple, quick one-click adding and removing
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      simple, quick one-click adding and removing
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>visible like/save button</td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">shows up only on hover</div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      always visible on item listing
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      always visible on item listing
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>easy navigation to list</td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      favorites list always accessible on navigation bar
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      favorites list found after clicking on user profile
                      options
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      saved list found after clicking on user profile options
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
                      allows users to make additional collections of items
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">no further organization</div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">no further organization</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>add to cart option</td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      add to cart and buy now buttons
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={x} />
                    <div className="explanation">
                      cannot add directly from favorites list
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row-content">
                    <img src={check} className="check-icon" />
                    <div className="explanation">
                      plus button that adds saved item to cart
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="split">
            <div className="details">
              <h3>Etsy</h3>
              <p className="description">
                Etsy is an e-commerce platform focused on selling homemade and
                vintage items, including food. Users can favorite items they
                like, which are then aggregated in a favorites list.
              </p>
              <ul className="details-list">
                <li>
                  One of Etsy's strengths is its custom filter categories for
                  its wide variety of products. Sorting lists is not supported,
                  when sorting by price or ratings would be useful for a
                  marketplace.
                </li>
                <li>
                  Users are allowed additional organization through creating
                  custom collections, which neither of the other two sites
                  provide. However, users need to take multiple steps to
                  unfavorite items.
                </li>
                <li>
                  The "add to cart" and "buy now" buttons are effective for
                  converting favorited items into purchases.
                </li>
              </ul>
            </div>
            <a
              href="https://www.etsy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="original-img"
            >
              <img src={etsy} alt="image of Etsy's user favorites page" />
            </a>
          </div>
          <div className="split">
            <a
              href="https://www.goldbelly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="original-img"
            >
              <img
                src={goldbelly}
                alt="image of Goldbelly's user favorites page"
              />
            </a>
            <div className="details">
              <h3>Goldbelly</h3>
              <p className="description">
                Goldbelly is a gourmet online marketplace for food products from
                restaurants, bakeries, and other vendors. Users can favorite
                foods and bundles they are interested in.
              </p>
              <ul className="details-list">
                <li>
                  Users have multiple useful sorting options, notably by
                  "best-selling" and "price". However, the list cannot be
                  filtered if users want to only see certain product types.
                </li>
                <li>
                  Goldbelly makes both saving and removing favorite items easily
                  visible and quick with just one-click, incentivizing usage of
                  the favoriting feature.
                </li>
                <li>
                  There is no "quick add" button, forcing users to click into
                  the item to add it to cart.
                </li>
              </ul>
            </div>
          </div>
          <div className="split">
            <div className="details">
              <h3>Weee!</h3>
              <p className="description">
                Weee! is an e-grocer specializing in selling Asian grocery items
                with free delivery. Users can save items for later purchase in a
                saved list.
              </p>
              <ul className="details-list">
                <li>
                  Weee offers suggested filtering categories catered to the food
                  types a user has saved. There is no sorting, for example, by
                  price or rating, options that could be important for an online
                  marketplace.
                </li>
                <li>
                  Saving and removing of items can be performed in one click.
                </li>
                <li>
                  Users can easily add and remove saved items to their carts
                  from the list, in any quantity. This incentivizes usage of the
                  saving feature and can increase the conversion rate to
                  purchases.
                </li>
              </ul>
            </div>
            <a
              href="https://www.sayweee.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="original-img"
            >
              <img src={weee} alt="image of Weee's user saved items page" />
            </a>
          </div>
        </section>
        <section>
          <h2>Design Process</h2>
          <div className="design-content">
            <h3>Branding</h3>
            <div className="standard-img">
              <img src={branding} alt="image of coffee packaging design" />
            </div>
            <p className="description">
              Starting off the design process, I made nine speed sketches to
              brainstorm ways to best showcase Beestar's different program and
              subject offerings. I mostly experimented with more traditional
              elements such as vertical layouts, grids, carousels, and sidebars.
            </p>
          </div>
          <div className="design-content">
            <h3>Sketch</h3>
            <a
              href="https://awang1245.github.io/kopi-development/"
              target="_blank"
              rel="noopener noreferrer"
              className="standard-img"
            >
              <img src={sketch} alt="kopi roastery website design sketch" />
            </a>
            <p className="intro-list">
              Going off of my final sketch, I created lo-fi wireframes for three
              screen sizes: desktop, tablet, and mobile. My main objective here
              was to figure out how I wanted the page structure and information
              architecture to looks across different dimensions. To highlight
              some of my key design choices:
            </p>
          </div>
          <div className="design-content">
            <h3>Prototype</h3>
            <div className="standard-img">
              <img
                src={prototype}
                alt="kopi roastery website design prototype"
              />
            </div>
            <p className="description">
              Starting off the design process, I made nine speed sketches to
              brainstorm ways to best showcase Beestar's different program and
              subject offerings. I mostly experimented with more traditional
              elements such as vertical layouts, grids, carousels, and sidebars.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default KopiDevelopment;
