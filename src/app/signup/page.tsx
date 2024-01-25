"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation"
import { axios } from "axios";


export default function SignupPage() {
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password:"",
    })
    

    const onSignup = async () => {
        
    }


   
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py2">
            <h1>SignUp</h1>
            <hr />
{/* username input field */}

            <label  htmlFor="username">username</label>
            <input className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 " type="text" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="username" />
            
            {/* email input field */}
            <label  htmlFor="email">email</label>
            <input className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 " type="text" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" />
            
            {/* password input field */}
            <label  htmlFor="password">password</label>
            <input className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 " type="text" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" />
            
            {/* Button section */}
            <button
                onClick={onSignup}
                 className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >Signup here</button>
            <Link href="/login">Visit login</Link>
        </div>
    )
}