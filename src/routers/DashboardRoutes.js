import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { proy } from '../components/proyect/proy'
import { CreateProyect } from '../components/screen/CreateProyect'
import { HomeScreen } from '../components/screen/HomeScreen'
import { Navbar } from '../components/ui/Navbar'


export const DashboardRoutes = () => {
    return (
        <div>
          
          <div>
              <Switch>
                  <Route exact path="/new_Proyect" component={proy}/>
                  <Route exact path="/Home" component={HomeScreen}/>
                  <Redirect to="/Home"/>
              </Switch>
          </div>  
        </div>
    )
}
