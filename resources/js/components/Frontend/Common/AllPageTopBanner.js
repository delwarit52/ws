import React, {Component,Fragment} from 'react';
import {Container, Image, Row} from "react-bootstrap";
import  topImg from '../../../../images/web.png';

class AllPageTopBanner extends Component {
    render() {
        return (
            <Fragment>
                    <div className={"pageTopBanner"}>
                        <div className={"pageTopBannerImg"}>
                            <Image src={topImg}></Image>
                        </div>
                        <div className={"pageTopBannerTitle text-center"}>
                            <h2>{this.props.name}</h2>
                        </div>
                    </div>

            </Fragment>
        );
    }
}

export default AllPageTopBanner;
