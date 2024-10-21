const initState = {
    hobbyBlocks_2: []
}

const hobbyRed_2 = (state=initState, action) => {
    if(action.type==='ADD_HOBBY_BLOCK_2')
    {
        let newBlocks = [...state.hobbyBlocks_2, action.newBlock];
        return {
            hobbyBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_HOBBY_INFORMATION_2')
    {
        let newBlocks = state.hobbyBlocks_2;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            hobbyBlocks_2: newBlocks
        }
    }
    else if(action.type==='REMOVE_HOBBY_BLOCK_2')
    {
        let newBlocks = state.hobbyBlocks_2.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            hobbyBlocks_2: newBlocks
        }
    }

    return state;
}

export default hobbyRed_2;