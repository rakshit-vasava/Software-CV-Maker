const initState = {
    internshipBlocks_1: []
}

const internshipRed_1 = (state=initState, action) => {
    //console.log(state);

    if(action.type==='ADD_INTERNSHIP_BLOCK_1')
    {
        let newBlocks = [...state.internshipBlocks_1, action.newBlock];
        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_ORGANIZATION_NAME_1')
    {
        let newBlocks = state.internshipBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.organizationName= action.organizationName;
                break;
            }
        }

        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_DESCRIPTION_1')
    {
        let newBlocks = state.internshipBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.description= action.description;
                break;
            }
        }

        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_SUPERVISOR_1')
    {
        let newBlocks = state.internshipBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.supervisor= action.supervisor;
                break;
            }
        }

        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_START_1')
    {
        let newBlocks = state.internshipBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.start= action.start;
                break;
            }
        }

        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_END_1')
    {
        let newBlocks = state.internshipBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.end= action.end;
                break;
            }
        }

        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_TEAM_SIZE_1')
    {
        let newBlocks = state.internshipBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.teamSize= action.teamSize;
                break;
            }
        }

        return {
            internshipBlocks_1: newBlocks
        }
    }
    else if(action.type==='REMOVE_INTERNSHIP_BLOCK_1')
    {
        let newBlocks = state.internshipBlocks_1.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            internshipBlocks_1: newBlocks
        }
    }

    return state;
}

export default internshipRed_1;