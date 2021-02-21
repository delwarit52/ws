import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Info from "../../components/Backend/Info/Info";

class InfoPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Info/>
            </Fragment>
        );
    }
}

export default InfoPage;
