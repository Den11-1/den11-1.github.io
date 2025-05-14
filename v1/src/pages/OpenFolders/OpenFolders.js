import './OpenFolders.css';
import { Link } from "react-router-dom";

export default function OpenFolders() {
    return (
        <div class="open-folders">
            <div class="div">
                <div class="head">
                    <Link to="/additional_options"><img class="user-icon" src="https://c.animaapp.com/maoer0laEidg9o/img/user-icon.png" /></Link>
                    <div class="text-wrapper">entry</div>
                </div>
                <div class="date">
                    <div class="text-wrapper-2">Today</div>
                    <div class="text-wrapper-3">Tue, 15 Apr</div>
                </div>
                <div class="search">
                    <div class="text-wrapper-4">Find loosen one...</div>
                    <img class="img" src="https://c.animaapp.com/maoer0laEidg9o/img/search-1.png" />
                </div>
                <div class="frame">
                    <div class="overlap">
                        <div class="text-wrapper-5">my notes</div>
                        <div class="second"><div class="text-wrapper-6">reminders</div></div>
                        <div class="calendar"><div class="text-wrapper-7">calendar</div></div>
                        <div class="folders">
                            <Link to="/home"><div class="text-wrapper-8">folders</div></Link>
                            <Link to="/folders"><div class="studying">
                                <img class="arrow" src="https://c.animaapp.com/maoer0laEidg9o/img/arrow.png" />
                                <img class="line" src="https://c.animaapp.com/maoer0laEidg9o/img/line-4.svg" />
                                <div class="text-wrapper-9">studying</div>
                                <div class="paragraph">
                                    <p class="p">when an unknown printer took a galley of type and scrambled...</p>
                                    <div class="curriculum">
                                        <div class="text-wrapper-10">curriculum</div>
                                        <div class="text-wrapper-11">Wed, 2 Apr</div>
                                    </div>
                                </div>
                                <div class="paragraph-2">
                                    <p class="p">when an unknown printer took a galley of type and scrambled...</p>
                                    <div class="subjects">
                                        <div class="text-wrapper-10">Subjects</div>
                                        <div class="text-wrapper-12">Mon, 1 Apr</div>
                                    </div>
                                </div>
                            </div></Link>
                            <div class="studying-2">
                                <img class="line" src="https://c.animaapp.com/maoer0laEidg9o/img/line-4.svg" />
                                <div class="text-wrapper-9">traveling</div>
                                <img class="arrow-2" src="https://c.animaapp.com/maoer0laEidg9o/img/arrow-1.png" />
                            </div>
                            <div class="studying-3">
                                <img class="line" src="https://c.animaapp.com/maoer0laEidg9o/img/line-4.svg" />
                                <div class="text-wrapper-9">hobby</div>
                                <img class="arrow-2" src="https://c.animaapp.com/maoer0laEidg9o/img/arrow-2.png" />
                            </div>
                        </div>
                        <div class="nav">
                            <div class="overlap-group">
                                <div class="rectangle"></div>
                                <div class="nav-2">
                                    <div class="text-wrapper-13">folders</div>
                                    <div class="text-wrapper-13">tags</div>
                                    <div class="text-wrapper-13">locations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/make_a_note"><div class="new">
                    <div class="overlap-2">
                        <img class="line-2" src="https://c.animaapp.com/maoer0laEidg9o/img/line-7.svg" />
                        <img class="line-3" src="https://c.animaapp.com/maoer0laEidg9o/img/line-8.svg" />
                    </div>
                </div></Link>
            </div>
        </div>
    );
}