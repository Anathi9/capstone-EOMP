 
<template>
<div class="app"> 
  <h3 class="user1 text-center">Users</h3>
 
  
<div class="product-inputs container pt-5 styling">
  <label for="userName">FirstName</label>
  <input type="text" id="userName" v-model="userPayload.firstName" required>

  <label for="userLastName">LastName</label>
  <input type="text" id="userLastName" v-model="userPayload.lastName" required>

  <label for="userAge">UserAge</label>
  <input type="number" id="userAge" v-model="userPayload.userAge" required>

  <label for="userGender">Gender</label>
  <input type="text" id="userGender" v-model="userPayload.gender" required>

  <label for="userRole">userRole</label>
  <input type="text" id="userRole" v-model="userPayload.userRole" required>

  <label for="userEmail">Email</label>
  <input type="text" id="userEmail" v-model="userPayload.emailAdd" required>

  <label for="userPassword">Password</label>
  <input type="text" id="userPassword" v-model="userPayload.userPass" required>

  <button class="btn btn-success" @click.prevent="addUser">Add New User</button>
  <br><br>
  <button class="btn btn-success" @click="updateUser">Update User</button>

</div>



  <div class="container">
    <div class="table-container pt-5">
      <table class="table ">
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
            <td>{{ user.gender }}</td>
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
  <button class="btn btn-success" @click.prevent="addProduct">Add Product</button>
  <br>
  <br>
  <button class="btn btn-success" @click="updateProduct">Update Product</button>

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
  gender: null,
  emailAdd: null,
  userRole: null,
  userPass: null,
},
selectedUser: null,
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
   background-color:  hsl(208, 30%, 89%);
 }
 .user1 {
   color: indigo;
   padding-top:5%
 }

 .prod3 {
   color: indigo;
   padding-bottom:4%
 }

 .styling {
   background-color: white;
  padding: 20px;
  border-radius: 5px;
 }

 .product-inputs {
  background-color: white;   padding: 20px;
   border-radius: 5px;
 }

 .table-container {
   overflow-x: auto;
 }

 .pt-5 {
  padding-top: 20px;
 } .container {
    max-width: 800px;
    margin: 0 auto;
  }
 
 .order-inputs {
    margin-bottom: 20px;
 }
 
  .table-container {
    overflow-x: auto;
  }
 
 .table-bordered {
    border: 1px solid #dee2e6;
   border-collapse: collapse;
    width: 100%;
    text-align: center; 
 }
 
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6;
    padding:8px; 
  }
 
  .table-bordered th {
    background-color: #f8f9fa; 
  }
  .btn {
    padding: 8px 16px;
    cursor: pointer;
    margin-right: 5px;
 }
 
  .btn-success {
    background-color: #28a745;
    color: #fff;
  }
 
  .btn-info {
    background-color: #17a2b8;
    color: #fff;
  }
 
  .btn-danger {
    background-color: #dc3545;
   color: #fff;
 }
 
 input[type="text"],
  input[type="number"] {
    width: 100%;
   padding: 8px;   margin: 8px 0;
   box-sizing: border-box;
 }
</style>








 

