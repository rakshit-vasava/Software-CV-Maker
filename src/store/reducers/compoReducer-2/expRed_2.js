const initState = {
    expBlocks_2: []
}

const expRed_2 = (state=initState, action) => {
    //console.log(state);

    if(action.type==='ADD_EXP_BLOCK_2')
    {
        let newBlocks = [...state.expBlocks_2, action.newBlock];
        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_EXP_POSITION_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.positionName= action.positionName;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_EXP_ORGANIZATION_NAME_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.organizationName= action.organizationName;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_EXP_START_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.start= action.start;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_EXP_END_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.id)
            {
                value.end= action.end;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='ADD_EXP_DESC_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.expID)
            {
                let newDescBlocks = [...value.descBlocks, action.newDescBlock];
                value.descBlocks = newDescBlocks;
                break;
            }
        }
         
        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_EXP_DESCRIPTION_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.expID)
            {
                let newDescBlocks = value.descBlocks;

                for(let[ind,val] of newDescBlocks.entries())
                {
                    if(val.descId === action.descID)
                    {
                        val.descInfo = action.descInfo;
                        break;
                    }
                }

                value.descBlocks = newDescBlocks;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='REMOVE_EXP_DESC_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2;
        
        for(let [,value] of newBlocks.entries())
        {
            if(value.id===action.expID)
            {
                let newDescBlocks = value.descBlocks.filter((val) => {
                    return val.descId!==action.descID
                })
                value.descBlocks = newDescBlocks;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='ADD_EXP_KEY_ACHV_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.expID)
            {
                let newKeyAchvBlocks = [...value.keyAchvBlocks, action.newKeyAchvBlock];
                value.keyAchvBlocks = newKeyAchvBlocks;
                break;
            }
        }
         
        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='UPDATE_EXP_KEY_ACHV_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2;
        for(let[,value] of newBlocks.entries())
        {
            if(value.id===action.expID)
            {
                let newKeyAchvBlocks = value.keyAchvBlocks;

                for(let[,val] of newKeyAchvBlocks.entries())
                {
                    if(val.keyAchvId === action.keyAchvID)
                    {
                        val.keyAchvInfo = action.keyAchvInfo;
                        break;
                    }
                }

                value.keyAchvBlocks = newKeyAchvBlocks;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='REMOVE_EXP_KEY_ACHV_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2;
        
        for(let [,value] of newBlocks.entries())
        {
            if(value.id===action.expID)
            {
                let newKeyAchvBlocks = value.keyAchvBlocks.filter((val) => {
                    return val.keyAchvId !== action.keyAchvID
                })
                value.keyAchvBlocks = newKeyAchvBlocks;
                break;
            }
        }

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='REMOVE_EXP_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2.filter((value) => {
            return value.id !== action.id;
        })

        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='ADD_DUMMY_BLOCK_2')
    {
        let newBlocks = [...state.expBlocks_2, action.dummyBlock];
        return {
            expBlocks_2: newBlocks
        }
    }
    else if(action.type==='REMOVE_DUMMY_BLOCK_2')
    {
        let newBlocks = state.expBlocks_2.filter((value) => {
            return(
                value.id!==action.id
            )
        })

        return {
            expBlocks_2: newBlocks
        }
    }

    return state;
}

export default expRed_2;