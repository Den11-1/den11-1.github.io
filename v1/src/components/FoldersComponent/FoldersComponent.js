import './FoldersComponent.css';
import { Link } from "react-router-dom";
import Note from './Note';
import { useEffect, useState } from 'react';
import Category from './Category';
import { showAllNotesForCurrentUser } from '../../firebase';
import { addNoteForCurrentUser } from '../../firebase';

export default function FoldersComponent({tab, setTab}) {

function categorizeNotes(notes, tab) {
    const byField = tab === 1 ? "folder" : tab === 2 ? "tags" : "location";

    if (!Array.isArray(notes) || notes.length === 0) {
        return [];
    }

    const categoriesMap = new Map();

    notes.forEach(note => {
        let keys = [];

        const fieldValue = note[byField];

        // Обробляємо "tags", "folders", "locations" однаково:
        if (Array.isArray(fieldValue)) {
            keys = fieldValue.map(v => String(v).trim()).filter(v => v !== "");
        } else if (typeof fieldValue === "string" && fieldValue.trim() !== "") {
            keys = [fieldValue.trim()];
        }

        // Якщо ключі порожні — Uncategorized
        if (keys.length === 0) {
            keys = ["Uncategorized"];
        }

        keys.forEach(key => {
            if (!categoriesMap.has(key)) {
                categoriesMap.set(key, []);
            }
            categoriesMap.get(key).push(note);
        });
    });

    const categoriesArray = Array.from(categoriesMap.entries()).map(([title, notes]) => ({
        title,
        notes
    }));

    console.log(categoriesArray);
    return categoriesArray;
}


    const [notes, setNotes] = useState();

    useEffect(() => {
        showAllNotesForCurrentUser()
        .then(notes => {
            setNotes(notes)
            console.log(notes)
        })
    }, [])

    const createNotes = async () => {
        // Папка "Work"
        await addNoteForCurrentUser("Meeting notes", "Summary of the quarterly meeting with the team.", "Work", ["Important"], "Office");
        await addNoteForCurrentUser("Budget planning", "Initial draft of the budget for the next fiscal year.", "Work", ["Ideas"], "Office");

        // Папка "Personal"
        await addNoteForCurrentUser("Grocery list", "Milk, Eggs, Bread, Coffee.", "Personal", ["Travel"], "Home");
        await addNoteForCurrentUser("Books to read", "1. 'Atomic Habits' 2. 'Deep Work' 3. 'The Pragmatic Programmer'", "Personal", ["Important"], "Home");

        // Папка "Projects"
        await addNoteForCurrentUser("Roadmap", "Timeline and deliverables for Project Alpha.", "Projects", ["Travel"], "Cafe");
        await addNoteForCurrentUser("Notes", "Ideas and research for Project Beta.", "Projects", ["Ideas"], "Cafe");
    }

    return (
        <>
        <div class="foldersComponent">
            <div class="div">
                <div class="overlap">
                    <div class="div-2">
                        <div class="title-tab" onClick={() => setTab(0)}>{tab == 1 ? "folders" : tab == 2 ? "tags" : "locations"}</div>
                            {categorizeNotes(notes, tab).map((category, index) => (
                                <Category category={category} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}