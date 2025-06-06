import './HomeFolders.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Note from '../Note/Note';
import { showAllNotesForCurrentUser } from '../../firebase';

export default function HomeFolders({setTab}) {
    const [notes, setNotes] = useState([]);
    const [isFoldersOpen, setIsFoldersOpen] = useState(false);

    useEffect(() => {
        showAllNotesForCurrentUser()
        .then(notes => {
            setNotes(notes)
            console.log(notes)
        })
    }, [])

    return (
        <div class="homeFolders">
            <div class="div">
                <div class={`frame${isFoldersOpen ? 'Open' : ''}`}>
                    <img class={`arrow${isFoldersOpen ? 'Open' : ''}`} src="https://c.animaapp.com/maodbhnhX64j70/img/arrow.png" />
                    
                    <div class="title-tab" onClick={() => setIsFoldersOpen(!isFoldersOpen)}>my notes</div>
                    {notes && notes.map((note, index) => (
                        <Note note={note} />
                    ))}
                    
                    <div class={`overlap${isFoldersOpen ? 'Open' : ''}`}>
                        
                        <div class={`reminders${isFoldersOpen ? 'Open' : ''}`}>
                            <img class="arrow" src="https://c.animaapp.com/maodbhnhX64j70/img/arrow.png" />
                            <div class="text-wrapper-7">reminders</div>
                            <div class="text-wrapper-8">No reminders</div>
                        </div>

                        <div class={`calendar${isFoldersOpen ? 'Open' : ''}`}>
                            <img class="arrow" src="https://c.animaapp.com/maodbhnhX64j70/img/arrow-1.png" />
                            <div class="text-wrapper-9">calendar</div>
                            <div class="text-wrapper-10">April</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}