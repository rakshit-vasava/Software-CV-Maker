const initState = {
    awardBlocks: []
}

const awardRed = (state=initState, action) => {
    if(action.type==='ADD_AWARD_BLOCK')
    {
        let newBlocks = [...state.awardBlocks, action.newBlock];
        return {
            awardBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_AWARD_INFORMATION')
    {
        let newBlocks = state.awardBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            awardBlocks: newBlocks
        }
    }
    else if(action.type==='REMOVE_AWARD_BLOCK')
    {
        let newBlocks = state.awardBlocks.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            awardBlocks: newBlocks
        }
    }

    return state;
}

export default awardRed;