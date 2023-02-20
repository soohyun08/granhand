import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCartList, delCartList, delSelectedCartLists } from "../assets";
import "./cart.scss";
/* import { initialState } from "../assets/DB/data";
import CartQty from "./CartQty"; */
// import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const path = process.env.PUBLIC_URL;

  // const count = useSelector((state) => state.cart.num);

  const [product, setProduct] = useState([]);
  // const [isShow, setIsShow] = useState(false);
  /*  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(); */

  const [total, setTotal] = useState(0);
  let deliveryFee = total < 40000 ? 4000 : 0;
  // const [sum, setSum] = useState(0);
  let sum = total + deliveryFee;

  // ***********************
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
        item.id === currentId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ***********************

  // const getCount = (x) => {
  //   setQuantity(x);
  // };

  const changeInput = (e) => {
    const { checked, name, id } = e.target;

    if (name === "all") {
      setProduct(
        product.map((item) => {
          return {
            ...item,
            isChk: checked,
          };
        })
      );
    } else {
      setProduct(
        product.map((item) =>
          item.name === name ? { ...item, isChk: checked } : item
        )
      );
      if (product.isChk === true) {
        return (total = product.map((item) => item.quantity * product.price));
      }
    }

    /* let targetPrice = product
      .filter((item) => item.id === e.target.id)
      .map((item) => item.price); */
    let targetPrice = product.find((item) => item.id === e.target?.id)?.price;
    let targetQuantity = product.find(
      (item) => item.id === e.target?.id
    )?.quantity;
    let targetTotalPrice = targetPrice * targetQuantity;

    if (e.target.checked) {
      setTotal(total + targetTotalPrice);
    } else {
      setTotal(total - targetTotalPrice);
    }

    console.log(targetTotalPrice);
  };

  useEffect(() => {}, []);
  /* 
  const onOpen = () => {
    setIsShow(true);
  };
  const onClose = () => {
    setIsShow(false);
  }; */

  const handleDelete = (delItem) => {
    delCartList(delItem);
    const nextProduct = getCartList();
    setProduct(nextProduct);
  };

  // const selectDele = () => {
  //   const chkItem = product.filter((item) => item.isChk === true);
  //   delCartList(chkItem.map((item) => item.id));
  //   const nextProduct = getCartList();
  //   setProduct(nextProduct);
  // };
  // *******************************************
  const selectDele = () => {
    const selectDelItem = product
      .filter((item) => item.isChk === true)
      .map((item) => item.id);
    delSelectedCartLists(selectDelItem);
    console.log(selectDelItem);
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
          <input
            type="checkbox"
            name="all"
            id="all"
            onChange={changeInput}
            checked={product.filter((item) => item.isChk !== true).length < 1}
          />
          <p>상품 정보</p>
        </div>
        <p>수량</p>
        <p>주문금액</p>
      </div>

      {product.length === 0 ? (
        <h3 className="none">장바구니가 비었습니다.</h3>
      ) : (
        <ul className="cartListMap">
          {product.map((item) => (
            <li key={item.id}>
              <div className="cartListTxt">
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={item.isChk}
                  onChange={changeInput}
                />

                <Link to={`/productList/${item.id}`}>
                  <img
                    src={`${path}/images/shop/${item.imgURL}.jpg`}
                    alt={item.name}
                  />

                  <h3>{item.name}</h3>
                </Link>
                <button onClick={() => handleDelete(item.id)} className="dele">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="quantity">
                {/* <h4>{quantity}</h4>
                <button onClick={onOpen}>옵션/수량 변경</button>
                               {isShow && (
                  <CartQty
                    onClose={onClose}
                    path={path}
                    item={item}
                    getCount={getCount}
                  />
                )} */}

                <div className="qtyBtn">
                  <button onClick={() => decrement(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>
              </div>
              {/* ****************************************** */}
              <p className="priceTag">
                {(item.quantity * item.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                KRW
              </p>
            </li>
          ))}
        </ul>
      )}
      <button className="selectDele" onClick={() => selectDele()}>
        선택상품 삭제
      </button>

      <h5 className="totalQuantity">총 주문 상품 {product.length}개</h5>
      <h6 className="total">
        {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} +{" "}
        {deliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ={" "}
        {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </h6>

      <div className="cartBtn">
        <Link to="/login" className="buy">
          주문하기
        </Link>
        <Link to="/" className="returnShopping">
          계속 쇼핑하기
        </Link>
      </div>
    </div>
  );
}

export default Cart;
