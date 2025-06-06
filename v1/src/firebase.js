import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ДОДАЙТЕ ЦЕ
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore"; // ДОДАЙТЕ ЦЕ

const firebaseConfig = {
  apiKey: "AIzaSyCyyyzMH15TOPlWQ8jB6P-y7NvQP_5ZHEk",
  authDomain: "entry-65c69.firebaseapp.com",
  projectId: "entry-65c69",
  storageBucket: "entry-65c69.firebasestorage.app",
  messagingSenderId: "673193618919",
  appId: "1:673193618919:web:f8011d7c62ad1ae3f1a142",
  measurementId: "G-K5M7V3NZ7D"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // ДОДАЙТЕ ЦЕ

export { analytics, auth, db }; // ДОДАЙТЕ db


// Додає нову нотатку для поточного користувача
export async function addNoteForCurrentUser(title, content, folder = "", tags = [], location = "") {
    const user = auth.currentUser;
    if (!user) {
        console.log("Користувач не авторизований");
        return;
    }
    const usersRef = collection(db, "Users");
    const q = query(usersRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = doc(db, "Users", userDoc.id);
        const data = userDoc.data();
        const noteId = `note_${Date.now()}`;
        const options = {
            weekday: 'short',   // "Tue"
            day: '2-digit',     // "15"
            month: 'short'      // "Apr"
        };
        const newNote = {
            id: noteId,
            title: title,
            content: content,
            date: new Date().toLocaleDateString('en-US', options),
            folder: folder,
            tags: tags,
            location: location,
        };
        const updatedNotes = {
            ...(data.notes || {}),
            [noteId]: newNote
        };
        await updateDoc(userDocRef, { notes: updatedNotes });
        console.log("Нова нотатка додана!");
    } else {
        console.log(`Користувача з email ${user.email} не знайдено`);
    }
}

// Виводить всі нотатки поточного користувача в консоль
export async function showAllNotesForCurrentUser() {
    const user = auth.currentUser;
    if (!user) {
        console.log("Користувач не авторизований");
        return;
    }
    const usersRef = collection(db, "Users");
    const q = query(usersRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const data = userDoc.data();
        if (data.notes && typeof data.notes === "object") {
            const notes = Object.values(data.notes);
            console.log(`Всі нотатки користувача ${user.email}:`, notes);
            return notes;
        }
    }
    console.log(`Нотаток для ${user.email} не знайдено`);
    return [];
}