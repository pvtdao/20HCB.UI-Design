import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { accounts } from "../../fakeData/account";
function Register(props) {
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("Email không hợp lệ");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const navigate = useNavigate();
  const tooglePassWordVisibility = () => {
    setIsShowPassWord((isShowPassWord) => !isShowPassWord);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    if (!validateEmail(event.target.email.value.trim())) {
      setIsEmail(true);
      setErrorEmailMessage("Email không hợp lệ");
      return;
    }
    const result = accounts.find(
      ({ email }) => email === event.target.email.value.trim()
    );
    if (result !== undefined) {
      setIsEmail(true);
      setErrorEmailMessage("Email đã đăng ký tài khoản!!!");
    } else {
      accounts.push({
        id: accounts.length + 1,
        full_name: event.target.fullname.value,
        email: event.target.email.value,
        password: event.target.password.value,
        role: 'user'
      })
      navigate("/login");
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
          <div className="login__elementLeft" style={{ height: "529px" }}>
            <img
              className="login__logoLeft"
              src="https://seeklogo.com/images/N/nbc-news-logo-EDDBA8ADC9-seeklogo.com.png"
              alt="logo"
            />
            <h3 className="login__titleLeft">Đăng ký</h3>

            <Form className="login__formLeft" onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                <Input
                  required
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Họ và tên"
                />
              </div>
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
                {isEmail ? errorEmailMessage : ""}
              </span>
              <div className="input-group mb-3">
                <Input
                  className="mt-2 border login__inputPassword"
                  type={isShowPassWord ? "text" : "password"}
                  invalid={isPassword}
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                  onChange={handleInputOnchange}
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
              <Button className="login__buttonLeft mt-2">Đăng ký</Button>
              <Link to="/login" className="login__registerLeft">
                Đăng nhập
              </Link>
            </Form>

            <h5 className="login__subTitleLeft">
              <span className="login__subTitleTextLeft">Tạo tài khoản</span>
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

export default Register;
