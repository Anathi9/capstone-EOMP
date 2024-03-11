import { connection as db } from "../config/index.js";

class Orders {
    fetchOrders(req, res, userID) {
        const qry = `
            SELECT o.orderID, p.amount, o.quantity, (p.amount * o.quantity) AS Total
            FROM Orders o
            JOIN Products p ON o.prodID = p.prodID
            WHERE o.userID = ?;
        `;

        db.query(qry, [userID], (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }

    fetchOrder(req, res) {
        const qry = `
            SELECT orderID, userID, prodID, amount,
            quantity, Total
            FROM Orders
            WHERE orderID = ${req.params.id};
        `;

        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0],
            });
        });
    }

    addOrder(req, res, userID, prodID, quantity) {
        const qry = `
            INSERT INTO Orders (userID, prodID, quantity)
            VALUES (?, ?, ?);
        `;

        db.query(qry, [userID, prodID, quantity], (err) => {
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

    deleteOrder(req, res, userID, orderID) {
        const qry = `
            DELETE FROM Orders
            WHERE orderID = ? AND userID = ?;
        `;

        db.query(qry, [userID, orderID], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The order has been deleted.",
            });
        });
    }
}

export { Orders};