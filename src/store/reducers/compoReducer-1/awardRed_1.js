const initState = {
    awardBlocks_1: []
}

const awardRed_1 = (state=initState, action) => {
    if(action.type==='ADD_AWARD_BLOCK_1')
    {
        let newBlocks = [...state.awardBlocks_1, action.newBlock];
        return {
            awardBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_AWARD_INFORMATION_1')
    {
        let newBlocks = state.awardBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.information= action.information;
                break;
            }
        }

        return {
            awardBlocks_1: newBlocks
        }
    }
    else if(action.type==='REMOVE_AWARD_BLOCK_1')
    {
        let newBlocks = state.awardBlocks_1.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            awardBlocks_1: newBlocks
        }
    }

    return state;
}

export default awardRed_1;