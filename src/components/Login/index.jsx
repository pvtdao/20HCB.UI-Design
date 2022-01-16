import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { accounts } from "../../fakeData/account";
function Login(props) {
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const navigate = useNavigate();
  console.log(accounts);
  const tooglePassWordVisibility = () => {
    setIsShowPassWord((isShowPassWord) => !isShowPassWord);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    const result = accounts.find(
      ({ email }) => email === event.target.email.value.trim()
    );
    if (result === undefined) {
      setIsEmail(true);
    } else if (result.password !== event.target.password.value.trim()) {
      setIsPassword(true);
    } else {
      window.localStorage.setItem('role', result.role);
      window.localStorage.setItem('full_name', result.full_name);
      window.localStorage.setItem('isLoggedIn', true);

      navigate("/");
    }
  };
  const handleInputOnchange = () => {
    setIsEmail(false);
    setIsPassword(false);
  };
  return (
    <div className="login__container">
      <div className="login__left">
        <div className="login__containerLeft">
          <div className="login__elementLeft">
            <img
              className="login__logoLeft"
              src="https://seeklogo.com/images/N/nbc-news-logo-EDDBA8ADC9-seeklogo.com.png"
              alt="logo"
            />
            <h3 className="login__titleLeft">Đăng nhập</h3>

            <Form className="login__formLeft" onSubmit={handleSubmit}>
              <div className="input-group">
                <Input
                  invalid={isEmail}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleInputOnchange}
                />
              </div>
              <span style={{ color: "red" }}>
                {isEmail ? "Email không hợp lệ!!!" : ""}
              </span>
              <div className="input-group mb-3">
                <Input
                  className="mt-2"
                  type={isShowPassWord ? "text" : "password"}
                  invalid={isPassword}
                  name="password"
                  id="password"
                  onChange={handleInputOnchange}
                  placeholder="Mật khẩu"
                />
                <span
                  className="login__password-icon"
                  onClick={tooglePassWordVisibility}
                >
                  {isShowPassWord ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <span style={{ color: "red" }}>
                {isPassword ? "Mật khẩu không đúng!!!" : ""}
              </span>
              <Button className="login__buttonLeft mt-2">Đăng nhập</Button>
              <Link to="/register" className="login__registerLeft">
                Đăng ký
              </Link>
            </Form>

            <h5 className="login__subTitleLeft">
              <span className="login__subTitleTextLeft">Mạng xã hội</span>
            </h5>
            <div className="login__containerSocial">
              <Button outline className="login__buttonLeft login__buttonGoogle">
                <span>
                  {" "}
                  <FaGoogle /> Google{" "}
                </span>
              </Button>
              <Button
                outline
                className="login__buttonLeft login__buttonFaceBook"
              >
                <span>
                  <FaFacebook /> FaceBook
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="login__right">
        <div className="login__containerRight">
          <div className="login__elememtRight"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
