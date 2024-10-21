const initState = {
    description_2: ''
}

const descriptionRed_2 = (state = initState, action) => {
    //console.log(state)
    if(action.type==='UPDATE_DESCRIPTION_2') {
        return {
            ...state,
            description_2: action.description
        }
    }   

return state;
}

export default descriptionRed_2