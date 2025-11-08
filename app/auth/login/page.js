import React from 'react'
import '/app/css/login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'


export default function page() {
    return (
        <main className='main_login'>
            <h1 className='h1_login'>Join Get-Sporty</h1>
            <ul className='ul_login'>
                <li className='li1' ><span><FcGoogle className='login_icon google' /></span> Sign up with Google</li>
                <li className='li2' ><span><FaFacebook className='login_icon facebook' /></span>Sign up with Facebook</li>
                <li className='li3'><span><FaInstagram className='login_icon instagram' /></span>Sign up with Instagram</li>
            </ul>
        </main>
    )
}
