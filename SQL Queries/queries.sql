/*** CREATION QUERIES ***/

CREATE TABLE customerInfo(
    customerId VARCHAR(255) PRIMARY KEY NOT NULL,
    Name VARCHAR(255) NOT NULL,
    PhoneNo INT NULL,
    Email VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NULL
);

CREATE TABLE orders(
    orderId VARCHAR(255) PRIMARY KEY NOT NULL,
    customerId VARCHAR(255) NOT NULL,
    placedDate DATE NULL,
    deliveryDate DATE NULL
);

CREATE TABLE item(
    itemId VARCHAR(255) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL
);

CREATE TABLE storage(
    storageId VARCHAR(255) PRIMARY KEY,
    itemId VARCHAR(255) NOT NULL,
    shelfNo INT NULL
);

CREATE TABLE orderNo(
    OrderNo VARCHAR(255) PRIMARY KEY,
    ItemId VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    orderId VARCHAR(255) NOT NULL
);

CREATE TABLE inventory(
    inventoryId VARCHAR(255) PRIMARY KEY,
    itemId VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

ALTER TABLE
    storage ADD FOREIGN KEY(itemId) REFERENCES item(itemId);

ALTER TABLE
    inventory ADD FOREIGN KEY(itemId) REFERENCES item(itemId);

ALTER TABLE
    orderNo ADD FOREIGN KEY(orderId) REFERENCES orders(orderId);

ALTER TABLE
    orderNo ADD FOREIGN KEY(ItemId) REFERENCES item(itemId);
    
ALTER TABLE
    orders ADD FOREIGN KEY(customerId) REFERENCES customerInfo(customerId);

/*** CREATION QUERIES ENDED***/

/*** CUSTOMER INFO ***/

INSERT INTO customerinfo(customerId, Name, PhoneNo, Email, Address) VALUES ("SAMPLE","SAMPLE","SAMPLE","SAMPLE","SAMPLE")

SELECT * FROM customerinfo

SELECT * FROM customerinfo WHERE customerId="ID"

UPDATE customerinfo SET Name="SAMPLE",PhoneNo="SAMPLE",Email="SAMPLE",Address="SAMPLE" WHERE customerId="ID"

DELETE FROM customerinfo WHERE customerId="ID"

/*** CUSTOMER INFO ENDED***/

/*** INVENTORY INFO ***/

INSERT INTO inventory(inventoryId, itemId, quantity) VALUES ("SAMPLE","SAMPLE","SAMPLE")

SELECT * FROM inventory 

SELECT * FROM inventory WHERE inventoryId="ID"

UPDATE inventory SET inventoryId="SAMPLE",itemId="SAMPLE",quantity="SAMPLE" WHERE inventoryId="ID"

DELETE FROM inventory WHERE inventoryId="ID"

SELECT inventory.inventoryId AS inventoryId, item.Name AS itemName, item.description AS itemDescription, inventory.quantity AS itemQuantity FROM inventory INNER JOIN item ON inventory.itemId = item.itemId

/*** INVENTORY INFO ENDED***/

/*** STORAGE INFO ***/

INSERT INTO storage(storageId, itemId, shelfNo) VALUES ("SAMPLE","SAMPLE","SAMPLE")

SELECT * FROM storage 

SELECT * FROM storage WHERE storageId="ID"

UPDATE storage SET storageId="SAMPLE", itemId="SAMPLE", shelfNo="SAMPLE" WHERE storageId="ID"

DELETE FROM storage WHERE storageId="ID"

SELECT storage.storageId AS storageId, item.Name AS itemName, item.description AS itemDescription, storage.shelfNo AS shelfNo FROM storage INNER JOIN item ON storage.itemId = item.itemId

/*** STORAGE INFO ENDED***/


/*** ITEM INFO ***/

INSERT INTO item(itemId, Name, description) VALUES ("SAMPLE","SAMPLE","SAMPLE");

SELECT * FROM item;

SELECT * FROM item WHERE itemId="SAMPLE";

DELETE FROM item WHERE itemId="SAMPLE";

UPDATE item SET itemId="SAMPLE",Name="SAMPLE",description="SAMPLE" WHERE itemId="SAMPLE";

/*** ITEM INFO ***/

/*** ORDERS INFO ***/

INSERT INTO orders(orderId, customerId, placedDate, deliveryDate) VALUES ("SAMPLE","SAMPLE","SAMPLE","SAMPLE")

SELECT * FROM orders WHERE orderId="SAMPLE"

UPDATE orders SET orderId="SAMPLE",customerId="SAMPLE",placedDate="SAMPLE",deliveryDate="SAMPLE" WHERE orderId="SAMPLE"

DELETE FROM orders WHERE orderId="SAMPLE"

SELECT orders.orderId AS orderId, orders.customerId AS customerId, orders.placedDate AS placedDate, orders.deliveryDate AS deliveryDate, customerInfo.Name AS customerName
customerInfo.PhoneNo AS PhoneNo, customerInfo.Email AS email, customerInfo.Address AS address FROM orders INNER JOIN customerInfo ON customerInfo.customerId = order.customerId

/***ORDERS INFO END***/

/*** ORDERNO INFO ***/

SELECT * FROM orderNo

SELECT * FROM orderno WHERE orderId="SAMPLE"

DELETE FROM orderno WHERE orderId="SAMPLE"

DELETE FROM orderno WHERE OrderNo="SAMPLE"

INSERT INTO orderno(OrderNo, ItemId, quantity, orderId) VALUES ("SAMPLE","SAMPLE","SAMPLE","SAMPLE")

UPDATE orderno SET OrderNo="SAMPLE",ItemId="SAMPLE",quantity="SAMPLE",orderId="SAMPLE" OrderNo="SAMPLE"

SELECT orderNO.orderNo AS orderNO, orderNo.quantity, item.itemId AS itemId, item.Name AS itemName, item.description AS itemDescription FROM orderNo INNER JOIN item ON orderNo.itemId = item.itemId WHERE orderId="SAMPLE"

/*** ORDERNO INFO ENDED ***/