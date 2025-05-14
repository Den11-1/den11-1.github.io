import './GetStarted.css';
import { Link } from "react-router-dom";

export default function GetStarted() {
    return (
        <div class="get-started">
            <div class="div">
                <div class="app">
                    <div class="logo"><div class="ellipse"></div></div>
                    <div class="text-wrapper">entry</div>
                </div>
                <Link to="/home"><div class="frame"><div class="text-wrapper-2">Get Started</div></div></Link>
                <div class="fiatures">
                    <div class="secure-w-icon">
                        <div class="secure">
                            <p class="p">Keep your entries private with end-to-end encryption.</p>
                            <div class="text-wrapper-3">Secure your data</div>
                        </div>
                        <img class="img" src="https://c.animaapp.com/maod79r5DXvECF/img/secure-1.png" />
                    </div>
                    <div class="reminders-w-icon">
                        <div class="reminders">
                            <p class="text-wrapper-4">Never miss a task with intelligent, customizable alerts.</p>
                            <div class="text-wrapper-3">Smart reminders</div>
                        </div>
                        <img class="img" src="https://c.animaapp.com/maod79r5DXvECF/img/notification-1.png" />
                    </div>
                    <div class="sync-w-icon">
                        <div class="sync">
                            <div class="text-wrapper-3">Sync across devices</div>
                            <p class="text-wrapper-5">Access your notes anytime, anywhere — seamlessly.</p>
                        </div>
                        <img class="img" src="https://c.animaapp.com/maod79r5DXvECF/img/monitor-1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}