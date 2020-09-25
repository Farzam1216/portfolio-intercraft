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

    addToCart(state, {product,quantity,price}) {
        state.cart.push({product,quantity,price});

        
    }

    /* ADD_TO_CART(state, { product, quantity})  {
        state.cart.push({
            product,
            quantity
        })
    } */
}
export default mutations