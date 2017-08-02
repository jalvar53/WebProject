# Cool Image Manager

By: Jose Luis Alvarez Herrera - jalvar53@eafit.edu.co

# 1. Descripción de la Aplicación:

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) en la versión 1.2.0.

Aplicación web que permite gestionar archivos multimedia.

```
$ ng new --project-name
```

(este generador, crea una app base ejemplo para Angular 2)

# 2. Análisis

## 2.1 Requisitos Funcionales:

1. Crear, actualizar, borrar y leer archivos multimedia.
2. Buscar archivos multimedia por nombre.
3. Crear, actualizar y eliminar la cuenta propia del usuario.
4. Autenticarse contra la base de datos.

## 2.2 Definición de tecnología de desarrollo y ejecución para la aplicación:

* Lenguaje de Programación: TypeScript
* Framework web Backend: NodeJS - Express
* Framework web Frontend: Angular 2
* Base de Datos: MongoDB
* Web App Server: NodeJS
* Web Server: Apache Web Server

## Ambiente de Desarrollo, Pruebas y Producción:

## Desarrollo:

1. Instalar Node.js. Source: https://nodejs.org/en/

2. Instalar JetBrains WebStorm. Source: https://www.jetbrains.com/webstorm/

3. Descargar el proyecto de la web page en la branch dev y el servidor intermediario en master:

```
  mkdir WebProject
  cd WebProject
  git clone https://github.com/jalvar53/WebProject.git
  git checkout dev
  cd ..
  mkdir IntermediateServer
  cd IntermediateServer
  git clone https://github.com/jalvar53/web-intermediate-server.git  
```

4. Instalar las dependencias en cada proyecto:

```
  npm install
```

5. Para ejecutar el servidor intermedio:

```
  nodemon server.js
```

6. Para ejecutar el live preview del proyecto web con Angular:

```
  ng serve
```

## Pruebas:

En el DCA:

1. Se instala nvm local para el usuario:

2. Se instala la version de node:

```
  $ nvm install v7.7.4
```

3. Se instala el servidor mongodb

Como root:

```
  # yum install mongodb-server -y
```

Ejecutarlo como servicio:

```
  # systemctl enable mongod
  # systemctl start mongod
```

4. Se instala Apache Web Server: 

```
  # yum install httpd
```

5. Se configura el VirtualHost con el puerto a usar y la ruta de los archivos 
estáticos a servir en el archivo de configuración: /etc/httpd/conf/httpd.conf.
La ruta estándar para almacenar los archivos estáticos es /var/www/html/[webSite]/public_html

```
  <VirtualHost *:80> // Dirección IP y puerto (*  por defecto corresponde localhost)
    ServerAdmin webmaster@localhost // Email del admin
    DocumentRoot /var/www/html // Ruta a servir los archivos estáticos
    ErrorLog ${APACHE_LOG_DIR}/error.log // Log de Errores
    CustomLog ${APACHE_LOG_DIR}/access.log combined // Log de Eventos
</VirtualHost>
```

6. Se descarga el proyecto del branch de test:
```
  git clone https://github.com/jalvar53/WebProject.git
  git checkout test
```

7. Se instalan las dependencias y se hace build del proyecto:
```
  npm install
  ng build
```

8. Se mueven los archivos compilados de la carpeta dist/ del proyecto hacia la ruta
que sirve el servidor Apache y se reinicia el servidor Apache:

```
  sudo cp dist/* /var/www/[webSite]/public_html
  sudo apachectl restart
```

9. Se descarga el proyecto del servidor intermedio en el branch test y se ejecuta el servidor intermedio:

```
  git clone https://github.com/jalvar53/web-intermediate-server.git
  git checkout test
  npm run start
```

10. Acceder a la ruta 10.131.137.157 para usar la aplicación web.


# 3. Diseño:

## 3.1 Modelo de Datos:
```
user {
    _id: String,
    username: String,
    password: String,
    email: String
}

media {
    _id: String,
    mediaName: String,
    url: String,
    description: String,
    author: String,
    genre: String,
    privacy: String
}
```

## 3.2 Servicios Web:

```
/* Servicio Web: Inserta un registro de usuario a la base de datos
Método: POST
URI: /user/new

Datos Petición: 

  {
       "_id": [_id],
       "username": [username],
       "password": [password],
       "email": [email]
   }

Datos Respuesta:

  {
    message: 'ok'
  }

*/

/* Servicio Web: Revisa si un usuario existe en la base de datos
Método: GET
URI: /user/:username

Datos Petición: /user/:username

Datos Respuesta:

  {
    "_id": [userId],
    "username": [enteredUsername],
    "password": [enteredPassword],
    "email": [enteredEmail],
    "__v": 0
  }
  
*/

/* Servicio Web: Remueve un registro de usuario de la base de datos
Método: DELETE
URI: /user/edit/:_id

Datos Petición: /user/edit/:_id

Datos Respuesta:

  {
    message: 'ok'
  }

*/

/* Servicio Web: Actualiza un registro de usuario de la base de datos
Método: PUT
URI: /user/edit/:_id

Datos Petición: 

  {
       "_id": [_id],
       "username": [username],
       "password": [password],
       "email": [email]
   }
   
Datos Respuesta:

  {
       "_id": [_id],
       "username": [username],
       "password": [password],
       "email": [newEmail]
   }
   
*/

/* Servicio Web: Retorna una lista de todos los registros de imagenes de la base de datos
Método: GET
URI: /media

Datos Petición: /media

Datos Respuesta: 

Lista de JSON en la forma

[
  {
    _id: String,
    mediaName: String,
    url: String,
    description: String,
    author: String,
    genre: String,
    privacy: String
  }
]

*/

/* Servicio Web: Inserta un registro de imagen a la base de datos
Método: POST
URI: /create-media/media/new

Datos Petición: /create-media/media/new

  {
    _id: [_id],
    mediaName: [mediaName],
    url: [url],
    description: [description],
    author: [author],
    genre: [genre],
    privacy: [privacy]
  },

Datos Respuesta:

  {
    message: 'ok'
  }
  
*/

/* Servicio Web: Retorna un registro de imagen de la base de datos
Método: GET
URI: /media/:_id

Datos Petición: /media/:_id

Datos Respuesta:

  {
    _id: [_id],
    mediaName: [mediaName],
    url: [url],
    description: [description],
    author: [author],
    genre: [genre],
    privacy: [privacy]
  }
  
*/

/* Servicio Web: Actualiza un registro de imagen a la base de datos
Método: PUT
URI: /media/:_id

Datos Petición: /media/:_id

Datos Respuesta:
 
 {
    _id: [_id],
    mediaName: [newMediaName],
    url: [newUrl],
    description: [newDescription],
    author: [author],
    genre: [newGenre],
    privacy: [newPrivacy]
  }

*/

/* Servicio Web: Remueve un registro de imagen a la base de datos
Método: DELETE
URI: /media/:_id

Datos Petición: 

  {
    _id: [_id],
  }

Datos Respuesta:

  {
    message: 'ok'
  }
  
*/

/* Servicio Web: Retorna un registro de imagen por nombre de la base de datos
Método: GET
URI: /media/byName/:mediaName

Datos Petición: /media/byName/:mediaName

Datos Respuesta:

  { 
    _id: [_id],
    mediaName: [mediaName],
    url: [url],
    description: [description],
    author: [author],
    genre: [genre],
    privacy: [privacy]
  }
  
*/

```

# 4. Desarrollo:

# 5. Implementación o Despliegue (PaaS)

1. El proyecto web en Angular 2 se compila con flags para producción y Ahead-of-Time compilation

```
  ng build --aot --prod
```

2. Se crea un servidor Node.js que sirva los archivos estáticos de la carpeta dist/ 
mediante Express.js y se ejecuta el servidor:

```
  node start server.js
```

3. Se suben los cambios al branch Heroku, previamente enlazado con una cuenta de Heroku y una nueva aplicación en la plataforma:

```
  git add .
  git commit -m "Commit reason"
  git push heroku master
```

Por defecto, las aplicaciónes Node.js desplegadas en Heroku, ejecutan el comando start definido en el package.json del proyecto,
luego el comando "build" y por último el comando postinstall:

```
...
"scripts": {
  ...
  "start": "node server.js",
  "build": "ng build",
  "postinstall": "ng build --aot --prod"
  ...
}
...
```

6. Desplegar el proyecto de servidor intermedio, haciendo el commit correspondiente al branch de Heroku, previamente enlazado con una cuenta de Heroku y una nueva aplicación en la plataforma: 

```
  git add .
  git commit -m "Commit reason"
  git push heroku master
```
