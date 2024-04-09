import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>회원 가입</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="ID" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>가입 완료</button>
        <p className="loginsignup-login">
          이미 계정이 있습니다. <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>이용 약관 및 개인 정보 보호 정책에 동의합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
