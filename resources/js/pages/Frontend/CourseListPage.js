import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";
import CourseList from "../../components/Frontend/CoursePageComponent/CourseList";

class CourseListPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Graphics Course List"}/>
                <CourseList id={this.props.match.params.id}/>
            </Fragment>
        );
    }
}

export default CourseListPage;
