import "./Note.css";

export default function Note({ note }) {
    return (
        <div class="note">
            <div class="note-head">
                <div class="title-note">{note.title}</div>
                <div class="date-note">{note.date}</div>
            </div>
            <div class="body-note">{note.content}</div>
        </div>
    )
}