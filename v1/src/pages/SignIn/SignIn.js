import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!acceptTerms) {
      setError("Будь ласка, прийміть умови та політику конфіденційності.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Користувача зареєстровано:", userCredential.user);
      navigate("/");
    } catch (err) {
      console.error("Помилка реєстрації:", err);
      setError(err.message);
    }
  };

  return (
    <div className="sign-in">
      <div className="div">
        <Link to="/">
          <img
            className="arrow"
            src="https://c.animaapp.com/mb18h967WZb8A8/img/arrow-1.svg"
            alt="arrow"
          />
        </Link>
        <div className="main-content">
          <p className="create-an-account">
            <span className="text-wrapper">create</span>{" "}
            <span className="span"> an account</span>
          </p>
          <form onSubmit={handleRegister} className="form-container">
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
                <div className="text-wrapper-2">Password</div>
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
                        : "../../assets/images/hidden.jpg" 
                    }
                    alt={showPassword ? "Hide password" : "Show password"}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <p className="p">Use at least 8 characters</p>
                {error && <p className="error">{error}</p>}
              </div>
            </div>
            <div
              className="acception"
              onClick={() => setAcceptTerms(!acceptTerms)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="ellipse"
                style={{
                  backgroundColor: acceptTerms ? "#31493c" : "transparent",
                }}
              ></div>
              <p className="text-wrapper-4">
                I accept the terms and privacy policy
              </p>
            </div>
            <div className="buttons">
              <div className="div-wrapper">
                <button
                  type="submit"
                  className="text-wrapper-5"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </button>
              </div>
              <div className="or">
                <div className="text-wrapper-6">or</div>
                <img
                  className="line"
                  src="https://c.animaapp.com/mb18h967WZb8A8/img/line-1.svg"
                  alt="line"
                />
                <img
                  className="img"
                  src="https://c.animaapp.com/mb18h967WZb8A8/img/line-1.svg"
                  alt="line"
                />
              </div>
              <div className="google">
                <img
                  className="google-2"
                  src="https://c.animaapp.com/mb18h967WZb8A8/img/google-1.png"
                  alt="google logo"
                />
                <div className="text-wrapper-5">Continue with Google</div>
              </div>
              <p className="already-have-an">
                <Link to="/log_in">
                  <span className="span">Already have an account? </span>
                  <span className="text-wrapper">Log in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
