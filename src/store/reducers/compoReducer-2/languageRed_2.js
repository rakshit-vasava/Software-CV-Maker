const initState = {
    languageBlocks_2: []
}

const languageRed_2 = (state=initState, action) => {
	if(action.type==='ADD_LANGUAGE_BLOCK_2')
	{
		let newLanguageBlocks = [...state.languageBlocks_2, action.newBlock];
		
	  return {
			languageBlocks_2: newLanguageBlocks
		}
	}
	else if(action.type==='UPDATE_LANGUAGE_NAME_2')
	{
		let newLanguageBlocks = state.languageBlocks_2;
		for(const[,value] of newLanguageBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.languageName= action.languageName;
				break;
			}
		}

		return {
			languageBlocks_2: newLanguageBlocks
		}
	}
	else if(action.type==='UPDATE_LANGUAGE_LEVEL_2')
	{
		let newLanguageBlocks = state.languageBlocks_2;
		for(const[,value] of newLanguageBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.languageLevel= action.languageLevel;
				break;
			}
		}

		return {
			languageBlocks_2: newLanguageBlocks
		}
	}
	else if(action.type==='REMOVE_LANGUAGE_BLOCK_2')
	{
		let newLanguageBlocks = state.languageBlocks_2.filter((value) => {
			return (
				value.id !== action.id
			)
		})

		return {
			languageBlocks_2: newLanguageBlocks
		}
	}
    
    return state;
}

export default languageRed_2;