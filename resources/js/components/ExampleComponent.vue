<template>
    <div id="orderSummary">
        <h4>Order Summary</h4>
        <div id="order_items">
            <div class="row order_item">
                <div v-for="item in cart" key="item.product" class="col-4 desc">
                    {{item.title}}
                </div>
                <div v-for="item in cart" key="item.quantity item.price" class="col-4 quantity">
                    {{item.quantity}} x {{item.price}}
                </div>
                <div class="col-4 price">
                    Rs. 1875.00
                </div>
            </div>
        </div>

        <div id="subtotal" class="p-2">
            <div class="row">
                <div class="col-6 text-left desc">
                    Subtotal
                </div>
                <div class="col-6 text-right price">
                    Rs. 1875.00
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
                    Rs. 1775.00
                </div>
            </div>
        </div>

        <button class="btn btn-info btn-lg btn-block mt-2 mb-2 text-white"  style="background: #16ADD6;"><i class="fas fa-shopping-bag"></i> &nbsp; CHECK OUT</button>
    </div>
</template>

<script>
    export default {
       
       computed: {
         cart() {
             return this.$store.state.cart;
         }
         
       },
       
       mounted() {
            console.log('Component mounted.')
        }
    }
</script>
