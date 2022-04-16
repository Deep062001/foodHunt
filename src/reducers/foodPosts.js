export default (foodPosts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
          return [...foodPosts,action.payload];
      default:
        return foodPosts;
    }
};