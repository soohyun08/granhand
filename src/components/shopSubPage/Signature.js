import LineUp from "./LineUp";
import SignatureMap from "./SignatureMap";
import "../../pages/shop.scss";
import AsideBar from "../AsideBar";

function Signature() {
  return (
    <div className="shop">
      <AsideBar />

      <div className="mainContent">
        <div className="headLine">
          <h2>
            Signature <span>5</span>
          </h2>
          <LineUp />
        </div>
        <article>
          <SignatureMap />
        </article>
      </div>
    </div>
  );
}

export default Signature;
