import React, {Component,Fragment} from 'react';

class DeleteSlider extends Component {
    render() {
        return (
            <Fragment>
                {this.props.match.params.id}
                <h1>hello</h1>
            </Fragment>
        );
    }
}

export default DeleteSlider;
