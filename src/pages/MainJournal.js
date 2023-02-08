import { Link } from "react-router-dom";
import "./mainJournal.scss";

const data = [
  {
    id: "j1",
    title: "제 3회 필름 사진 공모전 수상자 인터뷰",
    des: "그랑핸드 필름 사진 공모전 당선작과 수상자 인터뷰를 확인해 보세요.",
    category: "News",
    date: "Winter 2022",
    imgUrl: "journal1.jpg",
  },
  {
    id: "j2",
    title: "SUSIE SALMON에 대한 모든 것.",
    des: "그랑핸드에서 가장 사랑받는 향 중 하나. 수지살몬에 대한 모든 것을 담았습니다.",
    category: "Team",
    date: "Winter 2022",
    imgUrl: "journal2.png",
  },
];
const path = process.env.PUBLIC_URL;

function MainJournal() {
  return (
    <div className="mainJournal">
      <h2>Journal</h2>
      <div className="sectionContainer">
        {data.map((item) => (
          <section key={item.id}>
            <Link to="">
              <img
                src={`${path}/images/main/${item.imgUrl}`}
                alt={item.title}
              />
            </Link>
            <div className="inner">
              <h3>{item.title}</h3>
              <p>{item.des}</p>
            </div>
            <div className="sub">
              <p>{item.category}</p>
              <p>{item.date}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MainJournal;
