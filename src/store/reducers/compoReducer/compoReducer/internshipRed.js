const initState = {
    internshipBlocks: []
}

const internshipRed = (state=initState, action) => {
    //console.log(state);

    if(action.type==='ADD_INTERNSHIP_BLOCK')
    {
        let newBlocks = [...state.internshipBlocks, action.newBlock];
        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_ORGANIZATION_NAME')
    {
        let newBlocks = state.internshipBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.organizationName= action.organizationName;
                break;
            }
        }

        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_DESCRIPTION')
    {
        let newBlocks = state.internshipBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.description= action.description;
                break;
            }
        }

        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_SUPERVISOR')
    {
        let newBlocks = state.internshipBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.supervisor= action.supervisor;
                break;
            }
        }

        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_START')
    {
        let newBlocks = state.internshipBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.start= action.start;
                break;
            }
        }

        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_END')
    {
        let newBlocks = state.internshipBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.end= action.end;
                break;
            }
        }

        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_INTERNSHIP_TEAM_SIZE')
    {
        let newBlocks = state.internshipBlocks;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.teamSize= action.teamSize;
                break;
            }
        }

        return {
            internshipBlocks: newBlocks
        }
    }
    else if(action.type==='REMOVE_INTERNSHIP_BLOCK')
    {
        let newBlocks = state.internshipBlocks.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            internshipBlocks: newBlocks
        }
    }

    return state;
}

export default internshipRed;