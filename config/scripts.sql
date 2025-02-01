DROP DATABASE IF EXISTS process.env.DB_NAME;

CREATE DATABASE process.env.DB_NAME;

\c process.env.DB_NAME

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content VARCHAR(300) NOT NULL
);

INSERT INTO posts (content) VALUES 
    ('Bonjour Express'),
    ('Voici les operations CRUD'),
    ('Avec une base de donnees Postgres'),
    ('Il est tres cool Express'),
    ('Suggerez-nous des ameliorations');
