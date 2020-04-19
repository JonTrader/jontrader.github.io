import React from 'react';
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
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </Router>
    </div>
    );
}





