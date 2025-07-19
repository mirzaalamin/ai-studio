import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginWithEmailAndPassword } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../firebase"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)

    if (user) navigate("/")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await loginWithEmailAndPassword(email, password)
            if (user.email) {
                navigate("/")
            } else {
                setError("Login failed, Check your email and password")
            }
        } catch (error) {
            console.log("login failed")
        }
    }
    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Login</h2>
                    </div>
                    <div className="row clearfix">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="input_field">
                                    <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="input_field">
                                    <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>

                                <input className="button" type="submit" value="Login" />
                            </form>
                            {error && (
                                <p className='text-red-600'>{error}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <p className="credit">
                Don't have an account? <NavLink to="/registration">Register</NavLink><br />
                <span><NavLink to="/reset" className="underline">Forgot your password?</NavLink></span>
            </p>

        </>

    )
}

export default Login