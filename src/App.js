import React from 'react';
import Welcome from './Pages/Components/Welcome';
import Home from './Pages/Components/Home';
import About from'./Pages/Components/About';
import Projects from './Pages/Components/Projects';
import Contact from './Pages/Components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() 
{
    return (

    <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/home" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={Projects} />
            </Switch>
        </Router>
    </div>
    );
}





