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

        /* Vue.set(item, 'quantity', item.quantity);
        Vue.set(item, 'totalPrice', item.price);
        
        let found = state.cart.find(product => product.id == item.id);
        if (found) {
            found.quantity = parseInt(found.quantity) + parseInt(item.quantity);
            found.totalPrice = found.quantity * found.price;
            //console.log(found.quantity);
        }
        else {

        state.cart.push(item);
        Vue.set(item, 'quantity', item.quantity);
        Vue.set(item, 'totalPrice', item.price);

        state.cartCount++;

        } */

        //this.commit('saveCart');

        let found = state.cart.find(product => product.id == item.id);

        if (found) {
            found.quantity = parseInt(found.quantity) + parseInt(item.quantity);
            //found.totalPrice = found.quantity * found.price;
            return;
        }

        state.cart.push(item);

        state.cartCount++;

        this.commit('saveCart');
        
        //console.log("item before pushing:" , item);
        //console.log("after pushing into cart:",state.cart);

        
    },

    removeFromCart(state, item) {
        let index = state.cart.indexOf(item);
    
        if (index > -1) {
            let product = state.cart[index];
            state.cartCount--;
    
            state.cart.splice(index, 1);
        }
        this.commit('saveCart');   
    },

    saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        window.localStorage.setItem('cartCount', state.cartCount);
    },

    /* ADD_TO_CART(state, { product, quantity})  {
        state.cart.push({
            product,
            quantity
        })
    } */


}

export default mutations