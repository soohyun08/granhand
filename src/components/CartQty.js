import data from "../assets/DB/shopDataTest.json";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/storeCart";

function CartQty({ onClose, path, item, getCount, product, setProduct }) {
  const [count, setCount] = useState(1);
  const increment = (currentId) => {
    setProduct(
      product.map((item) =>
        item.id === currentId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrement = (currentId) => {
    setProduct(
      product.map((item) =>
        item.id === currentId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = item.price * count + "KRW";

  return (
    <>
      <div className="cartQty">
        <form>
          <h4>
            옵션 변경
            <span className="material-symbols-outlined" onClick={onClose}>
              close
            </span>
          </h4>

          <div className="cartQtyWrapper">
            <div className="itemDes">
              <img
                src={`${path}/images/shop/${item.imgURL}.jpg`}
                alt={item.name}
              />

              <h3>
                {item.name} <span>{item.price} KRW</span>
              </h3>
            </div>
            <div className="itemQty">
              <h5>수량</h5>
              <div className="qtyBtn">
                <button onClick={() => decrement(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increment(item.id)}>+</button>
              </div>
            </div>
            <div className="totalTxt">
              <p>총수량{count}개</p>
              <span>{total}</span>
            </div>
          </div>
          <div className="btn">
            <button
              type="reset"
              onClick={() => {
                // dispatch(reset());
                // onClose();
              }}
            >
              취소
            </button>
            <button type="submit" onClick={onClose}>
              변경
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CartQty;
