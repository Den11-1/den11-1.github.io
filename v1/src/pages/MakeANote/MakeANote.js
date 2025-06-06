import './MakeANote.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { addNoteForCurrentUser } from "./addNoteForCurrentUser";

export default function MakeANote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            setMessage("Введіть заголовок і текст нотатки");
            return;
        }
        try {
            await addNoteForCurrentUser(title, content);
            setMessage("Нотатку збережено!");
            setTitle("");
            setContent("");
        } catch (err) {
            setMessage("Помилка збереження нотатки");
        }
    };

    return (
        <div className="make-a-note">
            <div className="div">
                <div className="date">
                    <div className="text-wrapper">Today</div>
                    <div className="text-wrapper-2">Tue, 15 Apr</div>
                </div>
                <Link to="/home">
                    <img className="arrow" src="https://c.animaapp.com/maoez0i4MW0y0J/img/arrow-1.svg" alt="Back" />
                </Link>
                <img className="line" src="https://c.animaapp.com/maoez0i4MW0y0J/img/line-9.svg" alt="Line" />
                <img className="export" src="https://c.animaapp.com/maoez0i4MW0y0J/img/export-1.png" alt="Export" />
                <div className="overlap-group">
                    <div className="view">
                        <div className="text-wrapper-3">A</div>
                        <img className="checkbox" src="https://c.animaapp.com/maoez0i4MW0y0J/img/checkbox-1.png" alt="Checkbox" />
                        <img className="list" src="https://c.animaapp.com/maoez0i4MW0y0J/img/list-1.png" alt="List" />
                        <img className="paper-clip" src="https://c.animaapp.com/maoez0i4MW0y0J/img/paper-clip-1.png" alt="Paperclip" />
                        <img className="pen" src="https://c.animaapp.com/maoez0i4MW0y0J/img/pen-1.png" alt="Pen" />
                        <img className="voice" src="https://c.animaapp.com/maoez0i4MW0y0J/img/voice-1.png" alt="Voice" />
                    </div>
                </div>
                {/* Форма нотатки */}
                <div className="note-form-wrapper">
                    <form className="note-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Заголовок"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="note-title"
                        />
                        <textarea
                            placeholder="Ваша нотатка..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="note-content"
                            rows={5}
                        />
                        <button type="submit" className="note-save-btn">Зберегти нотатку</button>
                        {message && <div className="note-message">{message}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}
