import React from 'react'
import { auth, signIn, signOut } from "@/auth"
import '/app/css/login.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'



export default function Login() {

    // const session = await auth()
    // // console.log(session)
    return (
        <main className='main_login'>
            <h1 className='h1_login'>Join Get-Sporty</h1>

            <form
                action={async () => {
                    "use server"
                    await signIn("google", { redirectTo: "/" })
                }}
                className='ul_login'
            >
                <button className='li1' type="submit"><span><FcGoogle className='login_icon google' /></span> Sign up with Google</button>
            </form>
            <form
                action={async () => {
                    "use server"
                    await signIn("facebook", { redirectTo: "/" })
                }}
                className='ul_login'
            >
                <button className='li2' ><span><FaFacebook className='login_icon facebook' /></span>Sign up with Facebook</button>
            </form>
            <form
                action={async () => {
                    "use server"
                    await signIn("instagram", { redirectTo: "/" })
                }}
                className='ul_login'
            >
                <button className='li3'><span><FaInstagram className='login_icon instagram' /></span>Sign up with Instagram</button>
            </form>
            <form
                action={async () => {
                    "use server"
                    await signOut()
                }}
                className='ul_login '
            >
                <button className='logout' type='submit'>Login out</button>
            </form>

        </main>
    )
}

