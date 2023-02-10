import LineUp from "./LineUp";
import "../../pages/shop.scss";
import AsideBar from "../AsideBar";
import PerfumeMap from "./PerfumeMap";

function Perfume() {
  return (
    <div className="shop">
      <AsideBar />

      <div className="mainContent">
        <div className="headLine">
          <h2>
            Perfume <span>20</span>
          </h2>
          <LineUp />
        </div>

        <PerfumeMap />
      </div>
    </div>
  );
}

export default Perfume;
