import Note from './Note';
import { useEffect, useState } from 'react';

export default function Category({ category }) {
    const [is_visible_notes, setIsVisibleNotes] = useState(false);
    const [color, setColor] = useState("r");

    useEffect(() => {
        const colors = ["r", "g", "y"];
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);

    return (
        <div class='category'>
            <div class="category-head" onClick={() => setIsVisibleNotes(!is_visible_notes)}>
                <div class="title-category">
                    <img class="line" src={`/v1/build/images/Line_${color}.svg`} />
                    <div class="title">{category.title}</div>
                </div>
                <img class="arrow"
                    src={is_visible_notes ? "https://c.animaapp.com/maoer0laEidg9o/img/arrow.png" : "https://c.animaapp.com/maodp9luJPrwVp/img/arrow.png"} />
            </div>
            {is_visible_notes ? category.notes.map((note, index) => (
                <Note note={note} />
            )) : null}
        </div>
    )
}