import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import About from "../../components/Backend/About/About";

class AdminAboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <About/>
            </Fragment>
        );
    }
}

export default AdminAboutPage;
