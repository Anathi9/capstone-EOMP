 
<template>
<div class="app"> 
  <h3 class="user1 text-center">Users</h3>
              <div class=" container styling">
  <div class="product-inputs">
  <label for="userName">FirstName</label>
  <input type="text" id="userName" v-model="userPayload.firstName" required>

  <label for="userLastName">LastName</label>
  <input type="text" id="userLastName" v-model="userPayload.lastName" required>

  <label for="userAge">UserAge</label>
  <input type="number" id="userAge" v-model="userPayload.userAge" required>

  <label for="userGender">Gender</label>
  <input type="text" id="userGender" v-model="userPayload.Gender" required>

  <label for="userRole">userRole</label>
  <input type="text" id="userRole" v-model="userPayload.userRole" required>

  <label for="userEmail">Email</label>
  <input type="text" id="userEmail" v-model="userPayload.emailAdd" required>

  <label for="userPassword">Password</label>
  <input type="text" id="userPassword" v-model="userPayload.userPass" placeholder="Please enter your" required>

  <!-- <button class="btn btn-primary " @click.prevent="addUser">AddUser</button>
  <br><br>
  <button class="btn btn-primary " @click="updateUser">UpdateUser</button> -->
  <div class="btn-container">
        <button class="btn btn-primary" @click.prevent="addUser">Add New User</button>
      </div>
      <div class="btn-container">
        <button class="btn btn-primary" @click="updateUser">Update User</button>
      </div>
</div>




  <div class="container">
    <div class="table pt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">User Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email Address</th>
            <th scope="col">User Role</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.userID">
          <tr>
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <img
                src="https://i.ibb.co/94g6875/bin.png"
                alt="Delete"
                @click.prevent="deleteUser(user.userID)"
                width="30"
                height="30"
              />
            </td>
            <td>
              <img
  src="https://i.ibb.co/JxK7ptg/product-design.png"
  alt="Edit"
  width="30"
  height="30"
  @click="editUser(user)"
 
/>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
  </div>

<h3 class="prod3 text-center">Products</h3>
<div class="container styling">
  <div class="product-inputs">
    <label for="prodID">ProdID</label>
    <input type="text" id="prodID" v-model="payload.prodID" required>

    <label for="productName">ProductName</label>
    <input type="text" id="productName" v-model="payload.productName" required>

    <label for="amount">Amount</label>
    <input type="number" id="amount" v-model="payload.amount" required>

    <label for="category">Category</label>
    <input type="text" id="category" v-model="payload.category" required>

    <label for="prodImage">prodImage</label>
    <input type="text" id="prodImage" v-model="payload.prodImage" required>

    <label for="prodDescription">prodDescription</label>
    <input type="text" id="prodDescription" v-model="payload.prodDescription" required>

  </div>
  <button class="btn btn-primary" @click.prevent="addProduct">Add Product</button>
  <!-- <br>
  <br> -->
  <button class="btn btn-primary" @click="updateProduct">Update Product</button>

</div>


<div class="container pt-5">
  <div class="table-container ">
    <table class="table ">
      <thead>
        <tr>
          <th scope="col">ProdID</th>
          <th scope="col">ProductName</th>
          <th scope="col">Amount</th>
          <th scope="col">category</th>
          <th scope="col">prodImage</th>
          <th scope="col">prodDescription</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody v-for="item in products" :key="item.prodID">
        <tr>
          
          <td>{{ item.prodID }}</td>
          <td>{{ item.productName }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.category }}</td>
          <td>
            <img
              :src="item.prodImage"
              width="100px"
              height="100px"
              loading="lazy"
            />
          </td>
          <td>{{ item.prodDescription }}</td>
          <td>
            <img
              src="https://i.ibb.co/94g6875/bin.png"
              alt="Delete"
              @click.prevent="deleteproduct(item.prodID)"
              width="30"
              height="30"
            />
          </td>
          <td>
            <img
              src="https://i.ibb.co/JxK7ptg/product-design.png"
              alt="Edit"
              @click="editProduct(item)"

              width="30"
              height="30"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
</div>
</template>




<script>
export default {

data() {
return {
payload: {
  productName: null,
  amount: null,
  category: null,
  prodImage: null,
  prodDescription: null,
},
userPayload: {
  firstName: null,
  lastName: null,
  userAge: null,
  Gender: null,
  emailAdd: null,
  userRole: null,
  userPass: null,
},
selectedUser:
{
  userPass:null
},
selectedProduct: null

};
},
methods: {
deleteproduct(prodID) {
  this.$store.dispatch("deleteProduct", prodID);
},
editProducts(prodID) {
  let edit = {
    prodID: prodID,
    productName: this.payload.productName,
    amount:this.payload.amount,
    category: this.payload.category,
    prodImage: this.payload.prodImage,
    prodDescription: this.payload.prodDescription,
  };
  this.$store.dispatch("editProduct", edit);
},
editUser(user) {
this.selectedUser = { ...user };

this.userPayload = { ...this.selectedUser };
},

updateUser() {
if (this.selectedUser) {
  const updatedUser = {
    id: this.selectedUser.userID,
    data: { ...this.userPayload },
  };
  this.$store.dispatch("updateUser", updatedUser);

  this.selectedUser = null;
  this.userPayload = {
    firstName: null,
lastName: null,
userAge: null,
gender: null,
emailAdd: null,
userRole: null,
userPass: null
  };
} 
},
editProduct(item) {
  this.selectedProduct = { ...item };

  this.payload = { ...this.selectedProduct };
},
async updateProduct() {
if (this.selectedProduct) {
const updatedProduct = {
  id: this.selectedProduct.prodID,
  data: { ...this.payload },
};
await this.$store.dispatch("updateProduct", updatedProduct);

this.selectedProduct = null;
this.payload = {
  prodID: null,
  productName: null,
  amount: null,
  category: null,
  prodImage: null,
  prodDescription: null,
};
}
},

addProduct() {
  console.log("Product Image:", this.payload.prodImage);
 
  this.$store.dispatch("addProduct", this.payload);
},
addUser() {
this.$store.dispatch("register", this.userPayload);
},

deleteUser(userID) {
  this.$store.dispatch("deleteUser", userID);
}
}, 



computed: {
users() {
  return this.$store.state.users;
},
products() {
  return this.$store.state.products;
},
},
mounted() {
this.$store.dispatch("fetchUsers");
this.$store.dispatch("fetchProducts");
},
};


</script>
<style scoped>
.app {
  background-color: #f0f0f0;
  padding: 20px;
}

.styling {
  background-color: hwb(210 81% 17%);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
.product-inputs {
  display: flex;
 flex-wrap: wrap;
}

.product-inputs label {
  flex:  0 0 25%;
  margin-right: 10px;
}

.product-inputs input {
  flex: 0 0 auto;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgb(196, 197, 199);

}

.product-inputs button {
  flex: auto;
  margin-top: 10px;
   padding:auto; 
   border-radius: 5px; 
  border: none;
  background-color: hsl(0, 0%, 77%);
  color: #fff;
  cursor: pointer;
}


.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
}

th,
td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: hsl(220, 2%, 73%);
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f2f2f2;
}

.btn-container {
    color: #fff;
    margin-left: 10px;
  }

  .btn-primary {
    background-color: rgb(81, 84, 85);
    color: #fff;
    margin-right: 10px;
  }

</style>

 








 


