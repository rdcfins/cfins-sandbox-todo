import React from 'react'
import ejs from 'ejs';

export default function About({repo}) {
    console.log(ejs.render("Hello <%= name %>", {name: 'World'}));
    return (
        <main>
            <h1>About Us</h1>
        </main>)
}