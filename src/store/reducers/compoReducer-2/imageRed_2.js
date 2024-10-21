const initState = {
    img_2: null
}

const imageRed_2 = (state=initState, action) => {
    
    if(action.type==='UPLOAD_IMAGE_2')
    {
        return {
            ...state,
            img_2: action.img
        }
    }
    else if(action.type==='REMOVE_IMAGE_2')
    {
        return {
            ...state,
            img_2: null
        }
    }

    return state;
}

export default imageRed_2;