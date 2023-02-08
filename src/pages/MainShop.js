import { Link } from "react-router-dom";

import "./mainShop.scss";

const data = [
  {
    id: "s1",
    imgURL: "shop1.jpg",
    name: "susie salmon",
    category: "hand cream",
    des: "'달콤한 과일을 먹은 뒤의 낮잠.'",
    url: "",
  },
  {
    id: "s2",
    imgURL: "shop2.jpg",
    name: "rosewood",
    category: "natural dropper",
    des: "장미와 비슷한 향취의 옅은 나무가 느껴지는 부드럽고 우아한 플로럴 향의 내추럴 오일.",
    url: "",
  },
];
const path = process.env.PUBLIC_URL;

function MainShop() {
  return (
    <div className="mainShop">
      <div className="mainShopContainer">
        <h2>Shop</h2>
        <div className="sectionWrapper">
          {data.map((item) => (
            <section key={item.id}>
              <h4>{item.name}</h4>
              <h5>{item.category}</h5>
              <Link to={item.url}>
                <img
                  src={`${path}/images/main/${item.imgURL}`}
                  alt={item.name}
                />
              </Link>
              <p>{item.des}</p>
            </section>
          ))}
        </div>
      </div>

      <div className="items">
        <h3>
          sometimes you win, <br /> sometimes you learn.
        </h3>
        <section>
          <h4>scents amber glass</h4>
          <h5>living</h5>
          <Link to="">
            <img src={`${path}/images/main/glass.jpg`} alt="glass" />
          </Link>
          <p>그랑핸드의 향 이름들이 적힌 엠버 글라스.</p>
        </section>
      </div>
    </div>
  );
}

export default MainShop;
