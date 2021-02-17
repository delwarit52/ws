import React, {Component,Fragment} from 'react';
import TopMenu from "../Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../Frontend/Common/AllPageTopBanner";

class ContactPageComponent extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Contact"}/>
            </Fragment>
        );
    }
}

export default ContactPageComponent;
