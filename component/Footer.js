import React from 'react'
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='footers'>
            <div className='footer'>
                <p className='nav_p1'>Get-Sporty</p>

                <section className='footer_section'>
                    <p>&copy; {year} Get-Sporty. All right reserved</p>
                </section>

                <ul className='footer_ul'>
                    <li><Link href="https://www.linkedin.com/in/ugo-opara-562b772ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></Link> </li>
                    <li><Link href="https://www.instagram.com/king__sleeey?utm_source=qr&igsh=MTlnZWIxdTdyMDRncw=="><SiInstagram /></Link> </li>
                    <li><Link href="https://x.com/King_sleeey"><BsTwitterX /></Link></li>
                    <Link href="https://wa.me/+2349160909422"><FaWhatsapp /></Link>
                </ul>
            </div>
        </footer>
    )
}
