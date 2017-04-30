import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';
import './resume.css';
import Skills from '../shared/skills/skill';

class Resume extends Component {

    static propTypes = {
        skills: PropTypes.arrayOf(PropTypes.string),
        resume: PropTypes.shape({
            work: PropTypes.arrayOf(PropTypes.shape({
                employer: PropTypes.string,
                position: PropTypes.string,
                period: PropTypes.string,
                subordinates: PropTypes.string,
                duties: PropTypes.arrayOf(PropTypes.string),
            })),
            otherInfo: PropTypes.arrayOf(PropTypes.shape({
                header: PropTypes.string,
                value: PropTypes.string
            })),
            education: PropTypes.shape({
                it: PropTypes.shape({
                    school: PropTypes.string,
                    speciality: PropTypes.string,
                    dates: PropTypes.string
                }),
                main: PropTypes.shape({
                    school: PropTypes.string,
                    speciality: PropTypes.string,
                    dates: PropTypes.string
                }),
                training: PropTypes.arrayOf(PropTypes.string)
            })
        })
    };

    componentWillMount() {
        this.props.onResumeMount();
    }

    render() {
        return (
            <div className="resume-container">
                <Panel collapsible header="Skills & Personal qualities">
                    <Skills skills={this.props.skills}/>
                </Panel>
                <Panel collapsible header="Work Experience">
                    <ul className="skills">
                        {this.props.resume.work.map((item, index) => {
                                return (<li className="list-group-item resume-list" key={index}>
                                    <h2>{item.employer}</h2>
                                    <h3>{item.position}</h3>
                                    <h4>{item.period}</h4>
                                    <p>{item.subordinates}</p>
                                    <ul>
                                        {item.duties.map((duty, index) => (
                                            <li key={index}>{duty}</li>
                                        ))}
                                    </ul>
                                </li>)
                            }
                        )}
                    </ul>
                </Panel>
                <Panel collapsible header="Educations">
                    <ul className="education">
                        <li className="list-group-item resume-list">
                            <h3>{this.props.resume.education.it.school}</h3>
                            <h4>{this.props.resume.education.it.speciality}</h4>
                            <p>{this.props.resume.education.it.dates}</p>
                        </li>
                        <li className="list-group-item resume-list">
                            <h3>{this.props.resume.education.main.school}</h3>
                            <h4>{this.props.resume.education.main.speciality}</h4>
                            <p>{this.props.resume.education.main.dates}</p>
                        </li>
                        <li className="list-group-item resume-list">
                            <h3>Trainings:</h3>
                            <ul>
                                {this.props.resume.education.training.map((training, index) => (
                                    <li key={index}>{training}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </Panel>
                <Panel collapsible header="Other info">
                    <ul className="other-info">
                        <li className="list-group-item resume-list">
                            <span>{this.props.resume.otherInfo[0].header}: </span>
                            <span>{this.props.resume.otherInfo[0].value}</span>
                        </li>
                    </ul>
                </Panel>
            </div>
        )
    }
}

export default connect(
    state => ({
        skills: state.home.skills,
        resume: state.resume
    }),
    dispatch => ({
        onResumeMount: () => {
            dispatch({type: 'RESUME_DATA_REQUEST'})
        }
    })
)(Resume);