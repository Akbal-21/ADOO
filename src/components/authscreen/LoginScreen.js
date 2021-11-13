import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'

export const LoginScreen = () => {

    const {loading} = useSelector(state => state.ui)

    const {msgError} = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm ({
        email: 'akbal153@hotmail.com',
        password: '123456'
    })

    const isFormValid = () => {
        if ( !validator.isEmail( email )) {
            dispatch(setError('email is not valid.'))
            return false;
        } else if (password.length<5) {
            dispatch(setError('Password should be at least 6 charactersand.'))
            return false;
        }

        dispatch(removeError())
        return true;
    }

    const hadleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password))
        }
    }

    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
    }

    const {email, password} = formValues;

    return (
        <>

            <h3 className="auth__title">Login</h3>

            {
                msgError &&
                (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }
            
            <form  onSubmit={hadleLogin}>
                <input 
                    type="text"
                    placeholder="Email address"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="Password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-prime btn-block"
                    disabled={loading}
                >
                    Login
                </button>
                
                <div 
                    className="auth__social-networks"
                    onClick={handleGoogleLogin}
                >
                    <p>social networks</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>google</b>
                        </p>
                    </div>
                </div>
                <Link
                 to="/auth/register" 
                 className="link">
                    Registrer
                </Link>
            </form>
        </>
    )
}
