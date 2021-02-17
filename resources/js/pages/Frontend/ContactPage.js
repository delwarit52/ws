import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Frontend/TopMenu/TopMenu";
import ContactPageComponent from "../../components/ContactPageComponent/ContactPageComponent";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
               <ContactPageComponent/>
            </Fragment>
        );
    }
}

export default ContactPage;
