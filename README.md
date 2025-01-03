Gallardo Aguilar Aldo Daniel
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.
NestJS: Framework para crear aplicaciones del lado del servidor.
TypeORM: ORM para trabajar con bases de datos relacionales, en este caso PostgreSQL.
PostgreSQL: Sistema de gestión de bases de datos.
HTML5: Para la creación del front-end.
Git: Sistema de control de versiones para gestionar el código fuente.

He utilizado:
https://postgres.new/ -> Herramienta que facilita creación de bases de datos postgres y diagramado
CREATE TABLE products (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

CREATE TABLE carts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id BIGINT NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    cart_id BIGINT REFERENCES carts(id) ON DELETE CASCADE,
    product_id BIGINT REFERENCES products(id),
    quantity INT NOT NULL
);

CREATE TABLE orders (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id BIGINT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE order_items (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    order_id BIGINT REFERENCES orders(id) ON DELETE CASCADE,
    product_id BIGINT REFERENCES products(id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL
);
El almacenamiento en **cookies** permite que los items del carrito persistan entre sesiones, incluso si el usuario no está autenticado. Esto facilita que el usuario regrese y continúe su compra sin perder los productos añadidos. Además, reduce la carga en el servidor al mantener los datos localmente en el navegador.

Utilizar cookies también mejora la experiencia del usuario al permitir la interacción con el carrito sin necesidad de iniciar sesión. Si el usuario se autentica, los productos del carrito se pueden asociar a su cuenta. Las cookies, además, son fáciles de implementar y ofrecen un rendimiento eficiente para la gestión del carrito.

Descripción
Este proyecto es una aplicación de comercio electrónico básica donde los usuarios pueden gestionar productos, carritos y pedidos. La aplicación está construida utilizando el framework NestJS para el back-end y PostgreSQL como base de datos. La comunicación con la base de datos se realiza a través de TypeORM, un ORM (Object Relational Mapper) que permite trabajar con bases de datos de manera eficiente y sencilla.

Configuración del Proyecto
Instalación de Dependencias
Para instalar las dependencias necesarias, ejecuta el siguiente comando:

$ npm install
Compilar y Ejecutar el Proyecto
Puedes ejecutar el proyecto en diferentes modos:

# Modo desarrollo
$ npm run start

# Modo desarrollo con reinicio automático (watch mode)
$ npm run start:dev

# Modo producción
$ npm run start:prod

Lógica de la Solución
Este proyecto está diseñado para permitir la gestión de productos, carritos y pedidos. La base de datos está estructurada de la siguiente manera:

Productos: Almacena información sobre los productos disponibles para la venta (nombre, descripción, precio, stock).
Carritos: Los usuarios pueden agregar productos a un carrito. Cada carrito se asocia a un usuario.
Pedidos: Cuando el usuario decide realizar la compra, los productos del carrito se transforman en un pedido, con detalles de cada producto y su precio.
Las relaciones entre las tablas son las siguientes:

productos: Contiene los productos disponibles.
carritos: Relacionados con los usuarios.
items_carrito: Relacionados con los productos dentro de un carrito.
pedidos: Contiene los detalles de cada pedido realizado.
items_pedido: Relacionados con los productos en un pedido.

Recursos
Documentación oficial de NestJS.
Documentación oficial de PostgreSQL.
Licencia
