<template>
    <div id="orderSummary">
        <h4>Order Summary Cart ({{ $store.state.cartCount }})</h4>
        <div id="order_items">
            <div v-for="item in cart" :key="item.id" class="row order_item">
                
                <div class="col-4 desc">
                    {{item.title}}
                </div>
                <div class="col-4 quantity">
                    {{item.quantity}} x {{item.price}} 
                </div>
                <div class="col-4 price">
                    <span class="removeBtn"
                       title="Remove from cart"
                       @click.prevent="removeFromCart(item)">X
                    </span>
                </div>
            </div>
        </div>

        <div id="subtotal" class="p-2">
            <div class="row">
                <div class="col-6 text-left desc">
                    Subtotal
                </div>
                <div class="col-6 text-right price">
                     Rs.{{ totalPrice }}
                </div>
            </div>
        </div>

        <div id="balance" class="p-2">
            <div class="row">
                <div class="col-6 text-left desc">
                    Outstanding Balance
                </div>
                <div class="col-6 text-right price">
                    Rs. -200.00
                </div>
            </div>
        </div>

        <div id="deliverycharges" class="p-2">
            <div class="row">
                <div class="col-6 text-left desc">
                    Delivery Fee
                </div>
                <div class="col-6 text-right price">
                    Rs. 100.00
                </div>
            </div>
        </div>

        <div id="grandtotal" class="p-2">
            <div class="row">
                <div class="col-6 text-left desc">
                    Grand Total
                </div>
                <div class="col-6 text-right price">
                    Rs.{{ totalPrice }}
                </div>
            </div>
        </div>

        <button class="btn btn-info btn-lg btn-block mt-2 mb-2 text-white"  style="background: #16ADD6;"><i class="fas fa-shopping-bag"></i> &nbsp; CHECK OUT</button>
    </div>
</template>

<script>
    export default {

        methods: {
          removeFromCart(item) {
              this.$store.commit('removeFromCart', item);
          }
        },
       
       computed: {
         cart() {
             return this.$store.state.cart;
             
         },
         totalPrice() {
             let total = 0;
     
             for (let item of this.$store.state.cart) {
                 total += item.totalPrice;
             }
     
             return total.toFixed(2);
            },
          
         
       },
       
       mounted() {
            console.log('Component mounted.')
        }
    }
    
</script>

<style>
.removeBtn {
    margin-right: 1rem;
    color: red;
}
</style>
