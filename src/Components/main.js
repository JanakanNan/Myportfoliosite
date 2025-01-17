import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';
import {Route, Switch} from "react-router-dom";

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Project} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;