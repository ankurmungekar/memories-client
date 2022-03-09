import * as services from '../../services';

export const types = {
  FETCH_ALL: 'Fetch All Posts',
  CREATE_POST: 'Create New Post',
  UPDATE_POST: 'Update Current Post',
  DELETE_POST: 'Delete Current Post',
  LIKE_POST: 'Like Current Post'
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await services.getPosts();
    const action = { type: types.FETCH_ALL, payload: data }
    dispatch(action)
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await services.createPost(newPost);
    const action = { type: types.CREATE_POST, payload: data }
    dispatch(action)
  } catch (error) {
    console.log(error.message);
  }
}

export const updatePost = (newPost, id) => async (dispatch) => {
  try {
    const { data } = await services.updatePost(newPost, id);
    const action = { type: types.UPDATE_POST, payload: data }
    dispatch(action)
  } catch (error) {
    console.log(error.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await services.deletePost(id);
    const action = { type: types.DELETE_POST, payload: id }
    dispatch(action)
  } catch (error) {
    console.log(error.message);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await services.likePost(id);
    const action = { type: types.LIKE_POST, payload: data }
    dispatch(action)
  } catch (error) {
    console.log(error.message);
  }
}



