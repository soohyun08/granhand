import LineUp from "./LineUp";
import MultiPerfumeMap from "./MultiPerfumeMap";
import "../../pages/shop.scss";
import AsideBar from "../AsideBar";

function MultiPerfume() {
  return (
    <div className="shop">
      <AsideBar />

      <div className="mainContent">
        <div className="headLine">
          <h2>
            MultiPerfume <span>12</span>
          </h2>
          <LineUp />
        </div>

        <article>
          <MultiPerfumeMap />
        </article>
      </div>
    </div>
  );
}

export default MultiPerfume;
