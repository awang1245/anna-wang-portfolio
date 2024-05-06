import "../styles/GMCafe.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "./atoms";
import gmcafe from "../../public/gmcafe/gmcafe.png";

function GMCafe() {
  const [isDark] = useRecoilState<boolean>(isDarkState);
  return (
    <main className={isDark ? "page-dark" : "page-light"}>
      <div className="gmcafe-content">
        <section className="overview">
          <div className="grouping">
            <h1>Good Morning Café NFT</h1>
            <div className="subheading">Product Design | May-June 2023</div>
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
            className={isDark ? "standard-img-dark" : "standard-img"}
          >
            <img src={gmcafe} alt="image of gmcafe screens" />
          </a>
        </section>
      </div>
    </main>
  );
}

export default GMCafe;
