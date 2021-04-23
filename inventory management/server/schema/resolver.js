const connection = require("../helpers/db");
const {
    v4: uuidv4
} = require('uuid');

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