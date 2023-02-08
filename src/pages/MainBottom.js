import { Link } from "react-router-dom";
import "./mainBottom.scss";

function MainBottom() {
  return (
    <div className="mainBottom">
      <div className="mainStores">
        <h2>Stores</h2>
        <p>
          오프라인 스토어는 그랑핸드가 보여주고 싳은 모든 것이 담겨있는
          공간입니다. 바쁜 일상 속 잠시 숨을 들리는 시간과 경험이 됩니다.
        </p>
        <Link to="">
          <span class="material-symbols-outlined">arrow_forward</span> 오프라인
          스토어 안내
        </Link>
      </div>

      <div className="mainNewsletter">
        <h2>Newsletter</h2>
        <input type="text" placeholder="이메일 주소를 입력해주세요." /> <hr />
        <button type="submit">
          <span className="material-symbols-outlined">arrow_forward</span>
          뉴스레터 구독하기
        </button>
      </div>

      <div className="mainSupport">
        <h2>Support</h2>
        <Link to="">자주 묻는 질문</Link>
        <Link to="">회사 소개</Link>
        <Link to="">채용 안내</Link>
        <Link to="">제휴 문의</Link>
      </div>
    </div>
  );
}

export default MainBottom;
