import { Link } from "react-router-dom";
import data from "../../assets/DB/shopData.json";

import "./shopMap.scss";

function Perfume2Map() {
  const path = process.env.PUBLIC_URL;
  const { PerfumeItems } = data;
  return (
    <>
      {PerfumeItems.map((item) => (
        <section key={item.id}>
          <Link to="">
            <img
              src={`${path}/images/shop/${item.imgURL}.jpg`}
              alt={item.name}
            />
            <ul className="itemName">
              <li>{item.name}</li>
              <li>{item.koName}</li>
            </ul>
            <ul className="itemDetail">
              <li>{item.price}</li>
              <li>{item.capacity}</li>
            </ul>
            <div className="stock">{item.stock}</div>
          </Link>
        </section>
      ))}
    </>
  );
}

export default Perfume2Map;