
import { connection as db } from "../config/index.js";

class Orders {
    fetchOrders(req, res) {
        const qry = `
            SELECT 
                Orders.orderID,
                Orders.userID,
                Users.firstName,
                Users.lastName,
                Orders.prodID,
                Products.productName,
                Orders.quantity,
                Orders.amount,
                Orders.orderDate,
                Orders.Total
            FROM 
                Orders
            INNER JOIN 
                Users ON Orders.userID = Users.userID
            INNER JOIN 
                Products ON Orders.prodID = Products.prodID;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }

    fetchOrder(req, res) {
        const qry = `
            SELECT 
                orderID,
                userID,
                prodID,
                quantity,
                amount,
                orderDate,
                Total
            FROM 
                Orders
            WHERE 
                orderID = ?;
        `;
        db.query(qry, [req.params.id], (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0],
            });
        });
    }

    addOrder(req, res) {
        const { userID, prodID, quantity, amount, Total } = req.body;
        const qry = `
            INSERT INTO 
                Orders (userID, prodID, quantity, amount, Total)
            VALUES 
                (?, ?, ?, ?, ?);
        `;
        db.query(qry, [userID, prodID, quantity, amount, Total], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "New order added",
            });
        });
    }

    updateOrder(req, res) {
        const { userID, prodID, quantity, amount, Total } = req.body;
        const qry = `
            UPDATE 
                Orders
            SET 
                userID = ?, prodID = ?, quantity = ?, amount = ?, Total = ?
            WHERE 
                orderID = ?;
        `;
        db.query(qry, [userID, prodID, quantity, amount, Total, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The order has been updated.",
            });
        });
    }

    deleteOrder(req, res) {
        const qry = `
            DELETE FROM 
                Orders
            WHERE 
                orderID = ?;
        `;
        db.query(qry, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The order has been deleted.",
            });
        });
    }
}

export { Orders };




