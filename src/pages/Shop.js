import PerfumeMap from "../components/shopSubPage/PerfumeMap";
import AsideBar from "../components/AsideBar";
import "./shop.scss";

function Shop() {
  return (
    <div className="shop">
      {/* <AsideBar /> */}

      <div className="mainContent">
        <div className="headLine">
          <h2>
            Shop All<span> 193</span>
          </h2>
        </div>

        <article>{/* <PerfumeMap /> */}</article>
      </div>
    </div>
  );
}

export default Shop;
