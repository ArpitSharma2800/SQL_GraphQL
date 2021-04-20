CREATE TABLE `customerInfo`(
    `customerId` VARCHAR(255) PRIMARY KEY NOT NULL,
    `Name` VARCHAR(255) NOT NULL,
    `PhoneNo` INT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Address` VARCHAR(255) NULL
);

CREATE TABLE `orders`(
    `orderId` VARCHAR(255) PRIMARY KEY NOT NULL,
    `customerId` VARCHAR(255) NOT NULL,
    `placedDate` DATE NULL,
    `deliveryDate` DATE NULL,
    `orderNo` VARCHAR(255) NOT NULL
);

CREATE TABLE `item`(
    `itemId` VARCHAR(255) PRIMARY KEY,
    `Name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL
);

CREATE TABLE `storage`(
    `storageId` VARCHAR(255) PRIMARY KEY,
    `itemId` VARCHAR(255) NOT NULL,
    `shelfNo` INT NULL
);

CREATE TABLE `orderNo`(
    `OrderNo` VARCHAR(255) PRIMARY KEY,
    `ItemId` VARCHAR(255) NOT NULL,
    `quantity` INT NOT NULL
);

CREATE TABLE `inventory`(
    `inventoryId` VARCHAR(255) PRIMARY KEY,
    `itemId` VARCHAR(255) NOT NULL,
    `quantity` INT NOT NULL
);

ALTER TABLE
    `storage` ADD FOREIGN KEY(`itemId`) REFERENCES `item`(`itemId`);

ALTER TABLE
    `inventory` ADD FOREIGN KEY(`itemId`) REFERENCES `item`(`itemId`);

ALTER TABLE
    `orderNo` ADD  FOREIGN KEY(`ItemId`) REFERENCES `item`(`itemId`);

ALTER TABLE
    `orders` ADD FOREIGN KEY(`orderNo`) REFERENCES `orderNo`(`OrderNo`);
    
ALTER TABLE
    `orders` ADD FOREIGN KEY(`customerId`) REFERENCES `customerInfo`(`customerId`);