import React, {Component,Fragment} from 'react';
import {Carousel} from "react-bootstrap";
import slider1 from '../../../../images/banner.jpg'
import slider2 from '../../../../images/slider2.jpg'
import Axios from "axios";

class HomeSlider extends Component {
    constructor(props) {
        super(props);
        this.state={
            datalist:[],
        }

    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/home_slider')
            .then(function (response) {
                cthis.setState({datalist:response.data});

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }



    render() {

        let im='storage/uploads/slider/';
        return (
            <Fragment>
                <Carousel>
                    {

                        this.state.datalist.map((d)=>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={im+d.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    {d.title}
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    }

                </Carousel>
            </Fragment>
        );
    }
}

export default HomeSlider;
