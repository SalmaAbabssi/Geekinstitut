-- Database: public

-- DROP DATABASE IF EXISTS public;

--CREATE DATABASE public
  --  WITH
    --OWNER = postgres
   -- ENCODING = 'UTF8'
   -- LC_COLLATE = 'French_France.1252'
   -- LC_CTYPE = 'French_France.1252'
   -- LOCALE_PROVIDER = 'libc'
   -- TABLESPACE = pg_default
    --CONNECTION LIMIT = -1
    --IS_TEMPLATE = False;
	
--question 1 
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2));

--question 2
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50));

--question 3
INSERT INTO items (name, price) VALUES
('Petit bureau', 100),
('Grand bureau', 300),
('Ventilateur', 80);

SELECT * FROM items;

--3/1
INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Vert'),
('Mélanie', 'Johnson');

--3/2
SELECT * FROM items WHERE price > 80;
--3/3
SELECT * FROM items WHERE price <= 300;
--3/4
SELECT * FROM customers WHERE last_name = 'Smith';
--3/5
SELECT * FROM customers WHERE last_name = 'Jones';
--3/6
SELECT * FROM customers WHERE first_name <> 'Scott';


