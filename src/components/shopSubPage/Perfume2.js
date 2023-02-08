import { Link } from "react-router-dom";
import LineUp from "./LineUp";
import data from "../../assets/DB/shopData.json";

function Perfume2() {
  const path = process.env.PUBLIC_URL;
  const { PerfumeItems } = data;
  return (
    <>
      <h2>
        Perfume <span>3</span>
      </h2>
      <LineUp />

      <article>
        {PerfumeItems.map((item) => (
          <section>
            <Link to="" key={item.id}>
              <img
                src={`${path}/images/shop/${item.imgURL}.jpg`}
                alt={item.name}
              />
              <h3>
                {item.name} <span>{item.koName}</span>
              </h3>
              <p>
                {item.price} <span>{item.capacity}</span>
              </p>
              <div className="stock">{item.stock}</div>
            </Link>
          </section>
        ))}
      </article>
    </>
  );
}

export default Perfume2;
