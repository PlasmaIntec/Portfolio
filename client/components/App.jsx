import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import NoMatch from './NoMatch.jsx';
import Projects from './Projects.jsx';
import '../styles/Navigation.css';
import '../styles/App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="head-nav-container">
                    <Link to="/">
                        <div className="head-nav">Home</div>
                    </Link>
                    <Link to="/projects">
                        <div className="head-nav">Projects</div>
                    </Link>
                </div>
                <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route exact path="/" component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}