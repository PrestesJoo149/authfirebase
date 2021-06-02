import React from 'react'
import { Container } from 'react-bootstrap';
import AuthProvider from '../context/AuthContext';
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'


function App() {
  return (

    
      <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight:"100vh"}}>
          <div className="w-100" style={{maxWidth: '400px'}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path= "/login" component={Login}/>
                  <Route path= "/signup" component={Signup}/>
                </Switch>
              </AuthProvider>
            </Router>
          </div>     
      </Container>
    

  )
 
}

export default App;
