"use client"
import React, { useEffect, useState } from 'react'
import './component.css'
import { Button } from '@mui/material'

export default function Theme() {
    const [text, setText] = useState("Dark Mode")
    const [isChecked, setIsChecked] = useState(false)

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")

    }


    const toggleTheme = (e) => {
        const checked = e.target.checked
        setIsChecked(checked)

        if (checked) {
            setDarkMode()
            setText("Light Mode")
        } else {
            setLightMode()
            setText("Dark Mode")
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme")
        if (savedTheme === "dark") {
            setDarkMode()
            setText("Light Mode")
            setIsChecked(true)
        } else if (savedTheme === "light") {
            setLightMode()
            setText("Dark Mode")
            setIsChecked(false)
        } else {
            // No saved theme: use system preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            if (prefersDark) {
                setDarkMode()
                setText("Light Mode")
                setIsChecked(true)
            } else {
                setLightMode()
                setText("Dark Mode")
                setIsChecked(false)
            }
        }

    }, [])






    return (
        <div>
            <Button >
                <input
                    type='checkbox'
                    onChange={toggleTheme}
                    checked={isChecked}
                />
                <span className='btn_color'>{text}</span>
            </Button>
        </div>
    )
}
