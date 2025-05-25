import './Home.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import AdditionalOptions from '../../components/AdditionalOptions/AdditionalOptions';

export default function Home() {
    const today = new Date();

    const options = {
    weekday: 'short',   // "Tue"
    day: '2-digit',     // "15"
    month: 'short'      // "Apr"
    };

    const formattedDate = today.toLocaleDateString('en-US', options);
    console.log(formattedDate); // "Tue, 15 Apr"

    const [text, setText] = useState("Find loosen one..."); // Стан для тексту

    const handleChange = (event) => {
        setText(event.target.value); // Оновлення стану при зміні
    };


    return (
        <div class="home">
            <AdditionalOptions />

            <div class="div">
                <div class="head">
                    <Link to="/additional_options"><img class="user-icon" src="https://c.animaapp.com/maodbhnhX64j70/img/user-icon.png" /></Link>
                    <div class="text-wrapper">entry</div>
                </div>
                <div class="date">
                    <div class="text-wrapper-2">Today</div>
                    <div class="text-wrapper-3">{formattedDate}</div>
                    <Link to="/make_a_note"><div class="new">
                        <div class="overlap-group">
                            <img class="line" src="https://c.animaapp.com/maodbhnhX64j70/img/line-7.svg" />
                            <img class="img" src="https://c.animaapp.com/maodbhnhX64j70/img/line-8.svg" />
                        </div>
                    </div></Link>
                </div>
                <div class="search">
                    <input 
                        class="search_input"
                        type="text"
                        id="serach"
                        name="search"
                        value={text}
                        onChange={handleChange}
                    />
                    <img class="search_input_img" src="https://c.animaapp.com/maodbhnhX64j70/img/search-1.png" />
                </div>
                {/* <div class="search">
                    <div class="text-wrapper-4">Find loosen one...</div>
                    <img class="search-2" src="https://c.animaapp.com/maodbhnhX64j70/img/search-1.png" />
                </div> */}
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