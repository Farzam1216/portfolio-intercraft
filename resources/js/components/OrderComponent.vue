<template>
    <div id="order">
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <label class="input-group-text" for="fishtype"><i class="fas fa-fish"></i> &nbsp; Fish Type</label>
            </div>
            <select v-model="selected" @change="changeQuantity($event)" class="custom-select" id="fishtype" ref="fishtype">
                <option value="first">Please select one</option>
                <option
                 v-for="post in posts"
                 :value="post.quantity" :data-fid ="post.id" :data-ftitle ="post.title" :data-fprice ="post.price">{{post.title}}(Rs.{{post.price}}/Kg)
                 </option>               
            </select>
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" for="orderquantity"><i class="fas fa-weight-hanging"></i> &nbsp; &nbsp; Quantity</label>
            </div>
                            
            <select class="custom-select" id="fishquantity" ref="fishquantity">
                <option
                 v-for="post in posts"
                 :value="post.quantity">{{post.quantity}}
                 </option>               
            </select>
                            
                            
        </div>

            <div class="text-right">
                <button class="btn mt-2" @click="addToCart" style="background: #16ADD6;" ref="fishcart"><i class="fas fa-shopping-basket text-white"></i> <span class="pl-2">Add to Cart</span></button>
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
          selected: 'first'
            return {
                
                item: {}
                

            }
            
        },
        methods: {
            deletePost(post) {
                this.$store.dispatch('deletePost',post)
            },
            addToCart() {
                let item = {...this.item};
                this.$store.commit('addToCart', item);
                console.log( "item:", item);
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

                

                this.item.id = event.target.options[event.target.selectedIndex].attributes['data-fid'].nodeValue;
                this.item.title = event.target.options[event.target.selectedIndex].attributes['data-ftitle'].value;
                this.item.price = event.target.options[event.target.selectedIndex].attributes['data-fprice'].nodeValue;
                this.item.quantity = this.$refs.fishquantity.value; 
                
                //console.log(this.item);
                //console.log(event.target.options[event.target.selectedIndex].attributes);
                
                //console.log(item);
                //console.log(event.target.options[event.target.selectedIndex].attributes['data-fid'].nodeValue);
                //console.log(event.target.options[event.target.selectedIndex].attributes['data-ftitle'].value);
                //console.log(event.target.options[event.target.selectedIndex].attributes['data-fprice'].nodeValue);
                //console.log(event.target.data-fish);
                //this.addToCart(item);
                
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