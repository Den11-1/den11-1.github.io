import './AdditionalOptions.css';
import { Link } from "react-router-dom";

export default function AdditionalOptions() {
    return (
        <div class="additional-options">
            <div class="overlap-wrapper">
                <div class="overlap">
                    <Link to="/home"><div class="background">
                    <div class="date">
                        <div class="text-wrapper">Today</div>
                        <div class="div">Tue, 15 Apr</div>
                    </div>
                    <div class="search">
                        <div class="text-wrapper-2">Find loosen one...</div>
                        <img class="img" src="https://c.animaapp.com/maodwzbnDbMrau/img/search-1.png" />
                    </div>
                    <div class="frame">
                        <div class="arrow">
                            <div class="overlap-group">
                                <img class="line" src="https://c.animaapp.com/maodwzbnDbMrau/img/line-6.svg" />
                                <img class="line-2" src="https://c.animaapp.com/maodwzbnDbMrau/img/line-6.svg" />
                            </div>
                        </div>
                        <div class="text-wrapper-3">my notes</div>
                        <div class="text-wrapper-4">Sat, 12 Apr</div>
                        <div class="overlap-2">
                            <div class="reminders">
                                <div class="arrow">
                                    <div class="overlap-group">
                                        <img class="line" src="https://c.animaapp.com/maodwzbnDbMrau/img/line-6.svg" />
                                        <img class="line-2" src="https://c.animaapp.com/maodwzbnDbMrau/img/line-6.svg" />
                                    </div>
                                </div>
                                <div class="text-wrapper-5">reminders</div>
                                <div class="text-wrapper-6">No reminders</div>
                            </div>
                            <div class="calendar">
                                <div class="arrow">
                                    <div class="overlap-group">
                                        <img class="line" src="https://c.animaapp.com/maodwzbnDbMrau/img/line-6.svg" />
                                        <img class="line-2" src="https://c.animaapp.com/maodwzbnDbMrau/img/line-6.svg" />
                                    </div>
                                </div>
                                <div class="text-wrapper-7">calendar</div>
                                <div class="text-wrapper-8">April</div>
                                <div class="navigation">
                                    <div class="nav">
                                        <div class="text-wrapper-9">folders</div>
                                        <div class="text-wrapper-9">tags</div>
                                        <div class="text-wrapper-9">locations</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div></Link>
                    <div class="menu">
                        <img class="user-icon" src="https://c.animaapp.com/maodwzbnDbMrau/img/user-icon.png" />
                        <div class="user-name">
                            <div class="text-wrapper-10">Sofiia Balaniuk</div>
                            <div class="text-wrapper-11">sophiabalanyuk11@gmail.com</div>
                        </div>
                        <div class="text-wrapper-12">Notes</div>
                        <div class="text-wrapper-13">Calendar</div>
                        <div class="text-wrapper-14">Manege Lists</div>
                        <div class="text-wrapper-15">Settings</div>
                        <div class="text-wrapper-16">Support</div>
                        <div class="text-wrapper-17">Log Out</div>
                    </div>
                </div>
            </div>
        </div>
    );
}