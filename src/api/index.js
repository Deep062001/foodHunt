import axios from 'axios';

const url = 'http://localhost:5000/food';
export const fetchPosts = () => axios.get(url);