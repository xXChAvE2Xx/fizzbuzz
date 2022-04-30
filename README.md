# FIZZBUZZ API
La siguiente API devuelve un listado de explorers, la cantidad de explorers que existen en una mission y se puede solicitar solamente los usernames. 
Las dos misiones que se aceptan son **node y java**.

## Descargar
### Como Zip
1. Dar clic en el botón **Code** (botón verde). <br><br>
![image](https://user-images.githubusercontent.com/54995852/166087539-00642130-4945-4cb8-ba25-b39ab9c70679.png)
2. Luego en Download ZIP <br> <br>
![image](https://user-images.githubusercontent.com/54995852/166087555-66743b43-a27d-4bb1-8588-4847aa94c041.png)

### Clonar repo
#### Requisitos:
Tener instalado GIT en su última versión (<a href="https://git-scm.com/downloads" target="_blank">Descargar Git</a>)
1. Dar clic en el botón **Code**
2. Copiar la URL de la pestaña HTTPS<br> <br>
![image](https://user-images.githubusercontent.com/54995852/166087622-32797e5d-29ca-433c-8608-b6d2f5ac6482.png)
3. Luego abrir git bash en el directorio donde queremos clonar el repo<br><br>
![image](https://user-images.githubusercontent.com/54995852/166087765-ad1ce78b-85dc-412b-976f-b833a812b378.png)
5. Utilizar el siguiente comando para clonar repo.<br>
`$ git clone <url>`

## Instalación (Devs)
- **Jest:** Jest es un marco de pruebas de JavaScript con un enfoque en la simplicidad.
- **eslint:** ESLint analiza estáticamente su código para encontrar rápidamente los problemas.
- **Express:** Express es un marco de trabajo de aplicaciones web Node.js mínimo y flexible que proporciona un sólido conjunto de características para aplicaciones web y móviles.
```
$ npm install --save-dev jest
$ npm install eslint --save-dev
$ npm install express --save
```

## Documentación
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Jest](https://jestjs.io/es-ES/docs/getting-started)
- [Express](https://expressjs.com/en/starter/installing.html)

## Endpoints

| Endpoint                                        | Response                                                                    |
| ------------------------------------------------| ----------------------------------------------------------------------------|
| `localhost:3000/v1/explorers/:mission`          | Obtiene la lista de explorers en la misión que enviaste (node o java)       |
| `localhost:3000/v1/explorers/amount/:mission`   | Obtiene la cantidad de explorers según la misión que enviaste (node o java) |
| `localhost:3000/v1/explorers/usernames/:mission`| Obtiene la lista de usernames en la misión que enviaste (node o java)       |

## Correr Pruebas
```
$ npm test

```

## Correr
Para poder inicializar la API, se debe correr el siguiente comando dentro de nuestro proyecto: 
```
$ node .\lib\server.js
```
El puerto a utilizar es el: `3000`<br>

## Pruebas
Para saber que nuestro servidor está corriendo, tenemos que acceder a `localhost:3000/`

![image](https://user-images.githubusercontent.com/54995852/166087224-0b544de3-61f9-4ed3-b09d-7089633d44a0.png)

Al ver el mensaje anterior, nuestra app está funcionando correctamente.
Despues de corroborar que nuestra servidor esta corriendo, podremos realizar peticiones a la API.

- `localhost:3000/v1/explorers/node` <br><br>
![image](https://user-images.githubusercontent.com/54995852/166087362-9f7479ed-e720-40f7-876f-6d76341c8b55.png)

- `localhost:3000/v1/explorers/amount/node` <br><br>
![image](https://user-images.githubusercontent.com/54995852/166087391-358a4bb7-e8eb-418c-a4d6-4aa205272e0a.png)

- `localhost:3000/v1/explorers/usernames/node` <br><br>
![image](https://user-images.githubusercontent.com/54995852/166087435-5ec0abf5-6dcd-4749-8780-89bf0f1422ff.png)



## 🔙 [Regresar](https://github.com/xXChAvE2Xx/playbook/tree/main/weekly_mission_4)
![Spider-Man](https://media.giphy.com/media/QYkX9IMHthYn0Y3pcG/giphy.gif)
## By: Raul Chavez
