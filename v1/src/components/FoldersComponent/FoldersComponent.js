import './FoldersComponent.css';
import { Link } from "react-router-dom";
import Note from './Note';
import { useState } from 'react';
import Category from './Category';

export default function FoldersComponent({tab, setTab}) {
    const notes = [
        {
            title: 'test',
            date: '2022-01-01',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'        },
        {
            title: 'test2',
            date: '2022-01-02',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'
        },
        // {
        //     title: 'test3',
        //     date: '2022-01-03',
        //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'
        // }
    ]

    const categories_1 = [
        {
            title: 'Studying',
            notes: notes
        },
        {
            title: 'School',
            notes: notes
        },
        {
            title: 'Work',
            notes: notes
        }
    ]

    const categories_2 = [
        {
            title: 'Music',
            notes: notes
        },
        {
            title: 'Movies',
            notes: notes
        },
        {
            title: 'Books',
            notes: notes
        }
    ]
    
    const categories_3 = [
        {
            title: 'London',
            notes: notes
        },
        {
            title: 'Paris',
            notes: notes
        },
        {
            title: 'New York',
            notes: notes
        }
    ]

    return (
        <>
        <div class="foldersComponent">
            <div class="div">
                <div class="overlap">
                    <div class="div-2">
                        <div class="title-tab" onClick={() => setTab(0)}>{tab == 1 ? "folders" : tab == 2 ? "tags" : "locations"}</div>
                            {tab == 1 && categories_1.map((category, index) => (
                                <Category category={category} />
                            ))}
                            {tab == 2 && categories_2.map((category, index) => (
                                <Category category={category} />
                            ))}
                            {tab == 3 && categories_3.map((category, index) => (
                                <Category category={category} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}