CREATE DATABASE DistriParts;
CREATE TABLE usuario_categoria(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreDeCategoria VARCHAR(50) NOT NULL
);
CREATE TABLE usuario(
id INT UNSIGNED AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
email VARCHAR(200) NOT NULL,
pass VARCHAR(15) NOT NULL,
imagen varchar(10000) NOT NULL,
categoria_id INT UNSIGNED,
PRIMARY KEY(id),
FOREIGN KEY (categoria_id) REFERENCES usuario_categoria(id)
);
CREATE TABLE compra(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED,
FOREIGN KEY (usuario_id) REFERENCES usuario(id),
fecha DATE NOT NULL,
medioDePago VARCHAR(50) NOT NULL,
total DECIMAL(6,2) NOT NULL
);
CREATE TABLE categoria(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreCategoria VARCHAR(25) NOT NULL
);
CREATE TABLE producto(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(500) NOT NULL,
precio float NOT NULL,
stock INT NOT NULL,
descripcion varchar(500),
descuento INT,
marca VARCHAR(100),
categoria_id INT UNSIGNED,
FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);
CREATE TABLE detalleDeVenta(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
cantidad INT NOT NULL,
compra_id INT UNSIGNED,
producto_id INT UNSIGNED,
precio DECIMAL(5,2) NOT NULL,
FOREIGN KEY (compra_id) REFERENCES compra(id),
FOREIGN KEY (producto_id) REFERENCES producto(id)
);
CREATE TABLE imagen(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreImagen  varchar(10000) NOT NULL,
producto_id INT UNSIGNED,
FOREIGN KEY (producto_id) REFERENCES producto(id)
);


