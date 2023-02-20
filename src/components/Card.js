import { Link } from "react-router-dom";

function Card({ id, imgURL, name, koName, category, price }) {
  const path = process.env.PUBLIC_URL;
  return (
    <Link to={`/productList/${id}`} className="searched">
      <img src={`${path}/images/shop/${imgURL}.jpg`} alt={name} />

      <div className="searchedTxt">
        <h5>{category}</h5>
        <h4>{name}</h4>
        <h4>{koName}</h4>
        <p>{price}</p>
      </div>
    </Link>
  );
}

export default Card;
