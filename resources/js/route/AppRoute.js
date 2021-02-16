import React, {Component,Fragment} from 'react';
import AboutPage from "../pages/Frontend/AboutPage";
import HomePage from "../pages/Frontend/HomePage";
import {
    Switch,
    Route
} from "react-router-dom";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
