import axios from 'axios';

const url = 'http://localhost:5000/food';
export const fetchPosts = () => axios.get(url);
export const createPost = (newFoodPost) => axios.post(url,newFoodPost);
export const likePost = (id) =>  axios.patch(`${url}/${id}/likePost`);
export const dislikePost = (id) =>  axios.patch(`${url}/${id}/dislikePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);