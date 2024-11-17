const usersReducer = (state = [], action) => {
	let ret;

	switch (action.type)
	{
		case 'FETCH_USER':
			ret = [...state, action.payload];
		break;

		default:
			ret = state;
		break;
	}

	return ret;
}

export default usersReducer;
