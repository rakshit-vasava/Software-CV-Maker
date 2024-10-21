const initState = {
    degreeBlocks_2: []
}

const educationRed_2 = (state=initState, action) => {
	if(action.type==='ADD_EDUCATION_BLOCK_2')
	{
			let newDegreeBlocks = [...state.degreeBlocks_2, action.newBlock];
			return {
					degreeBlocks_2: newDegreeBlocks
			}
	}
	else if(action.type==='UPDATE_EDUCATION_YEAR_2')
	{
		let newDegreeBlocks = state.degreeBlocks_2;
		for(const[,value] of newDegreeBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.year= action.year;
				break;
			}
		}

		return {
			degreeBlocks_2: newDegreeBlocks
		}
	}
	else if(action.type==='UPDATE_EDUCATION_DEGREE_NAME_2')
	{
		let newDegreeBlocks = state.degreeBlocks_2;
		for(let[,value] of newDegreeBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.degreeName= action.degreeName;
				break;
			}
		}

		return {
				degreeBlocks_2: newDegreeBlocks
		}
	}
	else if(action.type==='UPDATE_EDUCATION_INSTITUTE_NAME_2')
	{
		let newDegreeBlocks = state.degreeBlocks_2;
		for(const[index,value] of newDegreeBlocks.entries())
		{
			if(value.id===action.id)
			{
				value.instituteName= action.instituteName;
				break;
			}
		}

		return {
				degreeBlocks_2: newDegreeBlocks
		}
	}
	else if(action.type==='REMOVE_EDUCATION_BLOCK_2')
	{
		let newDegreeBlocks = state.degreeBlocks_2.filter((value,index) => {
			return (
					value.id!==action.id
			)
		})

		return {
				degreeBlocks_2: newDegreeBlocks
		}
	}

	return state;
}

export default educationRed_2;