import * as api from '../api/index';

export const getFoodPost =() => async(dispatch) =>{
    try {
        const {data} = api.fetchPosts();
        dispatch({type :'FETCH_ALL', payload : data})
    } catch (error) {
        console.log(error.message);
    }
}
export const createFoodPost = (foodPost) =>async(dispatch) => {
    try {
        const {data} = api.createPost(foodPost);
        dispatch({type :'CREATE', payload : data})
        
    } catch (error) {
        console.log(error.message);
    }
}