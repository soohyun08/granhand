import { Link } from "react-router-dom";

function ProductItem({ item }) {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <section key={item.id}>
        <Link to={`/productList/${item.id}`}>
          <img src={`${path}/images/shop/${item.imgURL}.jpg`} alt={item.name} />
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
    </>
  );
}

export default ProductItem;
