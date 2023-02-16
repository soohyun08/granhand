import HeadTitle from "./HeadTitle";
import ProductItem from "./ProductItem";

import { setShopItems } from "../../assets";
import AsideBar from "../AsideBar";

import "./productList.scss";

function ProductList({ items, handleAdd }) {
  const shopItems = setShopItems();

  return (
    <div className="shop">
      <AsideBar />

      <article className="mainContent">
        {shopItems.map((item) => (
          <ProductItem
            key={item.id}
            item={item}
            handleClick={() => {
              handleAdd(item.id);
            }}
          />
        ))}
        {/*         {items.map((item, idx) => (
          <ProductItem
            key={idx}
            item={item}
            handleClick={() => {
              handleAdd(item.id);
            }}
          />
        ))} */}
      </article>
    </div>
  );
}

export default ProductList;
