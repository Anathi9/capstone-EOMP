
 <template>
  <div class="app"> 
    <div class="text-center">
      <h1>About Us</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10 col-12">
        <div class="img-container">
          <img class="img1" src="https://i.ibb.co/XWdH9PS/71-Gqes-YW9-JL.jpg" alt="profile" loading="lazy">
          <div class="overlay"></div>
        </div>
      </div>
      <div class="col-lg-5 col-md-8 col-sm-10 col-12">
        <p class="para">Mission: Sparkle Clean's mission is to provide exceptional cleaning services while promoting environmental sustainability and fostering healthier living and working environments. The company is dedicated to delivering sparkling clean spaces that not only look immaculate but also contribute to the well-being of its clients and the planet..</p>
        <p class="para">Goals: Sparkle Clean is committed to exceeding customer expectations by delivering top-notch cleaning services with meticulous attention to detail. Whether it's a residential home, commercial office, or industrial facility, the company's goal is to leave every space sparkling clean and sanitized, ensuring complete customer satisfaction.</p>
        <p class="para">Environmental Sustainability: Central to Sparkle Clean's philosophy is its commitment to environmental responsibility. The company strives to minimize its ecological footprint by using eco-friendly cleaning products and implementing sustainable practices in its operations. By prioritizing green cleaning solutions, Sparkle Clean aims to reduce harmful chemicals in the environment and promote a healthier planet for future generations.</p>
        <p class="para">Pursuit of its mission and goals, Sparkle Clean remains unwavering in its dedication to excellence, integrity, and sustainability. By staying true to these guiding principles, the company continues to shine as a beacon of excellence in the cleaning industry, setting new standards for service quality, environmental stewardship, and social responsibility.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .app {
   background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
   color:white;

  }

.img-container {
  position: relative;
  width: 100%;
  max-width: 500px; 
  height: auto;
  border: 2px solid rgb(215, 139, 139);
}

.img1 {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.para {
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .img-container {
    max-width: 300px; 
  }
} 
 </style>



