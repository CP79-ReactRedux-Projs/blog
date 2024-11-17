import JSONPlaceholder from '../api/JSONPlaceholder';
import _ from 'lodash';

// Action creator
export const fetchPosts = () => {
	return async (dispatch) => {
		const { data } = await JSONPlaceholder.get('/posts');

		dispatch({
			type: 'FETCH_POSTS',
			payload: data
		});
	};
};
export const fetchUser = (id) => {
	return async (dispatch) => {
		const { data } = await JSONPlaceholder.get(`/users/${id}`);

		dispatch({
			type: 'FETCH_USER',
			payload: data
		});
	};
};
export const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		await dispatch(fetchPosts());
		_.uniqBy(getState().posts, 'userId').forEach(post => dispatch(fetchUser(post.userId)));
		/**
		_.chain(getState().posts)
			.uniqBy('userId')
				.forEach(post => dispatch(fetchUser(post.userId)))
					.value();
		**/
	};
};
