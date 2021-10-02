import React from 'react'
import {Link} from 'react-router-dom'

export const RegisterDes = () => {
    return (
        <div>
            <>
            <h3 className="auth__title">Login</h3>
            <form >

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="text"
                    placeholder="Email address"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="Password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />

                <input 
                    type="Password"
                    placeholder="Confirm password"
                    name="Confirm"
                    className="auth__input"
                />

                <button
                    type="submit"
                    className="btn btn-prime btn-block mb-5"
                >
                    Register
                </button>
                
                <Link
                 to="/auth/login" 
                 className="link">
                    Alredy Register?
                </Link>
            </form>
        </>
        </div>
    )
}
