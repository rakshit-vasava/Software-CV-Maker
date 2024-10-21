const initState = {
        name_2: 'Name', 
        currentPosition_2: '',
        email_2: '', 
        dob_2: '', 
        address_2: '',
        phoneNo_2: '',
        link_2: '',
}

const personRed_2 = (state = initState, action) => {
    //console.log(state)
    if(action.type==='UPDATE_NAME_2') {
        return {
            ...state,
            name_2: action.name
        }
    }   
    else if(action.type==='UPDATE_CUR_POS_2') {
        return {
            ...state,
            currentPosition_2: action.curPos
        }
    }
    else if(action.type==='UPDATE_EMAIL_2') {
        return {
            ...state,
            email_2: action.email
        }
    }
    else if(action.type==='UPDATE_DOB_2') {
        return {
            ...state,
            dob_2: action.dob
        }
    }
    else if(action.type==='UPDATE_ADDRESS_2') {
        return {
            ...state,
            address_2: action.address
        }
    }
    else if(action.type==='UPDATE_PHONE_2') {
        return {
            ...state,
            phoneNo_2: action.phoneNo
        }
    }
    else if(action.type==='UPDATE_LINK_2') {
        return {
            ...state,
            link_2: action.link
        }
    }

    return state;
}

export default personRed_2