import './MakeANote.css';
import { useEffect } from "react";

import './MakeANote.css'; 
import { Link } from "react-router-dom";

export default function MakeANote() {
    return (
        <div class="make-a-note">
            <div class="div">
                <div class="date">
                    <div class="text-wrapper">Today</div>
                    <div class="text-wrapper-2">Tue, 15 Apr</div>
                </div>
                <Link to="/home"><img class="arrow" src="https://c.animaapp.com/maoez0i4MW0y0J/img/arrow-1.svg" /></Link>
                <img class="line" src="https://c.animaapp.com/maoez0i4MW0y0J/img/line-9.svg" />
                <img class="export" src="https://c.animaapp.com/maoez0i4MW0y0J/img/export-1.png" />
                <div class="overlap-group">
                    <div class="view">
                        <div class="text-wrapper-3">A</div>
                        <img class="checkbox" src="https://c.animaapp.com/maoez0i4MW0y0J/img/checkbox-1.png" />
                        <img class="list" src="https://c.animaapp.com/maoez0i4MW0y0J/img/list-1.png" />
                        <img class="paper-clip" src="https://c.animaapp.com/maoez0i4MW0y0J/img/paper-clip-1.png" />
                        <img class="pen" src="https://c.animaapp.com/maoez0i4MW0y0J/img/pen-1.png" />
                        <img class="voice" src="https://c.animaapp.com/maoez0i4MW0y0J/img/voice-1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}