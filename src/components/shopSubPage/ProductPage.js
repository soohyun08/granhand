import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemId, addWishList, addCartList } from "../../assets";
import "./productPage.scss";

import info from "../../assets/DB/productPageData.json";

function ProductPage() {
  const [txt, setTxt] = useState("");
  const [selectedItem, setSelectedItem] = useState([{ item: "" }]);
  const [newSelectedItem, setNewSelectedItem] = useState({ item: "" });

  const path = process.env.PUBLIC_URL;

  const { itemId } = useParams();

  const item = getItemId(itemId);

  const navigate = useNavigate();

  if (!item) {
    return <Navigate to="/shop" />;
  }

  const handleAddWishList = () => {
    // console.log(item.id);
    alert("위시리스트에 저장 되었습니다");
    addWishList(item.id);
    navigate("/wishList");
  };

  const handleAddCartList = () => {
    item.quantity = 1;
    alert("장바구니에 담겼습니다");
    addCartList(item.id);
    navigate("/cart");
  };

  const changeInput = (e) => {
    setTxt(e.target.value);
  };

  useEffect(() => setNewSelectedItem({ item: txt }), [txt]);
  console.log(selectedItem);

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSelectedItem([...selectedItem, newSelectedItem]);
    setTxt("");
  };

  const selectedItemMap = selectedItem.map((selectedItem, i) => (
    <p key={i}>{selectedItem.item}</p>
  ));

  const selectChange = () => {};

  const priceComma = item.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <article className="productPage">
      <section className="topDes">
        <img
          src={`${path}/images/shop/${item.imgURL}.jpg`}
          alt={item.name}
          className="titleIMG"
        />

        <div className="topDesTxt">
          <h2>{item.name}</h2>
          <p className="price">{priceComma}KRW</p>
          <p>{item.koName}</p>
          <p>{item.capacity}</p>
        </div>

        <form onSubmit={onSubmit} className="shopping">
          <label htmlFor="stamping">스탬핑 (비희망시 '없음' 기입)* </label>
          <input
            type="text"
            name="stamping"
            id="stamping"
            placeholder="10자 이하 영문대문자, 숫자, 특수기호(. , ! % & ? &hearts;)만 가능합니다."
            required
            value={txt}
            onChange={changeInput}
            onKeyPress={handleOnKeyPress}
          />

          <label htmlFor="shoppingBag">쇼핑백</label>
          <select name="shoppingBag" id="shoppingBag" onChange={selectChange}>
            <option value="" selected disabled>
              옵션을 선택하세요
            </option>
            <option value="addBag">
              쇼핑백 추가 구매 S(18x27x9cm) <strong>1,000 KRW</strong>
            </option>
          </select>

          <div className="selectedItem">{selectedItemMap}</div>

          <div className="shoppingBtn">
            <button>구매하기</button>
            <button type="submit" onClick={handleAddCartList}>
              장바구니 담기
            </button>
          </div>

          <div className="NshoppingBtn">
            <button>Pay 구매하기</button>
            <button onClick={handleAddWishList}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
}

export default ProductPage;
