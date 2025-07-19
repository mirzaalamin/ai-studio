import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerWithEmailAndPassword } from '../firebase'

const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (password === cPassword) {
                const user = await registerWithEmailAndPassword(email, password)
                if (user) {
                    navigate("/")
                } else {
                    setError("Failed")
                }

            } else {
                setError("Password and confirm password doesn't match")
            }

        } catch (isError) {
            console.log(isError)
        }
    }
    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Registration</h2>
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
                                <div className="input_field">
                                    <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="confirmPassword" placeholder="Re-type Password" required onChange={(e) => setCPassword(e.target.value)} value={cPassword} />
                                </div>
                                <input className="button" type="submit" value="Register" />
                            </form>
                            {error && (
                                <p className='text-red-600'>{error}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <p className="credit">
                Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
        </>

    )
}

export default Registration