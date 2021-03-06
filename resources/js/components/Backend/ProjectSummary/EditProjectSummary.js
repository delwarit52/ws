import React, {Component,Fragment} from 'react';

class EditProjectSummary extends Component {
    render() {
        return (
            <Fragment>
                {this.props.match.params.id}
            </Fragment>
        );
    }
}

export default EditProjectSummary;
