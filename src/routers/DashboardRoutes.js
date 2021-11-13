import { onAuthStateChanged } from '@firebase/auth'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { CreateProyect } from '../components/screen/CreateProyect'
import { HomeScreen } from '../components/screen/HomeScreen'
import { ProfileScreen } from '../components/screen/ProfileScreen'
import { Navbar1 } from '../components/ui/Navbar'



export const DashboardRoutes = () => {

    return (
        <div>
          
          <div>
            <Navbar1/>
              <Switch>
                <Route exact path="/home" component={HomeScreen}/>
                <Route exact path="/new_proyect" component={CreateProyect}/>
                <Route exact path="/profile" component={ProfileScreen}/>
                <Redirect to="/home"/>
              </Switch>
          </div>  
        </div>
    )
}
