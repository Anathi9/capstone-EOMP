
    <template>
      <div class="app">
        <div class="container">
          <h2 class="text-center">Order</h2>
          <div class="order-inputs">
            <label for="orderID">OrderID</label>
            <input type="text" id="orderID" v-model="order.orderID" required>
      
            <label for="userID">UserID</label>
            <input type="text" id="userID" v-model="order.userID" required>
      
            <label for="prodID">ProductID</label>
            <input type="text" id="prodID" v-model="order.prodID" required>
      
            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" v-model="order.quantity" required>
      
            <button class="btn btn-success" @click="addOrder">Add Order</button>
          </div>
      
          <div class="table-container mt-5">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>OrderID</th>
                  <th>UserID</th>
                  <th>ProductID</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orders" :key="order.orderID">
                  <td>{{ order.orderID }}</td>
                  <td>{{ order.userID }}</td>
                  <td>{{ order.prodID }}</td>
                  <td>{{ order.quantity }}</td>
                  <td>{{ calculateTotal(order) }}</td>
                  <td>
                    <button class="btn btn-info" @click="editOrder(order)">Edit</button>
                    <button class="btn btn-danger" @click="deleteOrder(order)">Delete</button>
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
          order: {
            orderID: null,
            userID: null,
            prodID: null,
            quantity: null,
            Total:null,
          },
          orders: []
        };
      },
      methods: {
        
        addOrder() {
          const total = this.calculateTotal(this.order);
          this.orders.push({ ...this.order, total });
          this.resetOrder();
        },
        editOrder(order) {
          this.order = { ...order };
        },
        deleteOrder(order) {
          const index = this.orders.findIndex(o => o.orderID === order.orderID);
          if (index !== -1) {
            this.orders.splice(index, 1);
          }
        },
        calculateTotal(order) {
          const amount = 10; 
          return order.quantity * amount;
        },
        resetOrder() {
          this.order = {
            orderID: null,
            userID: null,
            prodID: null,
            quantity: null
          };
        }
      }
    };
    </script>
    
    <style scoped>
    .app {
      background-color: hsl(208, 30%, 89%);
    }
    .container {
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
      padding: 8px;
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
      padding: 8px;
      margin: 8px 0;
      box-sizing: border-box;
    }
    </style>
    