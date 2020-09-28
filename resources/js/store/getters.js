let getters = {
     posts: state => {
         return state.posts
     },

     cartTotalPrice: state => {
         let total = 0;

         state.cart.foreach(item => {
             total += item.price * item.quantity;
         })
     }

     
}
export default  getters