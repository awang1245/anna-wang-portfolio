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
import screen1 from "../../public/kopi/screen_1.png";
import screen2 from "../../public/kopi/screen_2.png";
import screen3 from "../../public/kopi/screen_3.png";
import screen4 from "../../public/kopi/screen_4.png";

function KopiDevelopment({ isDark }: { isDark: boolean }) {
  return (
    <main className={isDark ? "page-dark" : "page-light"}>
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
              competitive analysis on three companies Etsy, Goldbelly, and Weee!
              by creating a feature comparison chart. All of them are online
              platforms where users are able to purchase food and beverages.
              Specifically, I am analyzing their means of favoriting/saving and
              aggregating items and using these insights to help me develop my
              own web app. I did not end up using any coffee brand websites, as
              their small and more specialized range of products render
              favoriting/saving features unnecessary and largely impractical.
            </p>
            <p>
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
                      custom filters based on user's favorites; can search
                      within list
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
                <a
                  href="https://www.etsy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "hyperlink-dark" : "hyperlink"}
                >
                  Etsy
                </a>{" "}
                is an e-commerce platform focused on selling homemade and
                vintage items, including food. Users can favorite items they
                like, which are then aggregated in a favorites list.
              </p>
              <ul className="details-list">
                <li>
                  One of Etsy's strengths is its custom filter categories for
                  its wide variety of products, providing a more catered user
                  experience. Sorting is not supported, so it falls short when
                  features such as viewing by price or ratings would have been
                  useful for prospective buyers.
                </li>
                <li>
                  What sets Etsy apart from the other two sites is that users
                  are allowed additional organization through creating custom
                  collections. However, this does come at a cost of users
                  needing multiple clicks to remove any item.
                </li>
                <li>
                  The "add to cart" and "buy now" buttons are effective visually
                  in catching users' attention and increasing conversion of
                  favorited items into purchases.
                </li>
              </ul>
            </div>
            <a
              href="https://www.etsy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="half-img"
            >
              <img src={etsy} alt="image of etsy's user favorites page" />
            </a>
          </div>
          <div className="split">
            <a
              href="https://www.goldbelly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="half-img"
            >
              <img
                src={goldbelly}
                alt="image of goldbelly's user favorites page"
              />
            </a>
            <div className="details">
              <h3>Goldbelly</h3>
              <p className="description">
                <a
                  href="https://www.goldbelly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "hyperlink-dark" : "hyperlink"}
                >
                  Goldbelly
                </a>{" "}
                is a gourmet online marketplace for food products from
                restaurants, bakeries, and other vendors. Users can favorite
                foods and bundles they are interested in.
              </p>
              <ul className="details-list">
                <li>
                  Users have multiple useful sorting options, including by
                  best-selling, popularity, and price. These options aid the
                  user's decision-making process in deciding which products to
                  actually buy. However, the list cannot be filtered if users
                  want to see specific product types.
                </li>
                <li>
                  Goldbelly makes both saving and removing favorite items easily
                  visible and quick with just one-click, incentivizing usage of
                  the favoriting feature.
                </li>
                <li>
                  There is no "quick add" button, forcing users to take
                  initiative and use more steps to click into the item to add it
                  to cart.
                </li>
              </ul>
            </div>
          </div>
          <div className="split">
            <div className="details">
              <h3>Weee!</h3>
              <p className="description">
                <a
                  href="https://www.sayweee.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "hyperlink-dark" : "hyperlink"}
                >
                  Weee!
                </a>{" "}
                is an e-grocer specializing in selling Asian grocery items with
                free delivery. Users can save items for later purchase in a
                saved list.
              </p>
              <ul className="details-list">
                <li>
                  Weee offers suggested filtering categories catered to the food
                  types the user saves. One weakness is that it offers no
                  sorting, for example, by price or rating, options that could
                  provide users with important info for making a purchase.
                </li>
                <li>
                  Saving and removing of items is always visible on the item
                  cards and can be easily performed in one click.
                </li>
                <li>
                  Users can easily add and remove saved items to their carts in
                  any quantity. This incentivizes usage of the saving feature
                  and can increase the conversion rate to purchases. However,
                  the add button could be more informative and make it clear
                  that the user is adding to card.
                </li>
              </ul>
            </div>
            <a
              href="https://www.sayweee.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="half-img"
            >
              <img src={weee} alt="image of weee's user saved items page" />
            </a>
          </div>
        </section>
        <section className="design-process">
          <h2>Design Process</h2>
          <div className="design-content">
            <p className="description">
              Based on my competitive analysis and seeing what was most
              successful for each of the three platforms, I decided that my
              website for Kopi Organic Roastery should include both filtering
              and sorting features to help users navigate the coffee listings
              and find what they need. Since the brand will only sell their own
              coffee, it seemed unnecessary to offer a favoriting/saving
              feature, so instead I wanted to focus on the experience of adding,
              editing, and removing items to the aggregator, the shopping cart.
              The button for adding to cart should be clearly visible on the
              item cards. The aggregator should always be shown on the page so
              users can easily keep track of what they have added, along with
              editing and removing items with just one click.
            </p>
          </div>
          <div className="design-content">
            <h3>Sketch</h3>
            <div className="single-img">
              <img
                src={sketch}
                className="sketch-img"
                alt="kopi roastery website design sketch"
              />
            </div>
            <p className="description">
              Starting off the design process, I incorporated my takeaways from
              my competitive analysis when ideating the look of the website. I
              wanted to go for a clean, minimalistic interface that clearly
              displayed information important to the user's shopping experience
              and placed the user's focus on the products. The filters, sorting
              options, and cart are always visible and accessible to the user.
              Each item card showcases the product's image, along with key
              product details and buttons for adding to the cart in one click
              and getting more info.
            </p>
          </div>
          <div className="design-content">
            <h3>Branding</h3>
            <div className="single-img">
              <img
                src={branding}
                className="branding-img"
                alt="image of coffee packaging design"
              />
            </div>
            <p className="description">
              Rather than using stock images or icons for the prototyping and
              development stages, I thought that this was a good opportunity to
              try my hand at branding. The Kopi brand is inspired by a free font
              I came across on Behance, called{" "}
              <a
                href="https://www.behance.net/gallery/130276809/Fleuron-Free-Floral-Display-Font?tracking_source=search_projects|free+fonts&l=75&"
                target="_blank"
                rel="noopener noreferrer"
                className={isDark ? "hyperlink-dark" : "hyperlink"}
              >
                Fleuron
              </a>
              . With the help of all three font styles and Avenir, I made a
              logo, and then got to work creating 12 products for a
              nature-themed coffee brand.
            </p>
            <p className="description">
              I first came up with floral and nature-related names for the
              coffees, pairing each with a Fleuron dingbat and a bright,
              springtime color. Despite being someone who guzzles copious
              amounts of caffeine, I am far from a coffee expert, so I did my
              best to come up with the roasts, origins, and tasting notes for
              each by referencing existing coffee brands and using the{" "}
              <a
                href="https://cdn.shopify.com/s/files/1/0249/4283/7837/files/CCC_Tasters_Flavor_Wheel_EN.pdf?v=1679587792&utm_source=Email&utm_medium=Flow&utm_campaign=Flavor%20Wheel&tw_source=klaviyo"
                target="_blank"
                rel="noopener noreferrer"
                className={isDark ? "hyperlink-dark" : "hyperlink"}
              >
                Taster's Flavor Wheel
              </a>{" "}
              by Counter Culture Coffee, although my apologies if any sound
              unrealistic. Using Adobe Illustrator, once I finished designing
              the labels, I added each to a blank packaging mockup to get all 12
              of Kopi Organic Roastery's signature coffees.
            </p>
          </div>
          <div className="design-content">
            <h3>Prototype</h3>
            <div className="single-img">
              <a
                href="https://www.figma.com/proto/39nYnmilLiL9J9YZWK7dHi/Anna-Wang-Development?type=design&node-id=1-2&t=DaNDPxzQFDD7IFab-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
                target="_blank"
                rel="noopener noreferrer"
                className="standard-img"
              >
                <img
                  src={prototype}
                  alt="kopi roastery website design prototype"
                />
              </a>
            </div>
            <p className="description">
              Now that I had a clear idea of the Kopi brand, I built out a
              prototype of the website in Figma (feel free to click the image
              above to check it out). Staying mostly faithful to the original
              sketch, I focused on fleshing out the details and refining the
              design in terms of color and layout, while also thinking more
              about the functionality of the site leading into development.
            </p>
            <ul className="details-list">
              <li>
                I decided to make the interface of the site solely black and
                white aside from the listed items and cart items to achieve the
                clean, minimalist look I had envisioned for the site. The B/W
                interface is also intended to draw the user's focus toward
                Kopi's products, which, by contrast, have very vibrant,
                springtime colors
              </li>
              <li>
                Now that the 12 products were finalized, I planned out how the
                details for each product would be displayed, along with how they
                looked in cart, trying to keep as simple and as informative as
                possible for the user.
              </li>
              <li>
                Thinking toward the actual functionality of the site, I decided
                on the top bar having a reset all button, along with filter by
                and sort by accordion menus. Each of the item cards would have
                two buttons for adding to the cart in one click and seeing
                further details. In the cart, each product has a number input
                for manipulating the quantity of the item, along with a button
                for removing the item entirely from cart in one click.
              </li>
            </ul>
          </div>
        </section>
        <section className="development">
          <h2>Development</h2>
          <div className="single-img">
            <a
              href="https://awang1245.github.io/kopi-development/"
              target="_blank"
              rel="noopener noreferrer"
              className="standard-img"
            >
              <img src={screen1} alt="image of kopi website starting screen" />
            </a>
          </div>
          <div className="development-content">
            <p className="description-top">
              I developed the final Kopi site using React, TypeScript, HTML,
              CSS, and a bit of React Bootstrap. I wanted the interface and
              functionality to be as pixel-perfect and smooth as possible. The
              key features of the site are the item cards for the coffee
              products, cart item cards, filtering options, sorting options, and
              an an aggregator, the user's cart. I elaborate on each of them
              below:
            </p>
          </div>

          <div className="development-content">
            <div className="split">
              <div className="details">
                <h3>Item Cards & Cart</h3>
                <ul className="details-list">
                  <li>
                    There are 12 unique item cards for each of Kopi's signature
                    coffee products. Each item card consists of the product
                    image, name, price, type, origin country (if single origin),
                    roast, and tasting notes.
                  </li>
                  <li>
                    Each item card has a "quick add" button that allows the user
                    to add to cart with one click, along with a "see details"
                    button.
                  </li>
                  <li>
                    The cart aggregates the products the user adds to cart,
                    displaying the name, corresponding color, quantity, and
                    total price for that product. Users can easily edit the
                    quantity of each product, and removes any item with one
                    click.
                  </li>
                  <li>
                    The cart maintains a count of the total number of items and
                    the subtotal price.
                  </li>
                </ul>
              </div>
              <div className="half-img">
                <img
                  src={screen4}
                  alt="image of kopi website's item display and cart"
                />
              </div>
            </div>
            <div className="split">
              <div className="half-img">
                <img
                  src={screen2}
                  alt="image of kopi website's filtering functionality"
                />
              </div>
              <div className="details">
                <h3>Filtering</h3>
                <ul className="details-list">
                  <li>
                    The filtering option is fixed to the top bar as an accordion
                    component.
                  </li>
                  <li>
                    Users can filter by 4 categories: type, roast, flavor, and
                    origin (disabled if only blend is selected).
                  </li>
                  <li>
                    The combination of filters selected shows up in the left
                    side of the top bar in a breadcrumbs-style fashion to inform
                    the user what filters they have selected even if they
                    collapse the menu.
                  </li>
                  <li>
                    Any selected filters can be cleared using the "reset all"
                    button.
                  </li>
                  <li>
                    If there are no products meeting the current filtering
                    requirements, a message is displayed informing the user.
                  </li>
                </ul>
              </div>
            </div>
            <div className="split-last">
              <div className="details">
                <h3>Sorting</h3>
                <ul className="details-list">
                  <li>
                    The sorting feature is similarly an accordion menu. The
                    current sorting is displayed in the accordion header, so
                    users can still see even when the menu is collapsed.
                  </li>
                  <li>
                    Users have 5 total options for sorting by: best-selling
                    (default mode), name (alphabetically a-z, z-a), and price
                    (high to low, low to high).
                  </li>
                  <li>
                    Any non-default sorting modes can be reset with the "reset
                    all" button.
                  </li>
                  <li>
                    The filtering and sorting functionality can be used in any
                    combination together.
                  </li>
                </ul>
              </div>
              <div className="half-img">
                <img
                  src={screen3}
                  alt="image of kopi website's sorting functionality"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="conclusion">
          <h2>Conclusion</h2>
          <p className="description">
            I had a lot of fun with this project in all aspects of the design
            and development process. It was valuable opportunity to learn and
            leverage competitive analysis. Although this assignment was focused
            on development, I found myself really enjoying taking my time on the
            design side of things by practicing branding for the first time by
            making my own coffee brand, and also by designing the site in a
            style I had been wanting to try for a while (which I will admit is
            guilty of flat design). This was also the first time I tried React
            Bootstrap, and probably also the last time, as I'm realizing that UI
            frameworks are not ideal for me as someone who likes full control
            over styling. I plan to revisit this project in the future to add
            custom checkboxes and make the site responsive for mobile and large
            monitors.
          </p>
          <p className="description">
            If you haven't had a chance to yet, please check out the final
            website{" "}
            <a
              href="https://awang1245.github.io/kopi-development/"
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
    </main>
  );
}

export default KopiDevelopment;
