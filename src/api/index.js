import axios from 'axios';

const url = 'http://localhost:5000/food';
const fetchPosts =() => axios.get(url);