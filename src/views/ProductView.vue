
<template>
  <div class="app"> 
    <div class="row">
      <h2>Single Product</h2>
    </div>
    <div class="row justify-content-center"  v-if="product">
      <Card>
        <template #cardHeader>
   
          <img class="img-fluid" :src="product.prodImage" :alt="product.prodImage" width="200px" height="200px" />
        </template>
        <template #cardBody>
          <div>
            <h4 class="card-title">{{ product.productName }}</h4>
            <p class="card-text text-dark p-2">
           Amount: R{{ product.amount }}
          </p>
          <p class="card-text text-dark p-2">
            prodDescription:{{ product.prodDescription }}
          </p>
          </div>
          <router-link to="/Products" class="btn btn-primary btn-sm">Go back</router-link> 
          <router-link to="/Products" class="btn btn-primary btn-sm">Add to cart</router-link>
        </template>
      </Card>
    </div>
    <div v-else>
   <h1>No Product found</h1>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  components: {
    Card,
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    // this.fetchProduct();

    this.$store.dispatch('fetchProduct', this.$route.params)
  },
  methods: {
    // fetchProduct() {
    //   const prodID = this.$route.params.id;
    //   this.$store.dispatch('fetchProduct', { id: prodID });
    // },
  },
};
</script>

<style scoped>  
 .app {
    background-color:   hsl(208, 30%, 89%);
  }
  
  .centerCards {
    margin-left: auto;
    margin-right: auto;
  }
  
  .card {
    background-color: white; 
    margin-bottom: 15px;
    
  }
  
  @media screen and (max-width: 700px) {
    .centerCards {
      max-width: 700px; 
    }
  }
  
  @media screen and (max-width: 300px) {
    .centerCards {
      max-width: 300px; 
    }
  }
</style>

  