import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'react-bootstrap';
import {photosDispatch} from './photos.reducer';

class Photos extends Component {

    static propTypes = {
        data: PropTypes.array
    };

    componentWillMount() {
        this.props.onPhotosMount();
    }

    render() {
        return (
            <div className="photos-container">
                <Carousel>
                    {this.props.data.map((picture, index) => {
                        return (
                            <Carousel.Item key={index}>
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

const mapStateToProps = (state) => ({
    data: state.photos
});

export default connect(
    mapStateToProps,
    photosDispatch
)(Photos);