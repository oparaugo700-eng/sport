import React from 'react'
import { Button } from '@mui/material'
import './component.css'
import Link from 'next/link'
import Theme from '/component/Theme'
import { auth } from '@/auth'


export default async function Navbar() {
    const session = await auth()

    return (
        <header className='nav_header'>
            <div className='div_btn'>
                <Theme />
                <Link href="/auth/login"><Button variant='contained' color='success' className='navbar_btn'>Login</Button></Link>

            </div>

            <div className='navbar'>
                <p className='nav_p1'>Get-Sporty</p>

                <div className='session'>
                    <img
                        src={session?.user?.image || "/icons/account_circle_67dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png"}
                        className='imgc'
                    />

                    <p>{session?.user?.name || " "}</p>


                </div>
            </div>
        </header>
    )
}
