
<template>
  <div class="app">
    <div class="row">
      <h2>Single Product</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <Card>
        <template #cardHeader>
          <img class="img-fluid" :src="product.prodImage" :alt="product.prodImage" loading="lazy"/>
        </template>
        <template #cardBody>
          <div>
            <h4 class="card-title">{{ product.productName }}</h4>
            <p class="card-text text-white p-2">Amount: R{{ product.amount }}</p>
            <p class="card-text text-white p-2">prodDescription:{{ product.prodDescription }}</p>
          </div>
          <div class="d-flex justify-content-between mt-3">
            <router-link to="/Products" class="btn btn-primary btn-sm">Go back</router-link>
            <button @click="addToCart" class="btn btn-primary btn-sm">Add to cart</button>
          </div>
        </template>
      </Card>
    </div>
    <div v-else>
      <h4>No Product found</h4>
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
  methods: {
    addToCart() {
      
     this.$router.push('/admin');
    },
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params);
  },
};
</script>

<style scoped>
.app {
  background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
  justify-content: center;
}

.card {
  background-color: hwb(221 4% 56%);
  border-radius: 10px;
  max-width: 250px; 
  margin: 30px; 
  padding:15px;
 
}

.card-title {
  color: white;
}

.card-text {
  color: white;
}

.btn {
  margin-top: 10px;
}

.btn-primary {
  background-color: indigo;
}

.btn-primary:hover {
  background-color: purple;
}
</style>

