import * as api from '../api/index';

export const getFoodPost =() => async(dispatch) =>{
    try {
        const {data} = api.fetchPosts();
        dispatch({type :'FETCH_ALL', payload : data})
    } catch (error) {
        console.log(error.message);
    }
}