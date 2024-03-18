
<template>
    <div class="app">
      <div class="container">
        <div class="register-container">
          <h2>Register</h2>
          <form id="registerForm" @submit.prevent="register">
            <input type="text" v-model="username" placeholder="Username" required>
            <input type="email" v-model="emailAdd" placeholder="Email" required>
            <input type="password" v-model="userPass" placeholder="Password" required>
            <button type="submit">Register</button>
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
        username: '',
        emailAdd: '',
        userPass: ''
      };
    },
    methods: {
      register() {
        
      }
    }
  };
  </script>
  
  <style scoped>
  .app {
    background-color: hsl(208, 30%, 89%);
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-container {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"],
  button {
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
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
  