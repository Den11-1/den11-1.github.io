import './SignIn.css';
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div class="sign-in">
            <div class="div">
                <Link to="/"><img class="arrow" src="https://c.animaapp.com/maoan88uBzfPA3/img/arrow-1.svg" /></Link>
                <div class="main-content">
                    <p class="create-an-account">
                        <span class="text-wrapper">create</span> <span class="span"> an account</span>
                    </p>
                    <div class="forms">
                        <div class="email">
                            <input class="input" placeholder="Your email" type="email" id="input-1" />
                            <label class="text-wrapper-2" for="input-1">Email</label>
                        </div>
                        <div class="password">
                            <div class="text-wrapper-2">Password</div>
                            <div class="password-2">
                                <div class="text-wrapper-3">Enter your password</div>
                                <img class="eye" src="https://c.animaapp.com/maoan88uBzfPA3/img/eye-1.png" />
                            </div>
                            <p class="p">Use at least 8 characters</p>
                        </div>
                    </div>
                    <div class="acception">
                        <div class="ellipse"></div>
                        <p class="text-wrapper-4">I accept the terms and privacy policy</p>
                    </div>
                    <div class="buttons">
                        <div class="or">
                            <div class="text-wrapper-5">or</div>
                            <img class="line" src="https://c.animaapp.com/maoan88uBzfPA3/img/line-2.svg" />
                            <img class="img" src="https://c.animaapp.com/maoan88uBzfPA3/img/line-2.svg" />
                        </div>
                        <div class="google">
                            <img class="google-2" src="https://c.animaapp.com/maoan88uBzfPA3/img/google-1.png" />
                            <div class="text-wrapper-6">Continue with Google</div>
                        </div>
                        <p class="already-have-an">
                            <Link to="/log_in"><span class="span">Already have an account? </span> <span class="text-wrapper">Log in</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}