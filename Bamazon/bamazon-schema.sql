DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  Item_id INT NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(45) NULL,
  Department_Name VARCHAR(45) NULL,
  Price DECIMAL(10,2) NULL,
  Stock_Quantity INT NULL,
  PRIMARY KEY (Item_id)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Catalina Boots", "Shoes", 50.00, 0);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Catnip Spray", "Pets", 3.10, 20);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Bob-It", "Electronic Toys", 33.25, 7);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Cat Tree", "Pets", 64.85, 30);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Drone", "Electronic Toys", 214.25, 0);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Deats Headphones", "Electronics", 100.25, 10);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Harry Potter and the Goblet of Fire", "Books", 20.15, 4);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("NY Giants Jersey", "Sports", 60.55, 3);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Hairdryer", "Beauty", 31.65, 15);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Contour Kit", "Beauty", 29.95, 0);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
