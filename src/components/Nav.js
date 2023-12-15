'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

let renderCount = 0;

export default function Nav({ todos = [] }) {
    const [time, setTimer] = useState("00:00:00");

    useEffect(() => {
        let intervalId;
        setInterval(() => {
            intervalId = setTimer(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])
    console.log("Nav Rendered", renderCount++);
    return (
        <nav>
            <ul>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <Link href="/">Home - Current Completed time {time}</Link>
            <Link href="/about"> - About Us</Link>
        </nav>
    )
}