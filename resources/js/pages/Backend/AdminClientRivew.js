import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import ClientReview from "../../components/Backend/ClientReview/ClientReview";

class AdminClientRivew extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <ClientReview/>
            </Fragment>
        );
    }
}

export default AdminClientRivew;
