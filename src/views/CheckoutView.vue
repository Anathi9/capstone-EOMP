
<template>
  <div class="App">
    <h3 class="user1 text-center">Orders</h3>
    <div class="container">
      <div class="row">
        <div class="modal" v-if="showModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Cart Item</h5>
                <button type="button" class="close" @click="closeModal">&times;</button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateOrder">
                  <div class="form-group">
                    <label for="editOrderID">OrderID:</label>
                    <input type="text" class="form-control" id="editorderID" v-model="editedOrder.orderID">
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>orderID</th>
                  <th>userID</th>
                  <th>prodID</th>
                  <th>quantity</th>
                  <th>amount</th>
                  <th>orderDate</th>
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
                  <td>R{{ order.amount }}</td>
                  <td>{{ order.orderDate }}</td>
                  <td>R{{ order.Total }}</td>
                  <td>
                    <button class="btn btn-primary" @click="openEditModal(order)">Update</button>
                    <button class="btn btn-danger" @click="deleteOrder(order.orderID)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <button class="btn btn-success" @click="displayThankYou">Thank You</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary" @click="placeOrder">Place Order</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-info float-right" @click="addOrder">Add Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'CheckoutView',
  data() {
    return {
      showModal: false,
      editedOrder: reactive({}),
    };
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  methods: {
    openEditModal(order) {
      this.editedOrder = JSON.parse(JSON.stringify(order)); 
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async updateOrder() {
      try {
        await this.$store.dispatch('updateOrder', this.editedOrder);
        this.showModal = false;
      } catch (error) {
        console.error('Error updating order:', error);
      }
    },
    async deleteOrder(orderID) {
      try {
        await this.$store.dispatch('deleteOrder', orderID);
      } catch (error) {
        console.error('Error deleting order:', error);
      }
    },
    displayThankYou() {
      alert('Thank you for your purchase!');
    },
    placeOrder() {
      alert('Your order has been placed!');
    },
    addOrder() {
      this.$store.dispatch("addOrder", this.orderPayload);
      alert('New order added!');
    }
  },
  mounted() {
    this.$store.dispatch('fetchOrders');
  },
};
</script>

<style scoped>
.App {
  background-image: url('https://i.ibb.co/VDsQwDS/488896.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;   
  padding: 80px;
}


</style>
