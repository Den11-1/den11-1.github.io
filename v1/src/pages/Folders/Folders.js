import './Folders.css';
import { Link } from "react-router-dom";

export default function Folders() {
    return (
        <div class="folders">
            <div class="div">
                <div class="head">
                    <Link to="/additional_options"><img class="user-icon" src="https://c.animaapp.com/maodp9luJPrwVp/img/user-icon.png" /></Link>
                    <div class="text-wrapper">entry</div>
                </div>
                <div class="date">
                    <div class="text-wrapper-2">Today</div>
                    <div class="text-wrapper-3">Tue, 15 Apr</div>
                </div>
                <div class="search">
                    <div class="text-wrapper-4">Find loosen one...</div>
                    <img class="img" src="https://c.animaapp.com/maodp9luJPrwVp/img/search-1.png" />
                </div>
                <div class="overlap">
                    <div class="div-2">
                        <Link to="/home"><div class="text-wrapper-5">folders</div></Link>
                        <Link to="/open_folders"><div class="studying">
                            <img class="line" src="https://c.animaapp.com/maodp9luJPrwVp/img/line-4.svg" />
                            <div class="text-wrapper-6">studying</div>
                            <img class="arrow" src="https://c.animaapp.com/maodp9luJPrwVp/img/arrow.png" />
                        </div></Link>
                        <div class="studying-2">
                            <img class="line" src="https://c.animaapp.com/maodp9luJPrwVp/img/line-4.svg" />
                            <div class="text-wrapper-6">traveling</div>
                            <img class="arrow" src="https://c.animaapp.com/maodp9luJPrwVp/img/arrow-1.png" />
                        </div>
                        <div class="studying-3">
                            <img class="line" src="https://c.animaapp.com/maodp9luJPrwVp/img/line-4.svg" />
                            <div class="text-wrapper-6">hobby</div>
                            <img class="arrow" src="https://c.animaapp.com/maodp9luJPrwVp/img/arrow-2.png" />
                        </div>
                    </div>
                    <div class="nav">
                        <div class="overlap-group">
                            <div class="rectangle"></div>
                            <div class="nav-2">
                                <div class="text-wrapper-7">folders</div>
                                <div class="text-wrapper-7">tags</div>
                                <div class="text-wrapper-7">locations</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="line-2" src="https://c.animaapp.com/maodp9luJPrwVp/img/line-3.svg" />
                <Link to="/make_a_note"><div class="new">
                    <div class="overlap-2">
                        <img class="line-3" src="https://c.animaapp.com/maodp9luJPrwVp/img/line-7.svg" />
                        <img class="line-4" src="https://c.animaapp.com/maodp9luJPrwVp/img/line-8.svg" />
                    </div>
                </div></Link>
            </div>
        </div>
    );
}