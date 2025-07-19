import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { resetPassowrd } from '../firebase'


const Reset = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        resetPassowrd(email)
        navigate("/login")

    }
    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Reset your password</h2>
                    </div>
                    <div className="row clearfix">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="input_field">
                                    <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <input className="button" type="submit" value="Reset password" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className="credit">
                Don't have an account? <NavLink to="/registration">Register</NavLink><br />
            </p>

        </>
    )
}

export default Reset