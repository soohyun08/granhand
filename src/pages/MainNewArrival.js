import { Link } from "react-router-dom";
import "./mainNewArrival.scss";

function MainNewArrival() {
  return (
    <div className="newArrival">
      <h2>New Arrival: Perfume Line</h2>
      <h3>GRANHAND. Perfume Line</h3>

      <Link to="">
        <div className="mainPic">
          <img
            src={`${process.env.PUBLIC_URL}/images/main/main.jpg`}
            alt="그랑핸드 메인 이미지"
          />
        </div>
      </Link>

      <div className="NewArrivalTxt">
        <p>
          2년 만에 그랑핸드에서 <br />
          새로운 향과 제품을 선보입니다.
        </p>
        <p>
          멀티퍼퓸과 시그니처 라인 사이에 위치한 제품으로 '향수' 그 자체에
          집중합니다.
          <br /> NOLL 놀, MUNAKI 무나키, NUBE 누베로 구성된 세가지 퍼퓸 라인의
          향을 만나보세요.
        </p>
      </div>
    </div>
  );
}

export default MainNewArrival;
