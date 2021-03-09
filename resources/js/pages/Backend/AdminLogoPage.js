import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Logo from "../../components/Backend/Logo/Logo";

class AdminLogoPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Logo/>
            </Fragment>
        );
    }
}

export default AdminLogoPage;
