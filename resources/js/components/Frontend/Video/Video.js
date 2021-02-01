import React, {Component,Fragment} from 'react';
import 'video-react/dist/video-react.css'
import { Player } from 'video-react';

class Video extends Component {
    render() {
        return (
            <Fragment>
                <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
            </Fragment>
        );
    }
}

export default Video;
