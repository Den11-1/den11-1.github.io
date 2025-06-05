import './MakeANote.css';
import { useEffect } from "react";
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

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
// Додає нову нотатку для поточного користувача
// async function addNoteForCurrentUser(content) {
//     const user = auth.currentUser;
//     if (!user) {
//         console.log("Користувач не авторизований");
//         return;
//     }
//     const usersRef = collection(db, "Users");
//     const q = query(usersRef, where("email", "==", user.email));
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//         const userDoc = querySnapshot.docs[0];
//         const userDocRef = doc(db, "Users", userDoc.id);
//         const data = userDoc.data();
//         const noteId = `note_${Date.now()}`;
//         const newNote = {
//             content,
//             date: new Date().toISOString(),
//             folder: "",
//             tags: [],
//             title: "",
//         };
//         const updatedNotes = {
//             ...(data.notes || {}),
//             [noteId]: newNote
//         };
//         await updateDoc(userDocRef, { notes: updatedNotes });
//         console.log("Нова нотатка додана!");
//     } else {
//         console.log(`Користувача з email ${user.email} не знайдено`);
//     }
// }

// // Виводить всі нотатки поточного користувача в консоль
// async function showAllNotesForCurrentUser() {
//     const user = auth.currentUser;
//     if (!user) {
//         console.log("Користувач не авторизований");
//         return;
//     }
//     const usersRef = collection(db, "Users");
//     const q = query(usersRef, where("email", "==", user.email));
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//         const userDoc = querySnapshot.docs[0];
//         const data = userDoc.data();
//         if (data.notes && typeof data.notes === "object") {
//             const notes = Object.values(data.notes);
//             console.log(`Всі нотатки користувача ${user.email}:`, notes);
//             return notes;
//         }
//     }
//     console.log(`Нотаток для ${user.email} не знайдено`);
//     return [];
// }