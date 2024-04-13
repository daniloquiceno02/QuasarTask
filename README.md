# Quasar App (task-linktic)

Prueba tecnica Linktic

## Instalar dependecias

```bash
yarn
# or
npm install
```

### Inicie la aplicación en modo de desarrollo (recarga de código activo, informe de errores, etc.)

```bash
quasar dev
```

### Formatear los archivos

```bash
yarn format
# or
npm run format
```

### Cree la aplicación para producción

```bash
quasar build
```

### Personaliza la configuración

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Realiza peticiones en postman

USERS

GET: https://quasartask.onrender.com/users

POST: https://quasartask.onrender.com/users body.json {
"name": "",
"identification": "",
"phone": "",
"address": "",
"username": "",
"password": ""
},

PUT: https://quasartask.onrender.com/users/{ID} body.json {
"name": "Danilo Quiceno Hernandez",
"identification": "1002934620",
"phone": "3108487252",
"address": "cra 4 # 1-17",
"username": "1002",
"password": "1002Da"
},

DELETE: https://quasartask.onrender.com/users/{ID}

TASK

GET: https://quasartask.onrender.com/task

POST: https://quasartask.onrender.com/task body.json {
"tittle": "Hacer la tarea",
"description": "si puedes hacer la tarea golearas el dia y asi mantendras tu vida."
}

PUT: https://quasartask.onrender.com/users/{ID} body.json {
"tittle": "Hacer la tarea",
"description": "si puedes hacer la tarea golearas el dia y asi mantendras tu vida."
}

DELETE: https://quasartask.onrender.com/users/{ID}
