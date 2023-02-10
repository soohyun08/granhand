import HeadTitle from "./HeadTitle";
import ProductItem from "./ProductItem";

import { setShopItems } from "../../assets";
import AsideBar from "../AsideBar";

import "./productList.scss";

function ProductList() {
  const shopItems = setShopItems();

  return (
    <div className="shop">
      <AsideBar />

      <article className="mainContent">
        {shopItems.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </article>
    </div>
  );
}

export default ProductList;
