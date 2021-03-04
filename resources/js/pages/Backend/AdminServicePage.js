import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Service from "../../components/Backend/Service/Service";

class AdminServicePage extends Component {
    render() {
        return (
            <Fragment>
               <TopMenu/>
               <Service/>
            </Fragment>
        );
    }
}

export default AdminServicePage;
