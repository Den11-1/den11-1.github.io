import './NavBar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function NavBar({tab, setTab}) {
    return (
        <>
        <div class="navBar">
            <div class="div">
                <div class="overlap">
                    <div class={`nav ${tab === 0 ? '' : 'tabs'}`}>
                        <div class="overlap-group">
                            <div class={`selected-${tab}`}></div>
                            <div class="nav-2">
                                <div class="text-wrapper-7" onClick={() => setTab(1)}>folders</div>
                                <div class="text-wrapper-7" onClick={() => setTab(2)}>tags</div>
                                <div class="text-wrapper-7" onClick={() => setTab(3)}>locations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}