import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./LogIn.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!acceptTerms) {
      setError("Будь ласка, прийміть умови та політику конфіденційності.");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Користувача увійшов:", userCredential.user);
      navigate("/home"); 
    } catch (err) {
      console.error("Помилка входу:", err);
      if (err.code === "auth/invalid-credential") {
        setError("Невірний email або пароль.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="log-in">
      <div className="div">
        <Link to="/">
          <img
            className="arrow"
            src="https://c.animaapp.com/maoc6uwmnzwnUO/img/arrow-1.svg"
            alt="arrow"
          />
        </Link>
        <div className="main-content">
          <p className="welcome-back">
            <span className="text-wrapper">welcome </span>
            <span className="span">back</span>
            <span className="text-wrapper">!</span>
          </p>
          <div className="forms">
            <div className="email">
              <input
                className="input"
                placeholder="Your email"
                type="email"
                id="input-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="text-wrapper-2" htmlFor="input-1">
                Email
              </label>
            </div>
            <div className="password">
              <div className="password-2">
                <div className="text-wrapper-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                      color: "var(--clear-green)",
                      fontFamily: "Poppins, Helvetica",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                    required
                  />
                </div>
                <img
                  className="eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                  src={
                    showPassword
                      ? "https://c.animaapp.com/mb18h967WZb8A8/img/eye-1.png"
                        : "/images/hidden.png"
                  }
                  alt={showPassword ? "Hide password" : "Show password"}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="text-wrapper-2">Password</div>
            </div>
          </div>
          {error && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>
              {error}
            </p>
          )}
          <div
            className="acception"
            onClick={() => setAcceptTerms((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="ellipse"
              style={{
                backgroundColor: acceptTerms ? "#31493c" : "transparent",
              }}
            ></div>
            <p className="p">I accept the terms and privacy policy</p>
          </div>
          <div className="buttons">
            <div
              className="div-wrapper"
              onClick={handleLogin}
              style={{ cursor: "pointer" }}
            >
              <div className="text-wrapper-4">Log in</div>
            </div>
            <div className="text-wrapper-5">Forgot password?</div>
            <p className="don-t-have-an">
              <Link to="/sign_in">
                <span className="text-wrapper">Don’t have an account? </span>
                <span className="span">Create</span>
              </Link>
            </p>
            <div className="or">
              <div className="text-wrapper-6">or</div>
              <img
                className="line"
                src="https://c.animaapp.com/maoc6uwmnzwnUO/img/line-2.svg"
                alt="line"
              />
              <img
                className="img"
                src="https://c.animaapp.com/maoc6uwmnzwnUO/img/line-2.svg"
                alt="line"
              />
            </div>
            <div className="google">
              <img
                className="google-2"
                src="https://c.animaapp.com/maoc6uwmnzwnUO/img/google-1.png"
                alt="google logo"
              />
              <div className="text-wrapper-4">Continue with Google</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
