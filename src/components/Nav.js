'use client'
import React from 'react'
import Link from 'next/link'

export default function Nav({ todos = [] }) {
    return (
        <nav>
            <ul>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <Link href="/">Home - Todos Completed {todos.filter(todo => todo.completed).length}</Link>
            <Link href="/about"> - About Us</Link>
        </nav>
    )
}