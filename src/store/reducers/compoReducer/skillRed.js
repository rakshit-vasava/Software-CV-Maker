const initState = {
    areaOfInterest: '',
    proLanguages: '',
    toolsAndTech: '',
    techElectives: ''
}

const skillRed = (state=initState, action) => {
    if(action.type==='UPDATE_AOI')
    {
        return {
            ...state,
            areaOfInterest: action.aoi
        }
    }
    else if(action.type==='UPDATE_PL')
    {
        return {
            ...state,
            proLanguages: action.pl
        }
    }
    else if(action.type==='UPDATE_TT')
    {
        return {
            ...state,
            toolsAndTech: action.tt
        }
    }
    else if(action.type==='UPDATE_TE')
    {
        return {
            ...state,
            techElectives: action.te
        }
    }

    return state;
}

export default skillRed;