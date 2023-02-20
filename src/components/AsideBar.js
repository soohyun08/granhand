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
      </div>
    </>
  );
}

export default AsideBar;
