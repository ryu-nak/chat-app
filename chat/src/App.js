import React from 'react'
import {
    BrowserRouter as Router,

    Route, Switch
} from 'react-router-dom'
import AuthProvider from './AuthService'
import LoggedInRoute from './LoggedInRoute'
import Login from './pages/Login'
import Room from './pages/Room'
import SignUp from './pages/SignUp'





const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
            
        </AuthProvider>
    )
}

export default App