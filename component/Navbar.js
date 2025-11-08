"use client"
import React from 'react'
import { Button } from '@mui/material'
import './component.css'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
import Theme from '/component/Theme'



export default function Navbar() {
    return (
        <header className='nav_header'>
            <div className='div_btn'>
                <Theme />
                <Link href="/auth/login"><Button variant='contained' color='success' className='navbar_btn'>Login</Button></Link>
            </div>

            <div className='navbar'>
                <p className='nav_p1'>Get-Sporty</p>

                <div>
                    <CgProfile className='profile_icon' />
                </div>
            </div>
        </header>
    )
}
