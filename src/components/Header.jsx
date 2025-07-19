import React from 'react'
import logo from '../assets/logo.svg'
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout } from "../firebase"
import Avatar from './Avatar';


const Header = () => {
    const location = useLocation()
    const [user, isLoading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout(user.email)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <img src={logo} alt='logo' className="h-10" />
            </div>
            <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                <NavLink to="/" className={`hover:text-zinc-200 font-medium ${location.pathname === "/" && "text-zinc-200"} cursor-pointer transition-all`}>Create Image</NavLink>
                <NavLink to="downloads" className={`hover:text-zinc-200 font-medium ${location.pathname === "/downloads" && "text-zinc-200"} cursor-pointer transition-all`} >Downloaded</NavLink>
                <div className='flex items-center gap-8'>

                    {user ? (
                        <>
                            <NavLink to="/" className={`hover:text-zinc-200 font-medium ${location.pathname === "/login" && "text-zinc-200"} cursor-pointer transition-all flex gap-2 items-center`} > <Avatar email={user.email} defaultAvatar={"/avatar.svg"} size={22} />
                                {user.email.split("@")[0]}
                            </NavLink>

                            <NavLink onClick={handleLogout} className="hover:text-zinc-200 cursor-pointer transition-all"><MdOutlineLogout size={20} /></NavLink>
                        </>
                    ) : (
                        <NavLink to="/login" className={`hover:text-zinc-200 font-medium ${location.pathname === "/login" && "text-zinc-200"} cursor-pointer transition-all flex gap-2 items-center`} ><FaRegCircleUser size={20} />Login</NavLink>
                    )}
                </div>
            </ul>
        </header>
    )
}

export default Header