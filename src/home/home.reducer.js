const initialState = {
    firstname:'',
    lastname:'',
    fullname:'',
    generalInfo:[],
    skills:[],
    showSkills:'',
    showSkillsBtnLabel:''
};

function home(state = initialState, action) {
    switch (action.type) {
        case 'MOUNT_HOME': {
            return {...state, ...action.payload};
        }
        case 'HOME_DATA_SUCCESS': {
            console.log(action.payload);
            return {...state, ...action.payload};
        }
        case 'HOME_DATA_ERROR': {
            return {...action.payload};
        }
        case 'SHOW_SKILLS':{
            let label = state.showSkillsBtnLabel.includes("Show")?
                "Hide skills & personal qualities":
                "Show skills & personal qualities";
            return {...state, showSkills: !state.showSkills, showSkillsBtnLabel: label};
        }
        default: return state;
    }
}

export default home;