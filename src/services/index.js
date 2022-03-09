import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const getPosts = async () => {
  return await axios.get(`${baseUrl}/posts`);
}

export const createPost = async (newPost) => {
  return await axios.post(`${baseUrl}/posts`, newPost);
}

export const updatePost = async (newPost, id) => {
  return await axios.patch(`${baseUrl}/posts/${id}`, newPost);
}

export const deletePost = async (id) => {
  return await axios.delete(`${baseUrl}/posts/${id}`);
}

export const likePost = async (id) => {
  return await axios.patch(`${baseUrl}/posts/${id}/likePost`);
}