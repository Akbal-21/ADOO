import React, { useEffect, useState } from 'react'
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from '@firebase/auth';

import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [isLoggedin, setIsLoggedin] = useState(false);

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
                setIsLoggedin(true);
            }else {
                setIsLoggedin(false);
            }
            setChecking(false)
          });
    }, [dispatch, setChecking, setIsLoggedin]);

    if (checking) {
        return(
            <h1>Espere...</h1>
        )
    }

    return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                    path="/auth"
                    isAuthenticated={isLoggedin}
                    component={AuthRouter}
                />
                <PrivateRoute   
                    path="/"
                    isAuthenticated={isLoggedin}
                    component={DashboardRoutes}
                />
            </Switch>
        </div>
    </Router>
    )
}
