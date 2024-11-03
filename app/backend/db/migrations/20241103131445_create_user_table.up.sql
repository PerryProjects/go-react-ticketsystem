CREATE TABLE IF NOT EXISTS users
(
    ID        uuid PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName  VARCHAR(255) NOT NULL,
    Email     VARCHAR(255) NOT NULL,
    Password  VARCHAR(255) NOT NULL,
    Active    BOOLEAN      NOT NULL
);
