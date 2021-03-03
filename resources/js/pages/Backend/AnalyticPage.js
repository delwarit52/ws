import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Analytic from "../../components/Backend/Analytic/Analytic";

class AnalyticPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Analytic/>
            </Fragment>
        );
    }
}

export default AnalyticPage;
