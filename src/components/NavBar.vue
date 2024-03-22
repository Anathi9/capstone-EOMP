 <template>
    <nav class="navbar navbar-expand-lg navbar-light  sticky-top" style="height: 100px; background:indigo;">
      <div class="container">
        <a class="navbar-brand text-light" href="#">Sparkle Clean</a>
        <button class="navbar-toggler bg-white text-bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li  class="nav-item">
              <router-link :to="'/'" class="nav-link text-light">Home</router-link>
            </li>
            <li  class="nav-item">
              <router-link :to="'/about'" class="nav-link text-light">About</router-link>
            </li>
           
            <li  class="nav-item"  v-show="user">
              <router-link :to="'/products'" class="nav-link text-light">Products</router-link>
            </li>
            <li  class="nav-item">
              <router-link :to="'/admin'" class="nav-link text-light">Admin</router-link>
            </li>
            <li  class="nav-item" v-show="user">
              <router-link :to="'/checkout'" class="nav-link text-light">Checkout</router-link>
            </li>
            <li  class="nav-item">
              <router-link :to="'/contact'" class="nav-link text-light">Contact</router-link>
            </li>
            <li  class="nav-item">
              <router-link :to="'/Login'" class="nav-link text-light">Login</router-link>
            </li>
            <li  class="nav-item">
              <router-link :to="'/userprofile'" class="nav-link text-light">Userprofile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  </template>
  
  
  
  <script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
 
  computed: {
    user() {
            return this.$store.state.user || cookies?.get("LoggedUser")
        }
}
}
  </script>
  
  <style scoped>
  nav a:hover {
  border-bottom: 3px solid #34dbd8; 
  border-top: 3px solid #5534db; 
  border-left: 3px solid rgb(204, 0, 255); 
  }
  @media (min-width: 768px) {
                  .navbar-nav{
                      margin-right:0;
                  }
              }
  </style>  

  
  
  
  