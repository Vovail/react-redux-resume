import React, {PropTypes} from 'react';

const Skills = ({skills}) => {
    return (
            <ul className="skills">
                {skills.map((item, index) => {
                        return (<li className="list-group-item" key={index}>
                            {item}
                        </li>)
                    }
                )}
            </ul>
    )
};

Skills.propTypes = {
    skills: PropTypes.array
};

export default Skills;