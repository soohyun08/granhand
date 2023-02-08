import { Link, NavLink } from "react-router-dom";
import "./login.scss";
import kakaoImg from "../assets/images/kakao_open.png";

function Login() {
  return (
    <div className="login">
      <input type="email" name="userId" id="userId" placeholder="이메일" />
      <input type="password" name="userPw" id="userPw" placeholder="비밀번호" />

      <div className="keepLogin">
        <input type="checkbox" name="keepLogin" id="keepLogin" />
        <label htmlFor="keepLogin">로그인상태유지</label>
      </div>

      <button type="submit">로그인</button>
      <div className="loginOthers">
        <Link to="/join">회원가입</Link>
        <Link to="">아이디 &#183; 비밀번호 찾기</Link>
      </div>
      <p>또는</p>
      <NavLink to="" className="kakao">
        <img src={kakaoImg} alt="카카오톡" />
        카카오로 시작하기
      </NavLink>
      <p>또는</p>
      <NavLink to="" className="noMember">
        비회원 주문배송 조회
      </NavLink>
    </div>
  );
}

export default Login;
