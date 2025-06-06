import './Home.css';
import { Link } from "react-router-dom";
import AdditionalOptions from '../../components/AdditionalOptions/AdditionalOptions';
import HomeFolders from '../../components/HomeFolders/HomeFolders';
import FoldersComponent from '../../components/FoldersComponent/FoldersComponent';
import NavBar from '../../components/NavBar/NavBar';
import { addNoteForCurrentUser, auth, showAllNotesForCurrentUser } from "../../firebase";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";


export default function Home() {
    const [is_visible_additional_options, setIs_visible_additional_options] = useState(false);
    const [tab, setTab] = useState(0);

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Відстеження автентифікації користувача
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        // addNoteForCurrentUser("Це тестова нотатка для поточного користувача").then(() => {
        //     console.log("Тестова нотатка додана");
        // });
        // showAllNotesForCurrentUser().then((notes) => {
        //     console.log("Всі нотатки користувача:", notes);
        // });
        });

        

        // loadComments(setComments, setLoading);
        return () => unsubscribe();
    }, []);

    const today = new Date();

    const options = {
    weekday: 'short',   // "Tue"
    day: '2-digit',     // "15"
    month: 'short'      // "Apr"
    };

    const formattedDate = today.toLocaleDateString('en-US', options);
    console.log(formattedDate); // "Tue, 15 Apr"

    const [text, setText] = useState(""); // Стан для тексту

    const handleChange = (event) => {
        setText(event.target.value); // Оновлення стану при зміні
    };


    return (
        <>
        <NavBar tab={tab} setTab={setTab}/>
        {tab == 0 ? <HomeFolders setTab={setTab}/> : <FoldersComponent tab={tab} setTab={setTab}/>}
        {is_visible_additional_options ? <AdditionalOptions currentUser={currentUser} setIs_visible_additional_options={setIs_visible_additional_options}/> : null}
        <div class="home">
            <div class="div">
                <div class="head">
                    <img class="user-icon" src="https://c.animaapp.com/maodbhnhX64j70/img/user-icon.png" onClick={() => setIs_visible_additional_options(true)}/>
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
                        placeholder="Find loosen one..."
                        type="text"
                        id="serach"
                        name="search"
                        value={text}
                        onChange={handleChange}
                    />
                    <img class="search_input_img" src="https://c.animaapp.com/maodbhnhX64j70/img/search-1.png" />
                </div>
            </div>
        </div>
        </>
    );
}