
<template>
  <div class="container app"> 
    <div class="row">
      <h2>Single Product</h2>
    </div>
    <div class="row"  v-if="product">
      <Card>
        <template #cardHeader>
          <h4 class="card-title">{{ product.productName }}</h4>
        </template>
        <template #cardBody>
          <div>
            <img class="img-fluid" :src="product.prodImage" :alt="product.productName" />
          </div>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            {{ product.ProdDescription }}
          </p>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            Amount: R{{ product.amount }}
          </p>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            Amount: R{{ product.prodDescription }}
          </p>
          <router-link to="/Products">Go back</router-link>
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

</style>

  