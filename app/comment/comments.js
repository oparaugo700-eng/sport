"use client"
import React, { useEffect, useRef, useState } from 'react'
import './comment.css'
import { Button } from '@mui/material'

export default function Comment() {
    const date = new Date()
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    const fullDate = `${day}-${month}-${year}`
    const [comments, setComments] = useState([])
    const inputRef = useRef(null)

    useEffect(() => {
        const savedComments = localStorage.getItem('comments')
        if (savedComments) {
            setComments(JSON.parse(savedComments))
        }
    }, [])
    const forms = (e) => {
        e.preventDefault()
        const newComments = document.getElementById("inputId").value;
        document.getElementById("inputId").value = " "
        setComments(c => [...c, newComments])
    }

    const removeComment = (index) => {
        setComments(comments.filter((_, i) => i !== index))
    }

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])


    return (
        <main className='comment_main'>

            <ul className='comment_ul'>
                {comments.map((comment, index) => {
                    return (
                        <div key={index} >
                            <div className='wrapper'>
                                <p className='date_style'>{fullDate}</p>
                                <li className='comment-li'>{comment}</li>

                            </div>
                            <Button className='comment-div' onClick={() => removeComment(index)}>Remove</Button>

                        </div>
                    )
                }
                )}
            </ul>
            <form className='form' onSubmit={forms}>
                <textarea className='form_textarea' placeholder='Enter Your Favourite Sport Player' id='inputId' ref={inputRef} ></textarea><br />
                <button type='submit' className='form_button'>Submit</button>
            </form>
        </main>
    )
}
