const initState = {
    awardBlocks_2: []
}

const awardRed_2 = (state=initState, action) => {
  if(action.type==='ADD_AWARD_BLOCK_2')
  {
		let newBlocks = [...state.awardBlocks_2, action.newBlock];
		return {
			awardBlocks_2: newBlocks
		}
	}
	else if(action.type==='UPDATE_AWARD_YEAR_2')
	{
			let newBlocks = state.awardBlocks_2;
			for(let[,value] of newBlocks.entries())
			{
					if(value.id===action.id)
					{
							value.year= action.year;
							break;
					}
			}

			return {
					awardBlocks_2: newBlocks
			}
	}
	else if(action.type==='UPDATE_AWARD_INFORMATION_2')
	{
		let newBlocks = state.awardBlocks_2;
		for(let[index,value] of newBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.information= action.information;
				break;
			}
		}

		return {
				awardBlocks_2: newBlocks
		}
	}
	else if(action.type==='REMOVE_AWARD_BLOCK_2')
	{
		let newBlocks = state.awardBlocks_2.filter((value,index) => {
			return (
					value.id!==action.id
			)
		})

		return {
			awardBlocks_2: newBlocks
		}
	}

  return state;
	
}

export default awardRed_2;