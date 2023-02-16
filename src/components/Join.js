import { useEffect, useState } from "react";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";

import "./join.scss";

function Join() {
  const navigate = useNavigate();

  const [UserId, setUserId] = useState("");
  const [UserPw1, setUserPw1] = useState("");
  const [UserPw2, setUserPw2] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserNumber, setUserNumber] = useState("");

  const [Submit, setSubmit] = useState(false);

  const handleSubmit = async () => {
    if (!(UserName && UserPw1 && UserPw2 && UserId && UserNumber)) {
      return alert("모두 작성해주세요");
    }
    if (UserPw1 !== UserPw2) {
      return alert("비밀번호를 동일하게 입력하세요");
    }

    let createUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(UserId, UserPw1);

    // 반환된 user 값에 닉네임 추가 등록
    await createUser.user.updateProfile({
      displayName: UserName,
    });

    console.log(createUser.user);

    alert("회원가입 되었습니다.");
    navigate("/");
  };

  useEffect(() => {
    if (Submit) {
      alert("회원가입이 완료되었습니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, [handleSubmit]);

  return (
    <div className="join">
      <form onSubmit={handleSubmit}>
        <h3>
          본인인증
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
          </svg>
        </h3>
        <input
          type="email"
          name="userId"
          id="userId"
          placeholder="이메일"
          value={UserId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          name="userPw1"
          id="userPw1"
          placeholder="비밀번호"
          value={UserPw1}
          onChange={(e) => setUserPw1(e.target.value)}
        />
        <input
          type="password"
          name="userPw2"
          id="userPw2"
          placeholder="비밀번호 확인"
          value={UserPw2}
          onChange={(e) => setUserPw2(e.target.value)}
        />

        <h3>
          이름
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
          </svg>
        </h3>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="이름을(를) 입력하세요"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <h3>
          연락처
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
          </svg>
        </h3>
        <input
          type="number"
          name="userNumber"
          id="userNumber"
          placeholder="연락처"
          value={UserNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Join;
