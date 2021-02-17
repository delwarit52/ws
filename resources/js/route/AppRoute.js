import React, {Component,Fragment} from 'react';
import AboutPage from "../pages/Frontend/AboutPage";
import HomePage from "../pages/Frontend/HomePage";
import {
    Switch,
    Route
} from "react-router-dom";
import ServicePage from "../pages/Frontend/ServicePage";
import CoursePage from "../pages/Frontend/CoursePage";
import PortfolioPage from "../pages/Frontend/PortfolioPage";
import ContactPage from "../pages/Frontend/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/about">
                    <AboutPage/>
                </Route>

                <Route exact path="/service">
                    <ServicePage/>
                </Route>

                <Route exact path="/course">
                    <CoursePage/>
                </Route>

                <Route exact path="/portfolio">
                    <PortfolioPage/>
                </Route>

                <Route exact path="/contact">
                    <ContactPage/>
                </Route>

                <Route exact path="/">
                    <HomePage />
                </Route>

            </Switch>
        );
    }
}

export default AppRoute;
