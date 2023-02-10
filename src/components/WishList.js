import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getWishlist, delWishlist } from "../assets";
import "./wishList.scss";

function WishList() {
  const path = process.env.PUBLIC_URL;

  const [product, setProduct] = useState([]);

  const handleDelete = (delItem) => {
    delWishlist(delItem);
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  };

  useEffect(() => {
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  }, []);

  return (
    <div className="wishList">
      <h2>WishList</h2>
      <div className="wishListInfo">
        <p>상품 정보</p>
        <p>가격</p>
      </div>

      {product.length === 0 ? (
        <h3 className="none">위시리스트가 비었습니다.</h3>
      ) : (
        <ul className="wishListMap">
          {product.map((item, idx) => (
            <li key={item.id}>
              <NavLink to={`/productList/${item.id}`} className="wishListTxt">
                <p>{idx + 1}.</p>
                <p>
                  <img
                    src={`${path}/images/shop/${item.imgURL}.jpg`}
                    alt={item.name}
                  />
                </p>
                <h3>{item.name}</h3>
                <button onClick={() => handleDelete(item.id)}>
                  <span class="material-symbols-outlined">close</span>
                </button>
              </NavLink>

              <p className="priceTag">{item.price},000KRW</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WishList;
