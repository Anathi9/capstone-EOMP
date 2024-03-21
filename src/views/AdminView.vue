

 <template>
  <div class="app">
    <h3 class="user1 text-center">Users</h3>
    <div class="container styling">
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
        <input type="text" id="userEmail" v-model="userPayload.emailAdd" placeholder="please enter your email" required>

        <label for="userPassword">Password</label>
        <input type="text" id="userPassword" v-model="userPayload.userPass" placeholder="Please enter your password" required>

        <button class="btn btn-primary" @click.prevent="addUser">AddUser</button>
        <button class="btn btn-primary" @click="updateUser">UpdateUser</button>
      </div>

      <div class="container pt-5">
        <div class="table-container">
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
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
                  <img
                    src="https://i.ibb.co/JxK7ptg/product-design.png"
                    alt="Edit"
                    @click="editUser(user)"
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
      <button class="btn btn-dark" @click.prevent="addProduct">Add Product</button>
      <button class="btn btn-dark" @click="updateProduct">Update Product</button>
    </div>

    <div class="container pt-5">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ProdID</th>
              <th scope="col">ProductName</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">ProdImage</th>
              <th scope="col">ProdDescription</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.prodID">
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
                  @click.prevent="deleteProduct(item.prodID)"
                  width="30"
                  height="30"
                />
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
        prodID: null,
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
      selectedUser: {
        userPass: null,
      },
      selectedProduct: null,
    };
  },
  methods: {
    deleteProduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID);
    },
    editProduct(item) {
      this.selectedProduct = { ...item };
      this.payload = { ...this.selectedProduct };
    },
    updateProduct() {
      if (this.selectedProduct) {
        const updatedProduct = {
          id: this.selectedProduct.prodID,
          data: { ...this.payload },
        };
        this.$store.dispatch("updateProduct", updatedProduct);
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
          userPass: null,
        };
      }
    },
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
  background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
  padding: 15px;
}

.styling {
  background-color: skyblue;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 8px;
}

.table-container {
  margin-top: 15px;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 6px;
}

th, td {
  border: 1px solid #dddddd;
  padding: 6px;
  text-align: left;
  font-size: 12px;
}

th {
  background-color: hsl(220, 2%, 73%);
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.product-inputs, .user-inputs {
  display: flex;
  flex-wrap: wrap;
}

.product-inputs label, .user-inputs label {
  flex: 0 0 calc(30% - 8px);
  max-width: calc(30% - 8px);
  font-weight: bold;
}

.product-inputs input, .user-inputs input {
  flex: 0 0 calc(70% - 8px);
  max-width: calc(50% - 8px);
  padding: 4px;
  box-sizing: border-box;
  margin-bottom: 6px;
}

.product-inputs button, .user-inputs button {
  margin-top: 6px;
  padding: auto;
  border-radius: 5px;
  border: none;
  background-color: hsl(0, 0%, 77%);
  color: #232222;
  cursor: pointer;
  margin-right: 5%;
  font-size: 12px;
}
</style>



