import './MakeANote.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MakeANote() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate);
    }, []);

    const [note, setNote] = useState(""); // Стан для тексту нотатки

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value); // Оновлення тексту нотатки
    };

    return (
        <div className="make-a-note">
            <div className="header">
                <div className="date">
                    <div className="text-wrapper">Today</div>
                    <div className="text-wrapper-2">{currentDate}</div>
                </div>
                <Link to="/home">
                    <img className="arrow" src="https://c.animaapp.com/maoez0i4MW0y0J/img/arrow-1.svg" alt="Back" />
                </Link>
                <img className="line" src="https://c.animaapp.com/maoez0i4MW0y0J/img/line-9.svg" alt="Separator" />
                <img className="export" src="https://c.animaapp.com/maoez0i4MW0y0J/img/export-1.png" alt="Export" />
            </div>
            <div className="content">
                <textarea
                    className="note-input"
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Write your note here..."
                ></textarea>
            </div>
        </div>
    );
}
