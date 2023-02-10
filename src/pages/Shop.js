import PerfumeMap from "../components/shopSubPage/PerfumeMap";
import AsideBar from "../components/AsideBar";
import LineUp from "../components/shopSubPage/LineUp";
import "./shop.scss";

function Shop() {
  return (
    <div className="shop">
      <AsideBar />

      <div className="mainContent">
        <div className="headLine">
          <h2>
            Shop All<span> 193</span>
          </h2>
          <LineUp />
        </div>

        <article>
          <PerfumeMap />
        </article>
      </div>
    </div>
  );
}

export default Shop;
