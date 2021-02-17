import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";
import AllPageTopBanner from "../Common/AllPageTopBanner";

class CoursePageComponent extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Course"}/>
            </Fragment>
        );
    }
}

export default CoursePageComponent;
