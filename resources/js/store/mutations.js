let mutations = {
    CREATE_POST(state, post) {
        state.posts.unshift(post)
    },
    FETCH_POSTS(state, posts) {
        return state.posts = posts
    },
    DELETE_POST(state, post) {
        let index = state.posts.findIndex(item => item.id === post.id)
        state.posts.splice(index, 1)
    },

    addToCart(state, item) {
        

        state.cart.push(item);
        
        //console.log("item before pushing:" , item);
        //console.log("after pushing into cart:",state.cart);

        
    }

    /* ADD_TO_CART(state, { product, quantity})  {
        state.cart.push({
            product,
            quantity
        })
    } */
}
export default mutations