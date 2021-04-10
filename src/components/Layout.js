import React from 'react'
import Navbar from "../components/Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
    
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children}
            </div>
            <footer>
                <p>Copyright 2021 Web Warrior Portfolio</p>
            </footer>
        </div>
    )
}
