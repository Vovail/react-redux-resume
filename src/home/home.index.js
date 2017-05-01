import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';

import Skills from '../shared/skills/skill';

import './home.css';

class Home extends Component {

    static propTypes={
      data: PropTypes.shape({
          firstname:PropTypes.string,
          lastname:PropTypes.string,
          fullname:PropTypes.string,
          generalInfo:PropTypes.array,
          skills:PropTypes.array,
          showSkills:PropTypes.oneOfType([
              PropTypes.bool,
              PropTypes.string
          ]),
          showSkillsBtnLabel:PropTypes.string
      })
    };

    componentWillMount() {
        this.props.onHomeMount();
    }

    render() {
        const {data, onShowSkills} = this.props;
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
                <Button onClick={onShowSkills}>{data.showSkillsBtnLabel}</Button>
                {data.showSkills && <Skills skills={data.skills}/>}
            </div>
        )
    }
}

export default connect(
    state => ({
        data: state.home
    }),
    dispatch => ({
        onHomeMount: () => {
            dispatch({type: 'HOME_DATA_REQUEST'})
        },
        onShowSkills: ()=>{
            dispatch({type: 'SHOW_SKILLS'})
        }
    })
)(Home);