
<template>
  <Spinner v-if="loading"/>
  <div class="something" v-else>

  <div class="viewport">
      <div class="overlay">
          <h1><b>Constant Innovation</b></h1>
          <h1>Improving and striving for the best in chemical cleaning technology</h1>
      </div>
  </div>
  
  <div class="content">
      <h2 >Welcome to Sparkle Clean</h2>
      <p class="lead">Your one stop shop for all  cleaning chemical needs</p>
      <div class="img-container">
          
          <img class="img" src="https://i.ibb.co/FxzTxcz/shopping-q-tbn-ANd9-Gc-Q9-Ml1-TIwxnl-Qlwwli-YCSDn7-Harn3-Jj-Bg-Brc6-Nq-Y8-NXn-GADPm-Hs7-I6l1-Q-xs-QZ.webp" >
          <img class="img" src="https://i.ibb.co/MDD2hGQ/images-q-tbn-ANd9-Gc-Q022-Xt-Mq-Thk8-Xrsr-A7g6-SAsdmi-Ob-Ld4f-VNPA-usqp-CAU.jpg">
          <img class="img" src="https://i.ibb.co/P6Cfjd2/images-q-tbn-ANd9-Gc-T8-GYsr-Or-Z6-NHk2w6b-Utg-P6y-G3-HKNv9qxtti-A-usqp-CAU.jpg">
          <img class="img" src="https://i.ibb.co/XWdH9PS/71-Gqes-YW9-JL.jpg">
          
      </div>
  
  </div>
  
</div>





</template>                                                                                                   
  <style scoped>
     
      .navbar-brand {
          padding-top: 20px;
          line-height: 1.5;
      }
.viewport {
  position: relative;
  height: 70vh;
  width:100%;
  background-size: cover;
  background-position: center;
  overflow: hidden;
 
  background-image: url('https://i.ibb.co/VWj9kGC/cleaning-materials-5-home.jpg');
}

      .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: whitergba(46, 96, 72, 0.452);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color:black;
      }

    
      .content {
          padding: 40px;
          text-align: center;
      }

      .img-container{
          width:100%;
      }
      
     
      .img {
width: 250px;
height: 250px;
padding: 30px;
opacity: 0;
transform: translateX(0);
transition: transform 0.10s ease-in-out;
border-radius: 15%;
}

.img:hover {
transform: scale(1.6);
}

      .img:nth-child(odd) {
          animation: slide-in-left 3s forwards;
      }

      .img:nth-child(even) {
          animation: slide-in-right 3s forwards;
      }

      @keyframes slide-in-left {
          from {
              opacity: 0;
              transform: translateX(-100%);
          }
          to {
              opacity: 2;
              transform: translateX(0);
          }
      }

      @keyframes slide-in-right {
          from {
              opacity: 0;
              transform: translateX(100%);
          }
          to {
              opacity: 2;
              transform: translateX(0);
          }
      }

      @media (min-width: 768px) {
          .img {
              width: 300px;
          height: 300px;
      
          }

      }
      .bounce-letters {
display: inline-block;
animation: bounce 0.7s alternate infinite;
}

@keyframes bounce {
to {
  transform: translateY(-5px);
}
}  
h2{
  font-family:poppins sans-serif;
}

  </style>



<script>
import Spinner from '@/components/Spinner.vue';
export default {
components:{
Spinner
},
data() {
        return{
            loading:true,
        };
       },
       mounted() {
  setTimeout(() => {
    this.loading = false;
  }, 2000);
},
}

</script>




