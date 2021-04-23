const connection = require("../helpers/db");

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