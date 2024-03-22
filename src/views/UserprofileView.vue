<!-- <template>
    <div class="user-profile">
      <div class="profile-header">
        <h2>{{ userProfile.userID}}</h2>
      </div>
      <div class="profile-details">
        <div class="detail">
          <label>UserID:</label>
          <span>{{ userProfile.userID }}</span>
        </div>
        <div class="detail">
          <label>First Name:</label>
          <span>{{ userProfile.firstName }}</span>
        </div>
        <div class="detail">
          <label>Last Name:</label>
          <span>{{ userProfile.lastName }}</span>
        </div>
        <div class="detail">
          <label>User Age:</label>
          <span>{{ userProfile.userAge }}</span>
        </div>
        <div class="detail">
          <label>Gender:</label>
          <span>{{ userProfile.Gender }}</span>
        </div>
        <div class="detail">
          <label>EmailAdd:</label>
          <span>{{ userProfile.emailAdd }}</span>
        </div>
      
      </div>
      <div class="profile-actions">
        <button class="edit-profile-button" @click="editProfile">Edit Profile</button>
        <button class="change-password-button" @click="changePassword">Change Password</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userProfile: {
          userID: '',
          firstName: '',
          lastName: '',
          userAge: '',
          Gender: '',
           emailAdd:''
        }
      };
    },
    methods: {
      editProfile() {
        // Logic to navigate to edit profile page
        console.log('Edit profile clicked');
      },
      changePassword() {
        // Logic to navigate to change password page
        console.log('Change password clicked');
      }
    }
  };
  </script>
  
  <style scoped>
  .user-profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .profile-header {
    text-align: center;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .profile-details {
    margin-bottom: 20px;
  }
  
  .detail {
    margin-bottom: 10px;
  }
  
  .detail label {
    font-weight: bold;
  }
  
  .profile-actions {
    text-align: center;
  }
  
  .edit-profile-button,
  .change-password-button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  .edit-profile-button:hover,
  .change-password-button:hover {
    background-color: #0056b3;
  }
  </style>
-->
   <template>
    <div class="app">
      <div class="user-profile">
        <div class="profile-header">
          <h2>{{ userProfile.userID }}</h2>
        </div>
        <div class="profile-details">
          <div class="detail">
            <label>First Name:</label>
            <span>{{ userProfile.firstName }}</span>
          </div>
          <div class="detail">
            <label>Last Name:</label>
            <span>{{ userProfile.lastName }}</span>
          </div>
          <div class="detail">
            <label>User Age:</label>
            <span>{{ userProfile.userAge }}</span>
          </div>
          <div class="detail">
            <label>Gender:</label>
            <span>{{ userProfile.Gender }}</span>
          </div>
          <div class="detail">
            <label>EmailAdd:</label>
            <span>{{ userProfile.emailAdd }}</span>
          </div>
        </div>
        <div class="profile-actions">
          <button class="edit-profile-button" @click="editProfile">Edit Profile</button>
          <button class="change-password-button" @click="changePassword">Change Password</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
  export default {
    data() {
      return {
        userProfile: {
          firstName: cookies?.get("LoggedUser").result.firstName,
          lastName: cookies?.get("LoggedUser").result.lastName,
          userAge: cookies?.get("LoggedUser").result.userAge,
          Gender: cookies?.get("LoggedUser").result.Gender,
          emailAdd: cookies?.get("LoggedUser").result.emailAdd,
        }
      };
    },
    methods: {
      editProfile() {
       
        return this.$store.state.user
      },
      changePassword() {
        
        console.log('Change password clicked');
      }
    }
  };
  </script>
  
  <style scoped>
  .app {
    background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
    background-size: cover; 
    background-repeat: no-repeat;

  }
  
  .user-profile {
    max-width: 600px;
    margin-left: 300px;
    padding: 20px;
    height:100vh;
    bottom: 40%;
   
  }
 
  </style>
   
  

 
  