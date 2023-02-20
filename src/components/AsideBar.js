import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./asideBar.scss";

function AsideBar() {
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
