-- Database: restaurant

-- DROP DATABASE IF EXISTS restaurant;

CREATE DATABASE restaurant
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

	CREATE TABLE Menu_Items (
    item_id SERIAL PRIMARY KEY,
    nom_element VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);

