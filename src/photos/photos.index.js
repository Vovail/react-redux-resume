import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Carousel } from 'react-bootstrap';

class Photos extends Component {

    static propTypes={
        data: PropTypes.array
    };

    componentWillMount() {
        this.props.onPhotosMount();
    }

    render() {
        return (
            <div className="photos-container">
                <Carousel>
                    {this.props.data.map((picture)=>{
                        return (
                            <Carousel.Item>
                                <img width={200} height={200} alt="200x200" src={picture}/>
                                <Carousel.Caption>
                                    <p>"Photos" page was created only for demonstration routing and sagas</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default connect(
    state => ({
        data: state.photos
    }),
    dispatch => ({
        onPhotosMount: () => {
            dispatch({type: 'PHOTOS_DATA_REQUEST'})
        }
    })
)(Photos);