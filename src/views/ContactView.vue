
 <template>
  <div class="contact-page">
    <h1 class="display-5 text-center">Get in touch!</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 p-5">
          <div class="form-container">
            <form class="form" action="https://formspree.io/f/xvoerlbv" method="POST">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" class="form-control">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" class="form-control">
              </div>
              <div class="form-group">
                <label for="textarea">How Can We Help You?</label>
                <textarea name="textarea" id="textarea" rows="5" class="form-control"></textarea>
              </div>
              <button class="form-submit-btn btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="icons">
      <a href="https://www.instagram.com/lisanda_kanyiso_8880?igsh=OGQ5ZDc2ODk2ZA==">
        <img class="social" src="https://i.ibb.co/KszGmTz/5335781-camera-instagram-social-media-instagram-logo-icon.png" alt="Instagram">
      </a>
      <a href="https://www.linkedin.com/in/anathi-josefu-00b354262/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <img class="social" src="https://i.ibb.co/cD8SNvV/5305157-connection-linkedin-network-linkedin-logo-icon.png" alt="LinkedIn">
      </a>
    </div>
  </div>
</template>

<style scoped>
 
  .contact-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
    color: black; 
  }


  .form-container {
    background-color: hsl(210, 76%, 54%); 
    padding: 30px;
    border-radius: 10px;
    width: 100%;
  }

  
  .form-group label {
    color: black; 
  }

  .form-control {
    background-color: white#495057; 
    color: black#fff; 
    border: none;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .form-submit-btn {
    background-color: #007bff; 
    color: #fff; 
    border-radius: 5px;
    cursor: pointer;
  }

  .form-submit-btn:hover {
    background-color: #0056b3;
  }

  .icons {
    margin-top: 20px;
    
  }

  .icons a {
    margin: 0 10px;
  }

  .icons img.social {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.3s ease;
    
  }

  .icons img.social:hover {
    transform: scale(1.2);
 
  }
</style>

