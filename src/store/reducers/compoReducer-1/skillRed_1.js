const initState = {
    areaOfInterest_1: '',
    proLanguages_1: '',
    toolsAndTech_1: '',
    techElectives_1: ''
}

const skillRed_1 = (state=initState, action) => {
    if(action.type==='UPDATE_AOI_1')
    {
        return {
            ...state,
            areaOfInterest_1: action.aoi
        }
    }
    else if(action.type==='UPDATE_PL_1')
    {
        return {
            ...state,
            proLanguages_1: action.pl
        }
    }
    else if(action.type==='UPDATE_TT_1')
    {
        return {
            ...state,
            toolsAndTech_1: action.tt
        }
    }
    else if(action.type==='UPDATE_TE_1')
    {
        return {
            ...state,
            techElectives_1: action.te
        }
    }

    return state;
}

export default skillRed_1;