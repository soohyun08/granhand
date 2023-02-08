import MultiPerfume from "../components/shopSubPage/MultiPerfume";
import Perfume from "../components/shopSubPage/Perfume";
import Perfume2 from "../components/shopSubPage/Perfume2";
import Signature from "../components/shopSubPage/Signature";

import "./shop.scss";

function Shop() {
  return (
    <div className="shop">
      <div className="sideBar">
        <ul>
          <li className="category">perfume</li>
          <li>signature</li>
          <li>perfume</li>
          <li>multi perfume</li>
        </ul>
        <ul>
          <li className="category">home fragrance</li>
          <li>diffuser</li>
          <li>candle</li>
          <li>sachet</li>
        </ul>
        <ul>
          <li className="category">body</li>
          <li>hand cream</li>
          <li>hand wash</li>
        </ul>
        <ul>
          <li className="category">natural</li>
          <li>dropper</li>
          <li>spray</li>
          <li>tea</li>
        </ul>
        <ul>
          <li className="category">tool</li>
          <li>all</li>
        </ul>

        <h3 className="category">Sometimes you win, Sometimes you learn.</h3>

        <ul>
          <li>all</li>
          <li>living</li>
          <li>stationery</li>
          <li>bag</li>
          <li>acc</li>
        </ul>
      </div>
      <div className="mainContent">
        <Perfume />
        <Signature />
        <Perfume2 />
        <MultiPerfume />
      </div>
    </div>
  );
}

export default Shop;
