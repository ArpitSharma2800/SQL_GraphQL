const connection = require("../helpers/db");
const {
    v4: uuidv4
} = require('uuid');

/**ITEM */

exports.getItem = ({
    id
}) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM item WHERE itemId='${id}'`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

exports.getItems = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM item`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);

        });
    });
};

exports.deleteItem = ({
    id
}) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM item WHERE itemId='${id}'`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve({
                message: "successfully deleted",
            });
        });
    });
};

exports.insertItems = ({
    name,
    description
}) => {
    return new Promise(async (resolve, reject) => {
        let itemId = await uuidv4();
        let sql = `INSERT INTO item(itemId, Name, description) VALUES ('${itemId}','${name}','${description}');`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            let sql = `SELECT * FROM item WHERE itemId='${itemId}'`;
            connection.query(sql, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    });
};

/** Item ended */

/** Inventory */

exports.insertInventory = ({
    id,
    quantity
}) => {
    return new Promise(async (resolve, reject) => {
        let inventoryId = await uuidv4();
        let sql = `INSERT INTO inventory(inventoryId, itemId, quantity) VALUES ('${inventoryId}','${id}','${quantity}');`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            let sql = `SELECT * FROM inventory WHERE inventoryId='${inventoryId}'`;
            connection.query(sql, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    });
};

exports.getInventory = ({
    id
}) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM inventory WHERE inventoryId='${id}'`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

exports.getInventorys = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM inventory`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);

        });
    });
};

exports.deleteInventory = ({
    id
}) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM inventory WHERE inventoryId='${id}'`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve({
                message: "successfully deleted",
            });
        });
    });
};

/** Inventory Ended*/