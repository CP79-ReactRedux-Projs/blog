const postsReducer = (state = [], action) => {
	let ret;

	switch (action.type)
	{
		case 'FETCH_POSTS':
			ret = action.payload;
		break;

		default:
			ret = state;
		break;
	}

	return ret;
}

export default postsReducer;
