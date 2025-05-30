import './FirstOfAll.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

export default function FirstOfAll() {
    const navigate = useNavigate();
    
    useEffect(() => {
        // Відстеження автентифікації користувача
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/home");
            }
        });

        // loadComments(setComments, setLoading);
        return () => unsubscribe();
    }, []);

    return (
        <div class="first-of-all">
            <div class="div">
                <div class="text-wrapper">entry</div>
                <p class="let-your-notes-find">
                    <span class="span">let your notes find a</span>
                    <span class="text-wrapper-2">&nbsp;</span>
                    <span class="text-wrapper-3">home</span>
                    <span class="text-wrapper-2">.</span>
                </p>
                <div class="buttons">
                    <Link to="/sign_in"><div class="create"><div class="text-wrapper-4">Create an account</div></div></Link>
                    <Link to="/log_in"><div class="frame"><div class="text-wrapper-5">I have an account</div></div></Link>
                </div>
                <p class="lorem-ipsum-has-been">
                    Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to.
                </p>
            </div>
        </div>
        // <main class="first-of-all">
        //     <section class="div">
        //         <h1 class="text-wrapper">entry</h1>
        //         <p class="let-your-notes-find">
        //             <span class="span">let your notes find a</span>
        //             <span class="text-wrapper-2">&nbsp;</span>
        //             <span class="text-wrapper-3">home</span>
        //             <span class="text-wrapper-2">.</span>
        //         </p>
        //         <div class="buttons">
        //             <button class="create"><span class="text-wrapper-4">Create an account</span></button>
        //             <button class="frame"><span class="text-wrapper-5">I have an account</span></button>
        //         </div>
        //         <p class="lorem-ipsum-has-been">
        //             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        //             galley of type and scrambled it to.
        //         </p>
        //     </section>
        // </main>
    );
}