
import { connection as db } from "../config/index.js";
class Orders {
    fetchOrders(req, res) {
        const qry = `
            SELECT orderID,
            userID,
            prodID,
            amount,
            quantity,
            total
            FROM Orders;
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
            SELECT orderID,
            userID,
            prodID,
            amount,
            quantity,
            total
            FROM Orders;
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0],
            });
        });
    }
    addOrder(req, res) {
        const qry = `
            INSERT INTO Orders
            SET ?;
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "New order added",
            });
        });
    }
    updateOrder(req, res) {
        const qry = `
            UPDATE Orders
            SET ?
            WHERE orderID = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The order has been updated.",
            });
        });
    }
    deleteOrder(req, res) {
        const qry = `
            DELETE FROM Orders
            WHERE orderID = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The order has been deleted.",
            });
        });
    }
}
export { 
    Orders
 }

;
