import "./lineUp.scss";

import { useState } from "react";

function LineUp() {
  // const [price, setPrice] = useState([]);

  // console.log(price);

  return (
    <div>
      <ul className="lineUp">
        <li className="lowPrice">낮은 가격 순</li>
        <li className="highPrice">높은 가격 순</li>
        <li className="mostSaled">판매 순</li>
      </ul>
    </div>
  );
}

export default LineUp;
