
  <template>
    <div class="app">
      <div class="container">
        <div class="row searchbar justify-content-center mb-3">
          <div class="col-lg-6 col-md-8 col-sm-10 col-12">
            <input v-model="searchTerm" type="text" placeholder="Search product by name" class="form-control">
          </div>
          <div class="col-lg-2 col-md-3 col-sm-4 col-6">
            <button @click="toggleSort" class="btn btn-primary btn-block">Sort by Price</button>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-sm-12">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 centerCards">
              <Card v-for="product in sortedProducts" :key="product.prodID" class="card-style">
                <template #cardHeader>
                  <img :src="product.prodImage" alt="" class="card-img-top" loading="lazy" >
                </template>
                <template #cardBody>
                  <h4 class="card-title">{{ product.productName }}</h4>
                  <p class="card-text text-white mb-1">Amount: R{{ product.amount }}</p>
                  <p class="card-text text-white mb-1">Category: {{ product.category }}</p>
                  <div class="d-flex justify-content-center">
                    <router-link :to="{ name: 'productsss', params: { id: product.prodID }}" class="btn btn-primary btn-sm">View more</router-link>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3" v-if="!products || products.length === 0">
          <div class="col">
            <p class="lead">Loading</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  
  export default {
    name: 'ProductsView',
    components: {
      Card,
    },
    data() {
      return {
        searchTerm: '',
        sortByPrice: false,
      };
    },
    computed: {
      products() {
        return this.$store.state.products || []; 
      },
      sortedProducts() {
        let sorted = [...this.products];
        if (this.sortByPrice) {
          sorted.sort((a, b) => a.amount - b.amount);
        }
        if (this.searchTerm) {
          const term = this.searchTerm.toLowerCase();
          sorted = sorted.filter(
            (product) =>
              product.productName.toLowerCase().includes(term) ||
              product.category.toLowerCase().includes(term)
          );
        }
        return sorted;
      },
    },
    methods: {
      toggleSort() {
        this.sortByPrice = !this.sortByPrice;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  <style scoped>
  .app {
   background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
  }
  .card-style {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color :hwb(221 4% 56%);
    color: white;
  }
  
  .centerCards {
    justify-content: center;
   gap: 60px;
  }

  .card-img-top {
    height:200px;
    object-fit: cover;
  color: white;
  padding: 1px;
  }
  
  .card-title {
    font-size: 18px;
    margin-bottom: 5px;
    color: white;
  }
  
  .card-text {
    font-size: 14px;
    margin-bottom: 5px;
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
  