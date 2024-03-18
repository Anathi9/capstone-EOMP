<!-- <template>
  <div class="container">
      <div class="row searchbar">
          <div class="col">
              <input type="text" placeholder="Search product by name" class="form-control">
          </div>
          <div class="col">
              <button class="btn btn-success">Sorting by price</button>
          </div>
      </div>
      <div class="row row-gap-3 column-gap-5 centerCards" v-if="products">
          <Card v-for="product in products" :key="product.prodID">
              <template #cardHeader>
                <img :src="product.prodImage" alt="" >
              </template>
              <template #cardBody>
                <h4 class="card-title">{{ product.productName }}</h4>
                   
                
                  <p class="card-text text-dark p-2">
                      Amount: R{{ product.amount }}
                  </p>
                  <p class="card-text text-dark p-2">
                      category: {{ product.category }}
                  </p>
                  <router-link :to="{name:'product', params:{id: product.productID}}" class="btn btn-success">view more</router-link>
              </template>
          </Card>
      </div>
      <div class="row" v-else>
          <p class="lead">Loading</p>
      </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
  name: 'ProductsView',
  components: {
      Card
  },
  computed:{
      products(){``
          return this.$store.state.products
      }
  },
  mounted() {
      this.$store.dispatch('fetchProducts')
  }
}
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
</style> -->




 




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
              <Card v-for="product in sortedProducts" :key="product.prodID">
                <template #cardHeader>
                  <img :src="product.prodImage" alt="" class="card-img-top" width="200px" height="200px">
                </template>
                <template #cardBody>
                  <h4 class="card-title">{{ product.productName }}</h4>
                  <p class="card-text text-dark mb-1">Amount: R{{ product.amount }}</p>
                  <p class="card-text text-dark mb-1">Category: {{ product.category }}</p>
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
  