import './LogIn.css';
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <div class="log-in">
            <div class="div">
                <Link to="/"><img class="arrow" src="https://c.animaapp.com/maoc6uwmnzwnUO/img/arrow-1.svg" /></Link>
                <div class="main-content">
                    <p class="welcome-back">
                        <span class="text-wrapper">welcome </span>
                        <span class="span">back</span>
                        <span class="text-wrapper">!</span>
                    </p>
                    <div class="forms">
                        <div class="email">
                            <input class="input" placeholder="Your email" type="email" id="input-1" />
                            <label class="text-wrapper-2" for="input-1">Email</label>
                        </div>
                        <div class="password">
                            <div class="password-2">
                                <div class="text-wrapper-3">Enter your password</div>
                                <img class="eye" src="https://c.animaapp.com/maoc6uwmnzwnUO/img/eye-2.png" />
                            </div>
                            <div class="text-wrapper-2">Password</div>
                        </div>
                    </div>
                    <div class="acception">
                        <div class="ellipse"></div>
                        <p class="p">I accept the terms and privacy policy</p>
                    </div>
                    <div class="buttons">
                        <Link to="/get_started"><div class="div-wrapper"><div class="text-wrapper-4">Log in</div></div></Link>
                        <div class="text-wrapper-5">Forgot password?</div>
                        <p class="don-t-have-an">
                            <Link to="/sign_in"><span class="text-wrapper">Don’t have an account? </span> <span class="span">Create</span></Link>
                        </p>
                        <div class="or">
                            <div class="text-wrapper-6">or</div>
                            <img class="line" src="https://c.animaapp.com/maoc6uwmnzwnUO/img/line-2.svg" />
                            <img class="img" src="https://c.animaapp.com/maoc6uwmnzwnUO/img/line-2.svg" />
                        </div>
                        <div class="google">
                            <img class="google-2" src="https://c.animaapp.com/maoc6uwmnzwnUO/img/google-1.png" />
                            <div class="text-wrapper-4">Continue with Google</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}