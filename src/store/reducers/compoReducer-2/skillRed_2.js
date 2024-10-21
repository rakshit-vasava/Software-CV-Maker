const initState = {
    skillBlocks_2: []
}

const skillRed_2 = (state=initState, action) => {
	if(action.type==='ADD_SKILL_BLOCK_2')
	{
		let newSkillBlocks = [...state.skillBlocks_2, action.newBlock];
		
	  return {
			skillBlocks_2: newSkillBlocks
		}
	}
	else if(action.type==='UPDATE_SKILL_NAME_2')
	{
		let newSkillBlocks = state.skillBlocks_2;
		for(const[,value] of newSkillBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.skillName= action.skillName;
				break;
			}
		}

		return {
			skillBlocks_2: newSkillBlocks
		}
	}
	else if(action.type==='UPDATE_SKILL_LEVEL_2')
	{
		let newSkillBlocks = state.skillBlocks_2;
		for(const[,value] of newSkillBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.skillLevel= action.skillLevel;
				break;
			}
		}

		return {
			skillBlocks_2: newSkillBlocks
		}
	}
	else if(action.type==='REMOVE_SKILL_BLOCK_2')
	{
		let newSkillBlocks = state.skillBlocks_2.filter((value) => {
			return (
				value.id !== action.id
			)
		})

		return {
			skillBlocks_2: newSkillBlocks
		}
	}
    
    return state;
}

export default skillRed_2;