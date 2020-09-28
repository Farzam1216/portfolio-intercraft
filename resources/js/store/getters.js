let getters = {
     posts: state => {
         return state.posts
     },

     /* cartTotalPrice: state => {
         let total = 0;

         state.cart.foreach(item => {
             total += item.price * item.quantity;
         })
     },
 */
     cartPrice: state => {
         let total = 0;

         state.cart.forEach(item => {
             total += item.price * item.quantity;
             return total.toFixed(2);
         })

     },

     
}
export default  getters