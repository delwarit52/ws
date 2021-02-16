import React, {Component,Fragment} from 'react';
import TopMenu from "./components/Frontend/TopMenu/TopMenu";
import '.././css/bootstrap.min.css';
import Slider from "./components/Frontend/Slider/HomeSlider";
import HomeAboutUs from "./components/Frontend/AboutUs/HomeAboutUs";
import Service from "./components/Frontend/Service/Service";
import Course from "./components/Frontend/Course/Course";
import LearnWork from "./components/Frontend/LearnWork/LearnWork";
import RecentProject from "./components/Frontend/RecentProject/RecentProject";
import Achievement from "./components/Frontend/Achievement/Achievement";
import Review from "./components/Frontend/Review/Review";
import HomeSlider from "./components/Frontend/Slider/HomeSlider";
import TopBar from "./components/Frontend/TopMenu/TopBar";
import SiteAnalytic from "./components/Frontend/SiteAnalytic/SiteAnalytic";
import Footer from "./components/Frontend/Footer/Footer";
import HomePage from "./pages/Frontend/HomePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class App extends Component {
    render() {
        return (
            <Fragment>
                <HomePage/>
            </Fragment>
        );
    }
}

export default App;
