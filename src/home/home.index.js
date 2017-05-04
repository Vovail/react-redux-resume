import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import Skills from '../shared/skills/skill';

import {homeDispatch} from './home.reducer';
import './home.css';

class Home extends Component {

    static propTypes = {
        data: PropTypes.shape({
            firstname: PropTypes.string,
            lastname: PropTypes.string,
            fullname: PropTypes.string,
            generalInfo: PropTypes.array,
            skills: PropTypes.array,
            showSkills: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string
            ]),
            showSkillsBtnLabel: PropTypes.string
        })
    };

    componentWillMount() {
        this.props.onHomeMount();
    }

    showSkills() {
        let label = this.props.data.showSkillsBtnLabel.includes("Show") ?
            "Hide skills & personal qualities" :
            "Show skills & personal qualities";
        this.props.onShowSkills(label);
    }

    render() {
        const {data} = this.props;
        return (
            <div className="home-container">
                <div className="personal-info">
                    <img className="photo" src={data.photoSrc} alt="photo of Volodymyr Ilemskyi"/>
                    <h2 className="data-info fullname">{data.fullname}</h2>
                    <ul className="data-info list-group">
                        {data.generalInfo.map((item, index) => {
                                return (<li className="list-group-item" key={index}>
                                    <span className="data-header">{item.header}</span>
                                    <span className="data-value">{item.value}</span>
                                </li>)
                            }
                        )}
                    </ul>
                </div>
                <Button className="btn-skills" onClick={this.showSkills.bind(this)}>{data.showSkillsBtnLabel}</Button>
                {data.showSkills && <Skills skills={data.skills}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.home
});

export default connect(
    mapStateToProps,
    homeDispatch
)(Home);