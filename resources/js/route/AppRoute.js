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
import AnalyticPage from "../pages/Backend/AnalyticPage";
import EditAnalytic from "../components/Backend/Analytic/EditAnalytic";
import AdminAboutPage from "../pages/Backend/AdminAboutPage";
import EditAbout from "../components/Backend/About/EditAbout";
import AdminServicePage from "../pages/Backend/AdminServicePage";
import AddService from "../components/Backend/Service/AddService";
import EditService from "../components/Backend/Service/EditService";
import AdminCourseCatPage from "../pages/Backend/AdminCourseCatPage";
import EditCourseCat from "../components/Backend/CourseCat/EditCourseCat";
import AddCourseCat from "../components/Backend/CourseCat/AddCourseCat";
import ProjectSummaryPage from "../pages/Backend/ProjectSummaryPage";
import EditProjectSummary from "../components/Backend/ProjectSummary/EditProjectSummary";
import AdminProjectCatPage from "../pages/Backend/AdminProjectCatPage";
import EditProjectCat from "../components/Backend/ProjectCat/EditProjectCat";
import AddProjectCat from "../components/Backend/ProjectCat/AddProjectCat";
import AdminProjectPage from "../pages/Backend/AdminProjectPage";
import EditProject from "../components/Backend/Project/EditProject";
import AddProject from "../components/Backend/Project/AddProject";
import AdminCoursePage from "../pages/Backend/AdminCoursePage";
import EditCourse from "../components/Backend/CourseList/EditCourse";
import AddCourse from "../components/Backend/CourseList/AddCourse";
import AdminClientRivew from "../pages/Backend/AdminClientRivew";
import EditClientReview from "../components/Backend/ClientReview/EditClientReview";
import AddClientReview from "../components/Backend/ClientReview/AddClientReview";
import AdminAchivementPage from "../pages/Backend/AdminAchivementPage";
import AdminTeamPage from "../pages/Backend/AdminTeamPage";
import EditTeam from "../components/Backend/Team/EditTeam";
import AddTeam from "../components/Backend/Team/AddTeam";
import AdminLogoPage from "../pages/Backend/AdminLogoPage";
import EditLogo from "../components/Backend/Logo/EditLogo";

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

                <Route exact path="/logo">
                    <AdminLogoPage/>
                </Route>

                <Route exact path="/editLogo/:id" component={EditLogo}/>

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

                <Route exact path="/analytic">
                    <AnalyticPage/>
                </Route>

                <Route exact path="/editAnalytic/:id" component={EditAnalytic}/>

                <Route exact path="/adminAbout">
                    <AdminAboutPage/>
                </Route>

                <Route exact path="/editAdminAbout/:id" component={EditAbout}/>

                <Route exact path="/adminService">
                    <AdminServicePage/>
                </Route>

                <Route exact path="/addService">
                    <AddService/>
                </Route>

                <Route exact path="/editService/:id" component={EditService}/>


                <Route exact path="/adminCourseCat">
                    <AdminCourseCatPage/>
                </Route>

                <Route exact path="/editCourseCat/:id" component={EditCourseCat}/>

                <Route exact path="/addCourseCat">
                    <AddCourseCat/>
                </Route>


                <Route exact path="/projectSummary">
                    <ProjectSummaryPage/>
                </Route>

                <Route exact path="/editProjectSummary/:id" component={EditProjectSummary}/>

                <Route exact path="/adminProjectCat">
                    <AdminProjectCatPage/>
                </Route>

                <Route exact path="/editProjectCat/:id" component={EditProjectCat}/>

                <Route exact path="/adminProject">
                    <AdminProjectPage/>
                </Route>

                <Route exact path="/editProject/:id" component={EditProject}/>

                <Route exact path="/addProject">
                    <AddProject/>
                </Route>


                <Route exact path="/adminCourse">
                    <AdminCoursePage/>
                </Route>

                <Route exact path="/editCourse/:id" component={EditCourse}/>


                <Route exact path="/addCourse">
                    <AddCourse/>
                </Route>

                <Route exact path="/adminClientReview">
                    <AdminClientRivew/>
                </Route>

                <Route exact path="/editReview/:id" component={EditClientReview}/>

                <Route exact path="/addReview">
                    <AddClientReview/>
                </Route>


                <Route exact path="/adminAchivment">
                    <AdminAchivementPage/>
                </Route>

                <Route exact path="/adminTeam">
                    <AdminTeamPage/>
                </Route>


                <Route exact path="/editTeam/:id" component={EditTeam}/>

                <Route exact path="/addTeam">
                    <AddTeam/>
                </Route>




            </Switch>
        );
    }
}

export default AppRoute;
