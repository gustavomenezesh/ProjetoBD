
CREATE TABLE clients(
    clientId Serial PRIMARY KEY NOT NULL,
    clientName VARCHAR(100) NOT NULL,
    clientEmail VARCHAR(100) NOT NULL,
    clientAdress VARCHAR(255) NOT NULL,
    clientPass VARCHAR(50) NOT NULL,
    tipo VARCHAR(15) NOT NULL
);

CREATE TABLE restaurants(
    restd Serial PRIMARY KEY NOT NULL,
    restname VARCHAR(100) NOT NULL,
    restemail VARCHAR(100) NOT NULL,
    restadress VARCHAR(255) NOT NULL,
    restass VARCHAR(50) NOT NULL,
    restcateg VARCHAR(100) NOT NULL,
    status BOOLEAN NOT NULL,
    tipo VARCHAR(15) NOT NULL
);

CREATE TABLE categorias(
    idcateg Serial PRIMARY KEY NOT NULL,
    namecateg VARCHAR(50)
);

CREATE TABLE restaurant_categ(
    restid int REFERENCES restaurants(restid);
    idcateg int REFERENCES categorias(idcateg);
);

INSERT INTO categorias (namecateg) VALUES ('chinesa/japonesa');
INSERT INTO categorias (namecateg) VALUES ('fastfood');
INSERT INTO categorias (namecateg) VALUES ('bebidas');
INSERT INTO categorias (namecateg) VALUES ('açaí');
INSERT INTO categorias (namecateg) VALUES ('comida caseira');
INSERT INTO categorias (namecateg) VALUES ('sanduiches');
INSERT INTO categorias (namecateg) VALUES ('hamburguers');
INSERT INTO categorias (namecateg) VALUES ('pizza');
INSERT INTO categorias (namecateg) VALUES ('sobremesa');
INSERT INTO categorias (namecateg) VALUES ('italiana');