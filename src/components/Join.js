import { useState } from "react";
import { Link } from "react-router-dom";
import "./join.scss";

function Join() {
  const initVal = {
    userId: "",
    userPw1: "",
    userPw2: "",
    userName: "",
    userNumber: "",
  };
  const [Val, setVal] = useState(initVal);

  const check = (value) => {
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[~!@#$%^&*()_+]/;

    if (value.userId.length < 8 || !/@/.test(Val.userEmail)) {
      window.alert("이메일 주소를 확인해주세요.");
    }
    if (
      value.userPw1 < 6 ||
      !eng.test(value.userPw1) ||
      !num.test(value.userPw1) ||
      !spc.test(value.userPw1)
    ) {
      window.alert("6글자 이상, 영문, 숫자, 특수문자를 모두 포함해야 합니다.");
    }
    if (value.userPw1 !== value.userPw2 || value.userPw2 < 6) {
      window.alert("비밀번호가 같지 않습니다.");
    }
    if (value.userName === "") {
      window.alert("이름을 적어주세요.");
    }
    if (value.userNumber === "" || value.userNumber < 7) {
      window.alert("전화번호를 입력하세요.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...value, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    check(Val);
  };

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
          value={Val.userId}
          onChange={handleChange}
        />
        <input
          type="password"
          name="userPw1"
          id="userPw1"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <input
          type="password"
          name="userPw2"
          id="userPw2"
          placeholder="비밀번호 확인"
          onChange={handleChange}
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
          value={Val.userName}
          onChange={handleChange}
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
          value={Val.userNumber}
          onChange={handleChange}
        />

        <button type="submit" value="send">
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Join;
