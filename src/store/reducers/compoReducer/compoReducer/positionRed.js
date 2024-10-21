const initState = {
    positionBlocks: []
}

const positionRed = (state=initState, action) => {
    if(action.type==='ADD_POSITION_BLOCK')
    {
        let newBlocks = [...state.positionBlocks, action.newBlock];
        return {
            positionBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_POSITION_INFORMATION')
    {
        let newBlocks = state.positionBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            positionBlocks: newBlocks
        }
    }
    else if(action.type==='REMOVE_POSITION_BLOCK')
    {
        let newBlocks = state.positionBlocks.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            positionBlocks: newBlocks
        }
    }

    return state;
}

export default positionRed;