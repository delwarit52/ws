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
import ServiceSinglePage from "../pages/Frontend/ServiceSinglePage";
import CourseDetail from "../components/Frontend/CoursePageComponent/courseDetail";
import CourseDetailPage from "../pages/Frontend/CourseDetailPage";
import CourseListPage from "../pages/Frontend/CourseListPage";
import TeamPage from "../pages/Frontend/TeamPage";
import LoginPage from "../pages/Backend/LoginPage";
import DashboardPage from "../pages/Backend/DashboardPage";
import InfoPage from "../pages/Backend/InfoPage";
import SliderPage from "../pages/Backend/SliderPage";
import EditSlider from "../components/Backend/Slider/EditSlider";
import AddSlider from "../components/Backend/Slider/AddSlider";

class AppRoute extends Component {
    render() {
        return (
            <Switch>


                <Route exact path="/">
                    <HomePage />
                </Route>

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


                <Route exact path="/team">
                    <TeamPage/>
                </Route>




                <Route exact path="/courselist/:id" component={CourseListPage}/>


                <Route exact path="/courseDetail/:id" component={CourseDetailPage}/>


                <Route exact path="/serviceSingle/:id" component={ServiceSinglePage}/>


                {/*Backend Route*/}


                <Route exact path="/admin">
                    <LoginPage/>
                </Route>

                <Route exact path="/dashboard">
                    <DashboardPage/>
                </Route>

                <Route exact path="/info">
                    <InfoPage/>
                </Route>

                <Route exact path="/slider">
                    <SliderPage/>
                </Route>

                <Route exact path="/addSlider">
                    <AddSlider/>
                </Route>

                <Route exact path="/editSlider/:id" component={EditSlider}/>

            </Switch>
        );
    }
}

export default AppRoute;
