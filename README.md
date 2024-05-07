# Spotify Clone - Music App - Backend - API Rest - MVC

## Resumen

Spotify Clone es un proyecto destinado a desarrollar la tecnología para implementar el software backend de una aplicación ficticia de streaming de música similar a Spotify. Teniendo en cuenta los requisitos específicos de este tipo de aplicaciones, los usuarios podrán disfrutar de todas las funcionalidades típicas de las plataformas de streaming de música.

Además, este proyecto tiene como objetivo mostrar habilidades en el uso de frameworks como MongoDB y bibliotecas y dependencias como Multer, Validator, Moment, etc.

## Objetivos
El objetivo es crear la infraestructura de software necesaria para el backend de una aplicación de streaming de música con un enfoque en la escalabilidad, mantenibilidad y rendimiento. Esto incluye la gestión de bases de datos, lógica del lado del servidor, interfaces de programación de aplicaciones (APIs), arquitectura y servidores.

Para lograr esto, implementaremos el patrón de diseño Modelo-Vista-Controlador (MVC), ofreciendo una solución de software que no solo considera la arquitectura de código, sino también la lógica inherente a una plataforma de streaming de música.

## Tecnologías
Las tecnologías utilizadas para desarrollar la funcionalidad general de la aplicación son las siguientes:

![JS](./img/logo-javascript-logo-png-transparentj.png)&nbsp;&nbsp;&nbsp;
![NODE](./img/nodejs-horizontal%20(1).svg)
![EXPRESS](./img/expressjs-ar21%20(1)%20(1).svg)&nbsp;&nbsp;
![JWT](./img/icons8-json-web-token-48.png)

![MONGOCOMPASS](./img/mongodb-compass.svg)&nbsp;&nbsp;&nbsp;&nbsp;
![MONGODB](./img/MongoDB_ForestGreen-159x40-9f64cd3.png)
![MONGOOSE](./img/Mongoose.js%20(2).png)

### Node.js
Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Permite ejecutar código JavaScript en el lado del servidor, lo que lo hace ideal para el desarrollo de aplicaciones web y APIs. Algunas de sus características son:

* JavaScript en el Servidor: Node.js permite utilizar JavaScript tanto en el lado del cliente como en el servidor, lo que simplifica el desarrollo de aplicaciones web completas con un solo lenguaje de programación.
* Event-Driven y Asíncrono: Node.js utiliza un modelo de programación event-driven y asíncrono, lo que significa que puede manejar múltiples solicitudes concurrentes de manera eficiente sin bloquear el subproceso principal.
* NPM (Node Package Manager): Node.js incluye NPM, un administrador de paquetes integrado que permite instalar, administrar y compartir paquetes de código reutilizable de manera sencilla.
* Escalabilidad: Node.js es altamente escalable y puede utilizarse para construir aplicaciones de alta concurrencia y rendimiento, lo que lo hace popular en aplicaciones web en tiempo real y APIs RESTful.

### Express
Express es un marco de aplicación web de Node.js que simplifica el desarrollo de aplicaciones web y APIs. Algunas de sus características son:

* Enrutamiento: Express proporciona un enrutador flexible que permite definir rutas para manejar solicitudes HTTP y responder con contenido dinámico.
* Middleware: Permite la integración de middleware de terceros para agregar funcionalidades adicionales, como manejo de cookies, autenticación y registro de solicitudes.
* Manejo de Solicitudes y Respuestas: Express facilita el manejo de solicitudes y respuestas HTTP mediante métodos y funciones integradas, lo que simplifica la creación de aplicaciones web y APIs robustas.

### MongoDB
MongoDB es una base de datos NoSQL que se basa en un modelo de documentos flexible y escalable. Utiliza un formato de almacenamiento JSON similar a los objetos JavaScript, lo que facilita la integración con aplicaciones desarrolladas en JavaScript. Algunas de sus características principales son:

* Esquema Flexible: A diferencia de las bases de datos relacionales, MongoDB no requiere un esquema fijo, lo que permite adaptarse fácilmente a cambios en los requisitos de datos.
* Escalabilidad Horizontal: MongoDB es altamente escalable y puede distribuirse en múltiples servidores para manejar grandes volúmenes de datos y altas cargas de trabajo.
* Consultas: MongoDB ofrece consultas flexibles y potentes que admiten una variedad de operaciones de consulta, incluidas consultas de rango, búsqueda de texto completo y agregaciones.

### Mongoose
Mongoose es una biblioteca de modelado de objetos MongoDB para Node.js que proporciona una capa de abstracción sobre la base de datos MongoDB. Algunas de sus características son:

* Esquemas y Modelos: Mongoose permite definir esquemas de datos estructurados y crear modelos basados en estos esquemas, lo que facilita la interacción con la base de datos.
* Validación de Datos: Proporciona funciones de validación de datos integradas para garantizar que los datos ingresados cumplan con los requisitos especificados.
* Consultas Asíncronas: Mongoose admite consultas asíncronas que aprovechan las características de JavaScript asincrónico y permiten realizar operaciones de base de datos de manera eficiente.

### Mongo Compass
MongoDB Compass es una interfaz gráfica de usuario (GUI) para MongoDB que permite visualizar y manipular datos de manera intuitiva. Algunas de sus características son:

* Exploración de Datos: Compass permite explorar fácilmente las colecciones de la base de datos, ver documentos individuales y ejecutar consultas ad hoc.
* Visualización de Esquemas: Proporciona una vista gráfica de los esquemas de la base de datos, lo que facilita la comprensión de la estructura de los datos.
* Creación de Consultas: Permite construir consultas utilizando una interfaz visual y ver los resultados en tiempo real.

### Bcrypt
Bcrypt es una biblioteca que proporciona funciones seguras de hashing de contraseñas para proteger las contraseñas almacenadas en tu base de datos. Utiliza un algoritmo de hashing adaptativo que agrega una capa adicional de seguridad al generar un hash de la contraseña del usuario. Algunas de sus características principales son:

* Seguridad Robusta: Bcrypt utiliza un algoritmo de hashing lento y deliberadamente intensivo en recursos, lo que lo hace altamente resistente a los ataques de fuerza bruta y de diccionario.
* Salting Automático: Bcrypt incorpora automáticamente un valor de sal único en cada hash de contraseña que genera. Esto previene ataques de tabla arcoíris y hace que cada hash sea único, incluso si las contraseñas son idénticas.
* Facilidad de Uso: Bcrypt proporciona una interfaz simple para generar y verificar contraseñas hash, lo que facilita su integración en tus aplicaciones.
* Escalabilidad: Aunque es lento a propósito, Bcrypt sigue siendo lo suficientemente rápido como para escalar en aplicaciones de producción sin afectar significativamente el rendimiento del servidor.

### JWT (JSON Web Token)
JSON Web Token (JWT) es un estándar abierto (RFC 7519) que define una forma compacta y autónoma para transmitir información de forma segura entre partes como un objeto JSON. Es especialmente útil en entornos de autenticación y autorización, ya que permite generar tokens firmados que pueden ser verificados y confiables, lo que garantiza la integridad de los datos transmitidos. En esta API, JWT se utiliza para la autenticación de usuarios, proporcionando una capa adicional de seguridad al proteger las rutas y recursos sensibles.

### Multer
Multer es un middleware de manejo de formularios para Node.js que se utiliza principalmente para el manejo de archivos en aplicaciones web. Permite procesar datos de formulario en formato multipart/form-data, que es comúnmente utilizado para la carga de archivos. En esta API, Multer facilita la gestión de archivos multimedia, como imágenes o documentos, permitiendo a los usuarios cargar y almacenar archivos de manera segura y eficiente.

### Validator
Validator es una biblioteca de validación de datos para JavaScript y Node.js que ofrece una forma sencilla y robusta de validar y sanear datos de entrada en aplicaciones web y API RESTful. Proporciona una serie de funciones y métodos para verificar la integridad y el formato de los datos, como la validación de correos electrónicos, números de teléfono, URL, etc. En esta API, Validator se utiliza para garantizar que los datos proporcionados por los usuarios cumplan con los requisitos y restricciones establecidos, mejorando así la seguridad y la fiabilidad de la aplicación.

### Arquitectura de Funciones Asíncronas
La arquitectura de funciones asíncronas en esta API aprovecha las capacidades de JavaScript y Node.js para manejar tareas no bloqueantes de manera eficiente. Al utilizar funciones asíncronas y el sistema de promesas de JavaScript, la API puede realizar operaciones de E/S (entrada/salida), como consultas a la base de datos o la lectura de archivos, de manera no bloqueante, lo que mejora la escalabilidad y la capacidad de respuesta del sistema. Esto permite manejar múltiples solicitudes simultáneas de manera eficiente, optimizando el rendimiento y la experiencia del usuario.

## Arquitectura de Base de Datos

La base de datos en MongoDB está diseñada para ofrecer una estructura flexible y escalable, adaptada a las necesidades del negocio. Aunque no sigue un modelo relacional, su organización permite un control eficiente de las consultas y peticiones realizadas por los usuarios. La estructura se adapta a la lógica de negocio, proporcionando un registro completo de los datos necesarios para gestionar la plataforma, incluyendo información sobre usuarios registrados, publicaciones, relaciones de seguimiento, y otros elementos relevantes para el funcionamiento de la aplicación.


# English 

## Summary

Spotify Clone is a project aimed at developing the technology to implement the backend software for a fictitious music streaming application similar to Spotify. Keeping in mind the specific requirements of such applications, users will be able to enjoy all the functionalities typical of music streaming platforms.

Furthermore, this project aims to showcase skills in utilizing frameworks like MongoDB and libraries and dependencies such as Multer, Validator, Moment, etc.

## Objectives
The objective is to create the necessary software infrastructure for the backend of a music streaming application with a focus on scalability, maintainability, and performance. This includes database management, server-side logic, API interfaces, architecture, and servers.

To achieve this, we will implement the Model-View-Controller (MVC) design pattern, offering a software solution that not only considers code architecture but also the inherent logic of a music streaming platform.

## Technologies
The technologies used for developing the general functionality of the app are as follows:

![JS](./img/logo-javascript-logo-png-transparentj.png)&nbsp;&nbsp;&nbsp;
![NODE](./img/nodejs-horizontal%20(1).svg)
![EXPRESS](./img/expressjs-ar21%20(1)%20(1).svg)&nbsp;&nbsp;
![JWT](./img/icons8-json-web-token-48.png)

![MONGOCOMPASS](./img/mongodb-compass.svg)&nbsp;&nbsp;&nbsp;&nbsp;
![MONGODB](./img/MongoDB_ForestGreen-159x40-9f64cd3.png)
![MONGOOSE](./img/Mongoose.js%20(2).png)

### Node.js
Node.js is a JavaScript runtime environment based on Google Chrome's V8 engine. It allows executing JavaScript code on the server-side, making it ideal for web application and API development. Some of its features include:

* Server-side JavaScript: Node.js enables the use of JavaScript on both the client and server sides, simplifying the development of full-stack web applications with a single programming language.
* Event-Driven and Asynchronous: Node.js utilizes an event-driven and asynchronous programming model, allowing it to handle multiple concurrent requests efficiently without blocking the main thread.
* NPM (Node Package Manager): Node.js includes NPM, an integrated package manager that allows easy installation, management, and sharing of reusable code packages.
* Scalability: Node.js is highly scalable and can be used to build high-concurrency and high-performance applications, making it popular in real-time web applications and RESTful APIs.

### Express
Express is a web application framework for Node.js that simplifies the development of web applications and APIs. Some of its features include:

* Routing: Express provides a flexible router that allows defining routes to handle HTTP requests and respond with dynamic content.
* Middleware: It enables the integration of third-party middleware to add additional functionalities such as cookie handling, authentication, and request logging.
* Request and Response Handling: Express facilitates handling HTTP requests and responses using built-in methods and functions, simplifying the creation of robust web applications and APIs.

### MongoDB
MongoDB is a NoSQL database that is based on a flexible and scalable document model. It uses a JSON-like storage format similar to JavaScript objects, making it easy to integrate with JavaScript-based applications. Some of its key features include:

* Flexible Schema: Unlike relational databases, MongoDB does not require a fixed schema, allowing it to easily adapt to changes in data requirements.
* Horizontal Scalability: MongoDB is highly scalable and can be distributed across multiple servers to handle large volumes of data and high workloads.
* Queries: MongoDB offers flexible and powerful queries that support a variety of query operations, including range queries, full-text search, and aggregations.

### Mongoose
Mongoose is an object modeling library for MongoDB in Node.js that provides an abstraction layer over the MongoDB database. Some of its features include:

* Schemas and Models: Mongoose allows defining structured data schemas and creating models based on these schemas, making it easier to interact with the database.
* Data Validation: It provides built-in data validation functions to ensure that the entered data meets the specified requirements.
* Asynchronous Queries: Mongoose supports asynchronous queries that leverage the asynchronous nature of JavaScript, allowing efficient database operations.

### MongoDB Compass
MongoDB Compass is a graphical user interface (GUI) for MongoDB that allows visualizing and manipulating data intuitively. Some of its features include:

* Data Exploration: Compass allows easy exploration of database collections, viewing individual documents, and running ad-hoc queries.
* Schema Visualization: It provides a graphical view of the database schemas, making it easier to understand the data structure.
* Query Building: It allows building queries using a visual interface and viewing results in real-time.

### Bcrypt
Bcrypt is a library that provides secure password hashing functions to protect passwords stored in your database. It uses an adaptive hashing algorithm that adds an additional layer of security by generating a hash of the user's password. Some of its key features include:

* Robust Security: Bcrypt uses a deliberately slow and resource-intensive hashing algorithm, making it highly resistant to brute force and dictionary attacks.
* Automatic Salting: Bcrypt automatically incorporates a unique salt value into each password hash it generates. This prevents rainbow table attacks and ensures that each hash is unique, even if the passwords are identical.
* Ease of Use: Bcrypt provides a simple interface for generating and verifying password hashes, making it easy to integrate into your applications.
* Scalability: Although intentionally slow, Bcrypt is still fast enough to scale in production applications without significantly affecting server performance.

### JWT (JSON Web Token)
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way to securely transmit information between parties as a JSON object. It is especially useful in authentication and authorization environments, as it allows generating signed tokens that can be verified and trusted, ensuring the integrity of transmitted data. In this API, JWT is used for user authentication, providing an additional layer of security by protecting sensitive routes and resources.

### Multer
Multer is a form handling middleware for Node.js that is primarily used for handling files in web applications. It allows processing form data in multipart/form-data format, which is commonly used for file uploads. In this API, Multer facilitates the management of multimedia files, such as images or documents, allowing users to upload and store files securely and efficiently.

### Validator
Validator is a data validation library for JavaScript and Node.js that offers a simple and robust way to validate and sanitize input data in web applications and RESTful APIs. It provides a range of functions and methods for checking the integrity and format of data, such as email validation, phone numbers, URLs, etc. In this API, Validator is used to ensure that data provided by users meets the specified requirements and restrictions, thus enhancing the security and reliability of the application.

### Asynchronous Function Architecture
The asynchronous function architecture in this API leverages the capabilities of JavaScript and Node.js to handle non-blocking tasks efficiently. By using asynchronous functions and JavaScript's promise system, the API can perform I/O (input/output) operations, such as database queries or file reading, in a non-blocking manner, improving scalability and responsiveness. This allows handling multiple concurrent requests efficiently, optimizing performance and user experience.

## Database Architecture

The MongoDB database is designed to offer a flexible and scalable structure tailored to the business needs. Although it does not follow a relational model, its organization allows efficient control of queries and requests made by users. The structure adapts to the business logic, providing a complete record of the data necessary to manage the platform, including information about registered users, publications, follow relationships, and other elements relevant to the operation of the application.
