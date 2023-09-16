# llévele, llévele ♥︎

## Welcome!

## Índice

* [1. Llévele llévele app](#1-Llévele-llévele-app)
* [2. Documentación Técnica del Backend](#2-Documentación-Técnica-del-Backend)
* [3. Documentación Funcional](#3-Documentación-Funcional)
* [4. Instalación](#4-Instalación)

![llevele-llevele](https://raw.githubusercontent.com/MiriamNM/llevele-llevele-app/main/public/src/Assets/llevele.png)

## 1. llévele llévele app
Es una aplicación que ayuda a Administradores de negocios, vendedores o consumidores de la app a hacer realidad sus compras, la realización de catalogos o ver los productos que genera cada vendedor desde la administración. 


## 2. Documentación Técnica del Backend
La aplicación esta compuesta por la arquitectura del backend desde las primeras carpetas y en la carpeta public se encuentra el frontend. 

Todo el diseño del proyecto se realizo en ![Diagrama](https://raw.githubusercontent.com/MiriamNM/llevele-llevele-app/main/public/src/Assets/diagrama.png). 

### Stack
- Docker
- Docker compose
- Node.js
- Express
- postgres
- sequelize
- jsonwebtoken
- cors
- pg
- Jest
- Eslint
- Prettier
- Visual Studio Code

## 3. Documentación Funcional:
En la aplicación puedes hacer uso de ella como Vendedor, Consumidor o Administrador. 

### Si eres vendedor:
Al loguearte correctamente puedes crear nuevos productos, ver todos los productos y filtrarlos por nombre del producto.
Solo se ven los productos que tu has registrado.
![AppVendor](https://raw.githubusercontent.com/MiriamNM/llevele-llevele-app/main/public/src/Assets/AppVendor.png)

### Si eres Comprador:
Puedes buscar los productos por nombre o sku. Ademas de que puedes filtrar por nombre o precio.
![AppCustomer](https://raw.githubusercontent.com/MiriamNM/llevele-llevele-app/main/public/src/Assets/AppCustomer.png)

### Si eres Administrador:
Puedes ver todos los productos y tambien buscar por vendedor y filtrar los productos por precio. 
![AppAdmin](https://raw.githubusercontent.com/MiriamNM/llevele-llevele-app/main/public/src/Assets/AppAdmin.png)

## 4. Instalación:
1. Haz las instalaciones de todo el stack tecnológico.
2.  En la terminal del editor o en una terminal en la carpeta principal de la aplicación pon:
    - git clone https://github.com/MiriamNM/llevele-llevele-app.git
    - npm i
    - docker-compose build 
    - docker-compose up 
    - O este comando: docker-compose up --build

** NOTA: Necesitas tener corriendo pgAdmin 4 para que el Frontend funcione correctamente y puedas usar la DB. En el Readme de Public esta la instalacion del frontend.

** Siguientes pasos
- Hacer test de cada componente.
- Poner más ciberseguridad.
- Ver metodos de pago. 
