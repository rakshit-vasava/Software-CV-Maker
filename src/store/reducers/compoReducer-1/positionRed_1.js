const initState = {
    positionBlocks_1: []
}

const positionRed_1 = (state=initState, action) => {
    if(action.type==='ADD_POSITION_BLOCK_1')
    {
        let newBlocks = [...state.positionBlocks_1, action.newBlock];
        return {
            positionBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_POSITION_INFORMATION_1')
    {
        let newBlocks = state.positionBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            positionBlocks_1: newBlocks
        }
    }
    else if(action.type==='REMOVE_POSITION_BLOCK_1')
    {
        let newBlocks = state.positionBlocks_1.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            positionBlocks_1: newBlocks
        }
    }

    return state;
}

export default positionRed_1;