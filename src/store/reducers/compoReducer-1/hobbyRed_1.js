const initState = {
    hobbyBlocks_1: []
}

const hobbyRed_1 = (state=initState, action) => {
    if(action.type==='ADD_HOBBY_BLOCK_1')
    {
        let newBlocks = [...state.hobbyBlocks_1, action.newBlock];
        return {
            hobbyBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_HOBBY_INFORMATION_1')
    {
        let newBlocks = state.hobbyBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            hobbyBlocks_1: newBlocks
        }
    }
    else if(action.type==='REMOVE_HOBBY_BLOCK_1')
    {
        let newBlocks = state.hobbyBlocks_1.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            hobbyBlocks_1: newBlocks
        }
    }

    return state;
}

export default hobbyRed_1;