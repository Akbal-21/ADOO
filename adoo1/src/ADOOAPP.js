import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './Components/Auth/AuthContext'
import { authReducer } from './Components/Auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }
}

export const ADOOAPP = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
            <AuthContext.Provider value={{ user, dispatch }}>
                <AppRouter />
            </AuthContext.Provider>
    )
}
