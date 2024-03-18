
 <template>
    <div id="app">
      <div class="container">
        <div class="login-container">
          <h2>Login</h2>
          <form @submit.prevent="login">
            <input type="email" v-model="emailAdd" placeholder="email" required>
            <input type="password" v-model="userPass" placeholder="password" required>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        emailAdd: '',
        userPass: ''
      };
    },
    methods: {
      login() {
        this.$store.dispatch('login', { emailAdd: this.emailAdd, userPass: this.userPass });
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-container {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid hsl(0, 42%, 60%);
    text-align: center;
  }
  
  input[type="email"],
  input[type="password"],
  button {
    width: 100%;
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #c5256a;
    border-radius: 10px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 10px;
  }
  
  p a {
    color: #007bff;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  p a:hover {
    color: #0056b3;
  }
  
  
  #app {
    background-color: hsl(208, 30%, 89%); 
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  
