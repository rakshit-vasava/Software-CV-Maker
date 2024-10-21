const initState = {
    hobbyBlocks: []
}

const hobbyRed = (state=initState, action) => {
    if(action.type==='ADD_HOBBY_BLOCK')
    {
        let newBlocks = [...state.hobbyBlocks, action.newBlock];
        return {
            hobbyBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_HOBBY_INFORMATION')
    {
        let newBlocks = state.hobbyBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            hobbyBlocks: newBlocks
        }
    }
    else if(action.type==='REMOVE_HOBBY_BLOCK')
    {
        let newBlocks = state.hobbyBlocks.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            hobbyBlocks: newBlocks
        }
    }

    return state;
}

export default hobbyRed;