<template>
  <nav-comp></nav-comp>
 
  <main >
    <router-view/>
    <Footercomp />
  </main>
  
   

  </template>
  <script>
  import navComp from './components/NavBar.vue'
  import Footercomp from './components/Footer.vue'

  
  export default{
    components:{
      navComp,
      Footercomp
  
      
      
    }
  }
  </script>

<style>
main{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            height: 100vh;
}

</style>







