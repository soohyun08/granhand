import { Navigate, useParams } from "react-router-dom";
import { getItemCategory } from "../assets";
import { Link } from "react-router-dom";

import "./asideBar.scss";

function AsideBar() {
  const path = process.env.PUBLIC_URL;

  const { itemCategory } = useParams();

  const category = getItemCategory(itemCategory);
  console.log(category);

  if (!category) {
    return <Navigate to="/shop" />;
  }

  return (
    <>
      <div className="sideBar">
        <ul>
          <li className="category">
            <div>perfume</div>
          </li>
          <li>
            <div>signature</div>
          </li>
          <li>
            <div>perfume</div>
          </li>
          <li>
            <div>multi perfume</div>
          </li>
        </ul>
        {/*         <ul>
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
        </ul> */}
      </div>
    </>
  );
}

export default AsideBar;
