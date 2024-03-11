import express from 'express';
import bodyParser from 'body-parser';
import { orders } from '../model/index.js';

const orderRouter = express.Router();

// Fetch all orders
orderRouter.get('/:userID', (req, res) => {
    const userID = req.params.userID;
    try {
        orders.fetchOrders(req, res, userID);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Unable to retrieve orders',
        });
    }
});


orderRouter.get('/:id', (req, res) => {
    try {
        orders.fetchOrder(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Unable to retrieve an order',
        });
    }
});


orderRouter.post('/addOrder/:userID', bodyParser.json(), (req, res) => {
    const userID = req.params.userID;
    const { prodID, quantity } = req.body;
    try {
        orders.addOrder(req, res, userID, prodID, quantity);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Unable to add a new order',
        });
    }
});

orderRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        orders.updateOrder(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update an order',
        });
    }
});


orderRouter.delete('/:userID/:orderID', (req, res) => {
    const userID = req.params.userID;
    const orderID = req.params.orderID;
    try {
        orders.deleteOrder(req, res, userID, orderID);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete an order',
        });
    }
});

export {
    orderRouter 
};