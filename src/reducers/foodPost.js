export default (foodPosts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return foodPosts;
      
      default:
        return foodPosts;
    }
  };