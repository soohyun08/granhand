import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getItemId, addWishList, addCartList } from "../../assets";
import "./productPage.scss";

import info from "../../assets/DB/productPageData.json";

function ProductPage() {
  const { SignatureStory, ProductInfo, ProductDetails } = info;

  const path = process.env.PUBLIC_URL;

  const { itemId } = useParams();

  const item = getItemId(itemId);
  console.log(item);

  const navigate = useNavigate();

  if (!item) {
    return <Navigate to="/shop" />;
  }

  const handleAddWishList = () => {
    // console.log(item.id);
    alert("위시리스트에 저장 되었습니다");
    addWishList(item.id);
    // navigate("/wishList"); 클릭하면 넘어감
  };

  const handleAddCartList = () => {
    alert("장바구니에 담겼습니다");
    addCartList(item.id);
  };

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
          <p className="price">{item.price},000 KRW</p>
          <p>{item.koName}</p>
          <p>{item.capacity}</p>
        </div>

        <div className="shopping">
          <label htmlFor="stamping">스탬핑 (비희망시 '없음' 기입)* </label>
          <input
            type="text"
            name="stamping"
            id="stamping"
            placeholder="10자 이하 영문대문자, 숫자, 특수기호(. , ! % & ? &hearts;)만 가능합니다."
          />

          <label htmlFor="shoppingBag">쇼핑백</label>
          <select name="shoppingBag" id="shoppingBag" required>
            <option value="" selected disabled>
              옵션을 선택하세요
            </option>
            <option value="addBag">
              쇼핑백 추가 구매 S(18x27x9cm) <strong>1,000 KRW</strong>
            </option>
          </select>

          <div className="shoppingBtn">
            <button>구매하기</button>
            <button onClick={handleAddCartList}>장바구니 담기</button>
          </div>

          <div className="NshoppingBtn">
            <button>Pay 구매하기</button>
            <button onClick={handleAddWishList}>찜</button>
          </div>
        </div>
      </section>

      {/*       <section className="signatureStory">
        <h3>Signature Story</h3>
        {SignatureStory.map((item) => (
          <div key={item.id}>
            <p>{item.des}</p>
            <div className="infoImg">
              <img
                src={`${path}/images/${item.imgURL1}.jpg`}
                alt={item.title}
              />
              <img
                src={`${path}/images/${item.imgURL2}.jpg`}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </section> */}

      {/*       <section>
        <h3>Infomation</h3>
        {ProductInfo.map((item) => (
          <div key={item.id}>
            <div>
              <h4>제품명</h4>
              <p>{item.infoTitle}</p>
            </div>
            <div>
              <h4>제품설명</h4>
              <p>{item.infoDes}</p>
            </div>
            <div>
              <h4>향조노트</h4>
              <p>{item.ScentNote}</p>
            </div>
            <div>
              <h4>사용방법</h4>
              <p>{item.HowToUse}</p>
            </div>
          </div>
        ))}
      </section> */}

      {/*       {ProductDetails.map((item) => (
        <section key={item.id}>
          <div>
            <h4>용량</h4>
            <p>{item.capacity}</p>
          </div>
          <div>
            <h4>사용기간</h4>
            <p>{item.limit}</p>
          </div>
          <div>
            <h4>유통기한</h4>
            <p>{item.dateToSale}</p>
          </div>
          <div>
            <h4>사이즈(mm)</h4>
            <p>{item.size}</p>
          </div>
          <div>
            <h4>전성분</h4>
            <p>{item.ingredients}</p>
          </div>
        </section>
      ))} */}

      <section>
        <div>
          <h4>주의사항</h4>
          <p></p>
        </div>
      </section>

      <section>
        <div>
          <h4>스탬핑 서빅스</h4>
          <p></p>
        </div>
      </section>
    </article>
  );
}

export default ProductPage;
