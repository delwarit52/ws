import React, {Component,Fragment} from 'react';
import ContactPageComponent from "../../components/Frontend/ContactPageComponent/ContactPageComponent";
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import AllPageTopBanner from "../../components/Frontend/Common/AllPageTopBanner";


class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <AllPageTopBanner name={"Contact"}/>
                <ContactPageComponent/>
            </Fragment>
        );
    }
}

export default ContactPage;
