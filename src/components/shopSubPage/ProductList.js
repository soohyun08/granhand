import ProductItem from "./ProductItem";

import { setShopItems } from "../../assets";
import AsideBar from "../AsideBar";

import "./productList.scss";
import { useState } from "react";

function ProductList({ handleAdd }) {
  const shopItems = setShopItems();
  const [product, setProduct] = useState(shopItems);

  const sortAscending = () => {
    const sorted = [...product].sort((a, b) => b.price - a.price);
    console.log(sorted);
    setProduct(sorted);
  };
  const sortDescending = () => {
    const sorted = [...product].sort((a, b) => a.price - b.price);
    setProduct(sorted);
  };

  return (
    <div className="shop">
      <AsideBar />

      <article className="mainContent">
        <div className="lineUpBtn">
          <button onClick={sortAscending}>가격이 높은 순</button>
          <button onClick={sortDescending}>가격이 낮은 순</button>
        </div>

        {product.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            handleClick={() => {
              handleAdd(item.id);
            }}
          />
        ))}
      </article>
    </div>
  );
}

export default ProductList;
