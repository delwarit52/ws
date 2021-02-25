import React, {Component,Fragment} from 'react';
import TopMenu from "../../components/Backend/TopMenu/TopMenu";
import Slider from "../../components/Backend/Slider/Slider";

class SliderPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Slider/>
            </Fragment>
        );
    }
}

export default SliderPage;
