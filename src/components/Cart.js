import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCartList, delCartList } from "../assets";
import "./cart.scss";

function Cart() {
  const path = process.env.PUBLIC_URL;

  const [product, setProduct] = useState([]);

  const handleDelete = (delItem) => {
    delCartList(delItem);
    const nextProduct = getCartList();
    setProduct(nextProduct);
  };

  useEffect(() => {
    const nextProduct = getCartList();
    setProduct(nextProduct);
  }, []);

  return (
    <div className="cartList">
      <h2>Cart</h2>

      <div className="cartListInfo">
        <div className="cartListInfoTxt">
          <input type="checkbox" name="selectAll" id="selectAll" />
          <p>상품 정보</p>
        </div>
        <p>수량</p>
        <p>주문금액</p>
        {/* <p>배송정보</p> */}
      </div>

      {product.length === 0 ? (
        <h3 className="none">장바구니가 비었습니다.</h3>
      ) : (
        <ul className="cartListMap">
          {product.map((item, idx) => (
            <li key={item.id}>
              <NavLink to={`/productList/${item.id}`} className="cartListTxt">
                <input type="checkbox" name="select" id="select" />

                <img
                  src={`${path}/images/shop/${item.imgURL}.jpg`}
                  alt={item.name}
                />

                <h3>{item.name}</h3>
                <button onClick={() => handleDelete(item.id)} className="dele">
                  <span class="material-symbols-outlined">close</span>
                </button>
              </NavLink>

              <div className="quantity">
                <h4></h4>
                <button>옵션/수량 변경</button>
              </div>

              <p className="priceTag">{item.price},000KRW</p>
            </li>
          ))}
        </ul>
      )}
      <button>선택상품 삭제</button>

      <h5 className="totalQuantity">총 주문 상품 {product.length}개</h5>
      <h6 className="total">상품금액 + 배송비 = 총 주문금액</h6>
    </div>
  );
}

export default Cart;
