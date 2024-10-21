const initState = {
    projectBlocks: []
}

const projectRed = (state=initState, action) => {
    //console.log(state);

    if(action.type==='ADD_PROJECT_BLOCK')
    {
        let newBlocks = [...state.projectBlocks, action.newBlock];
        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_NAME')
    {
        let newBlocks = state.projectBlocks;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.projectName= action.projectName;
                break;
            }
        }

        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_DESCRIPTION')
    {
        let newBlocks = state.projectBlocks;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.description= action.description;
                break;
            }
        }

        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_SUPERVISOR')
    {
        let newBlocks = state.projectBlocks;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.supervisor= action.supervisor;
                break;
            }
        }

        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_START')
    {
        let newBlocks = state.projectBlocks;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.start= action.start;
                break;
            }
        }

        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_END')
    {
        let newBlocks = state.projectBlocks;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.end= action.end;
                break;
            }
        }

        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='UPDATE_PROJECT_TEAM_SIZE')
    {
        let newBlocks = state.projectBlocks;
        for(let[index,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.teamSize= action.teamSize;
                break;
            }
        }

        return {
            projectBlocks: newBlocks
        }
    }
    else if(action.type==='REMOVE_PROJECT_BLOCK')
    {
        let newBlocks = state.projectBlocks.filter((value,index) => {
            return (
                value.id!==action.id
            )
        })

        return {
            projectBlocks: newBlocks
        }
    }

    return state;
}

export default projectRed;