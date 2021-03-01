import React, {Component,Fragment} from 'react';
import TopMenu from "../TopMenu/TopMenu";

class EditSlider extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                {this.props.match.params.id}
                <h1>hello</h1>
            </Fragment>
        );
    }
}

export default EditSlider;
