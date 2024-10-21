const initState = {
    projectBlocks_1: []
}

const projectRed_1 = (state=initState, action) => {
    //console.log(state);

    if(action.type==='ADD_PROJECT_BLOCK_1')
    {
        let newBlocks = [...state.projectBlocks_1, action.newBlock];
        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_NAME_1')
    {
        let newBlocks = state.projectBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.projectName= action.projectName;
                break;
            }
        }

        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_DESCRIPTION_1')
    {
        let newBlocks = state.projectBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.description= action.description;
                break;
            }
        }

        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_SUPERVISOR_1')
    {
        let newBlocks = state.projectBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.supervisor= action.supervisor;
                break;
            }
        }

        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_START_1')
    {
        let newBlocks = state.projectBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.start= action.start;
                break;
            }
        }

        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_END_1')
    {
        let newBlocks = state.projectBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.end= action.end;
                break;
            }
        }

        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_TEAM_SIZE_1')
    {
        let newBlocks = state.projectBlocks_1;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.teamSize= action.teamSize;
                break;
            }
        }

        return {
            projectBlocks_1: newBlocks
        }
    }
    else if(action.type==='REMOVE_PROJECT_BLOCK_1')
    {
        let newBlocks = state.projectBlocks_1.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            projectBlocks_1: newBlocks
        }
    }

    return state;
}

export default projectRed_1;