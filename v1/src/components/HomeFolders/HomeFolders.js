import './HomeFolders.css';
import { Link } from "react-router-dom";

export default function HomeFolders({setIs_visible_home_folders}) {
    return (
        <div class="homeFolders">
            <div class="div">
                <div class="frame">
                    <img class="arrow-2" src="https://c.animaapp.com/maodbhnhX64j70/img/arrow.png" />
                    <div class="text-wrapper-5">my notes</div>
                    <div class="text-wrapper-6">Sat, 12 Apr</div>
                    <div class="overlap">
                        <div class="reminders">
                            <img class="arrow-2" src="https://c.animaapp.com/maodbhnhX64j70/img/arrow.png" />
                            <div class="text-wrapper-7">reminders</div>
                            <div class="text-wrapper-8">No reminders</div>
                        </div>
                        <div class="calendar">
                            <img class="arrow-2" src="https://c.animaapp.com/maodbhnhX64j70/img/arrow-1.png" />
                            <div class="text-wrapper-9">calendar</div>
                            <div class="text-wrapper-10">April</div>
                            <div class="navigation">
                                <div class="nav">
                                    <Link to="/folders"><div class="text-wrapper-11">folders</div></Link>
                                    <div class="text-wrapper-11">tags</div>
                                    <div class="text-wrapper-11">locations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}