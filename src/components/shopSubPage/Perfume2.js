import LineUp from "./LineUp";
import Perfume2Map from "./Perfume2Map";
import "../../pages/shop.scss";
import AsideBar from "../AsideBar";

function Perfume2() {
  return (
    <div className="shop">
      <AsideBar />

      <div className="mainContent">
        <div className="headLine">
          <h2>
            Perfume <span>3</span>
          </h2>
          <LineUp />
        </div>

        <article>
          <Perfume2Map />
        </article>
      </div>
    </div>
  );
}

export default Perfume2;
