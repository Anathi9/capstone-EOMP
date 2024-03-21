
<template>
    <div class="app">
      <div class="container">
        <div class="register-container">
          <h2>Register</h2>
          <form id="registerForm" >
     
  <input type="text" id="userName" v-model="payload.firstName" placeholder="Please enter your firstName" required>

  <input type="text" id="userLastName" v-model="payload.lastName" placeholder="Please enter your LastName" required>


  <input type="number" id="userAge" class="form-control mb-2" v-model="payload.userAge" placeholder="Please enter your Age" required>


  <input type="text" id="userGender" v-model="payload.Gender" placeholder="Please enter your gender" required>


  <input type="text" id="userRole" v-model="payload.userRole" placeholder="Please enter your Role" required>


  <input type="text" id="userEmail" v-model="payload.emailAdd" placeholder="Please enter your emailAdd" required>

  <input type="text" id="userPassword" v-model="payload.userPass" placeholder="Please enter your password" required>
            <button @click.prevent="Register()" type="submit">Register</button>
          </form>
          <p>Already have an account? <router-link to="/login">Login here</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        payload:
        {
          firstName:'',
          lastName:'',
          userAge:'',
          Gender:'',
          userRole:'',
        emailAdd: '',
        userPass: ''
        }
      };
    },
    methods: {
      Register() {
        this.$store.dispatch("register", this.payload)
      }
    }
  };
  </script>
  
  <style scoped>
  .app {
    background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-container {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: hsl(236, 43%, 81%);
    text-align: center;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  button {
    width: 100%;
    margin-bottom: 20px;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 2px;
   
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
  </style>
  