import MainJournal from "./MainJournal";
import MainNewArrival from "./MainNewArrival";
import MainShop from "./MainShop";
import MainBottom from "./MainBottom";

import "./main.scss";

function Main() {
  return (
    <main>
      <div className="mainHead">
        <p>
          '한 번도 열어본 적 없던 서랍 안에선 스카프와 장신구, 각종 잡동사니
          사이로 익숙한 분 냄새가 일었다. 코팅된 네잎클로버가 끼워진 오래된
          수첩을 펴자 한 쪽에는 손으로 쓴 지인들의 이름과 전화번호가 적여있었고,
          그 옆에 놓인 빛바랜 사진에는 양장에 하이힐을 신은 나와 꼭 닮은 젊은
          여자가 활짝 웃고 있었다.'
        </p>
        <p className="quotation">- NUBE, Perfume, GRANHAND.</p>
      </div>

      <MainNewArrival />
      <MainShop />
      <MainJournal />

      <MainBottom />
    </main>
  );
}

export default Main;
