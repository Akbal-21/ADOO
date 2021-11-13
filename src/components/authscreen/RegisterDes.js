import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterEmailPassword } from '../../actions/auth'

export const RegisterDes = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Fernando',
        email: 'akbal153@hotmail.com',
        password: '123456',
        password2: '123456',
    })

    const{name,email,password,password2} = formValues

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterEmailPassword(email,password, name))
        }
    }

    const isFormValid = () => {
        if (name.trim().length=== 0) {
            dispatch(setError('Name is required.'))
            return false;
        } else if ( !validator.isEmail( email )) {
            dispatch(setError('email is not valid.'))
            return false;
        } else if (password !== password2 || password.length<5) {
            dispatch(setError('Password should be at least 6 charactersand match.'))
            return false;
        }

        dispatch(removeError())
        return true;
    }



    return (
        <div>
            <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                            
                        </div>
                    )
                }
                

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value = {name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email address"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value = {email}
                    onChange={handleInputChange}
                />

                <input 
                    type="Password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value = {password}
                    onChange={handleInputChange}
                />

                <input 
                    type="Password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value = {password2}
                    onChange={handleInputChange}
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
