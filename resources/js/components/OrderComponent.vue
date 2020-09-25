<template>
    <div id="order">
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <label class="input-group-text" for="fishtype"><i class="fas fa-fish"></i> &nbsp; Fish Type</label>
            </div>
            <select @change="changeQuantity($event)" class="custom-select" id="fishtype" ref="fishtype">
                <option disabled value="">Please select one</option>
                <option
                 v-for="post in posts"
                 :value="post.id" :data-fish ="post.title" :data-fprice="post.price">{{post.title}}(Rs.{{post.price}}/Kg)
                 </option>               
            </select>
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" for="orderquantity"><i class="fas fa-weight-hanging"></i> &nbsp; &nbsp; Quantity</label>
            </div>
                            
            <select  class="custom-select" id="fishquantity" ref="fishquantity">
                <option
                 v-for="post in posts"
                 :value="post.id">{{post.quantity}}
                 </option>               
            </select>
                            
                            
        </div>

            <div class="text-right">
                <button class="btn mt-2" @click="addToCart()" style="background: #16ADD6;" ref="fishcart"><i class="fas fa-shopping-basket text-white"></i> <span class="pl-2">Add to Cart</span></button>
            </div>
    </div>


</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Fish",
        mounted() {
            
            this.$store.dispatch('fetchPosts')
            
            
        },
        data(){
            return {
                selectedFish:'',
            }
        },
        methods: {
            deletePost(post) {
                this.$store.dispatch('deletePost',post)
            },
            addToCart() {
                this.$store.commit('addToCart', {
                    product:"Fish1", 
                    quantity:1,
                    price:376
                });
            },
            /* addToCart(){

                this.$store.dispatch("addProductToCart", {
                    product:"Fish1", 
                    quantity:1
                }); */
                
                //console.log("hello");
                //console.log(event.target.options[event.target.selectedIndex].attributes['data-fish'].nodeValue);
                //console.log(product);
                   
                
            //},
            
            changeQuantity(event){
                
                this.$refs.fishquantity.value = event.target.value;
                console.log(event.target.options[event.target.selectedIndex].attributes['data-fish'].nodeValue);
                console.log(event.target.options[event.target.selectedIndex].attributes['data-fprice'].value);
                //console.log(event.target.options[event.target.selectedIndex].attributes['data-fish'].nodeValue);
                //console.log(event.target.data-fish);
                //this.addToCart();
                

            },
            

        },
        computed: {
            ...mapGetters([
                'posts'
            ])
        }
    }
</script>

<style scoped>

</style>