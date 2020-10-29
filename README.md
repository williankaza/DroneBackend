# Backend para simulação do Projeto PainelDrone

Para subir o projeto, rode o comando: 

### Comando Yarn
```
yarn run dev:server
``` 

### Comando npm
```
npm run dev:server
```

O projeto irá subir na porta `4300`.

----

## Exemplos de requisição:

Para criar o Drone: POST - `localhost:4300/drone`

Body:
```
{
    "idDrone": 2,
    "latitude": 25.9987,
    "longitude": -130.2321,
    "temperatura": 30,
    "umidade": 72,
    "dataAtualizacao": "2020-10-30T01:00:00",
    "rastreamento": true
}
```

Retorno:
```
{
    "idDrone": 2,
    "medicoes": [
        {
            "idMedicao": 1,
            "latitude": 25.9987,
            "longitude": -130.2321,
            "temperatura": 30,
            "umidade": 72,
            "dataAtualizacao": "2020-10-30T01:00:00",
            "rastreamento": true
        }
    ]
}
```

Para buscar os Drones: GET - `localhost:4300/drones`

Retorno: 
```
{
    "idDrone": 2,
    "medicoes": [
        {
            "idMedicao": 1,
            "latitude": 25.9987,
            "longitude": -130.2321,
            "temperatura": 30,
            "umidade": 72,
            "dataAtualizacao": "2020-10-30T01:00:00",
            "rastreamento": true
        },
        {
            "idMedicao": 2,
            "latitude": 57.641,
            "longitude": -90.7641,
            "temperatura": 20,
            "umidade": 80,
            "dataAtualizacao": "2020-10-29T01:00:00",
            "rastreamento": true
        }
    ]
}

```

Para incluir uma nova medição para um Drone especifico: POST - `localhost:4300/drone/:idDrone/medicoes`. 
Onde `:idDrone` é o código do Drone

Body:
```
{
    "latitude": 74.6410,
    "longitude": -10.7641,
    "temperatura": 40,
    "umidade": 98,
    "dataAtualizacao": "2020-10-29T01:00:00",
    "rastreamento": true
}
```

Retorno:
```
{
    "idDrone": 2,
    "medicoes": [
        {
            "idMedicao": 1,
            "latitude": 57.641,
            "longitude": -90.7641,
            "temperatura": 20,
            "umidade": 80,
            "dataAtualizacao": "2020-10-29T01:00:00",
            "rastreamento": true
        },
        {
            "idMedicao": 2,
            "latitude": 74.641,
            "longitude": -10.7641,
            "temperatura": 40,
            "umidade": 98,
            "dataAtualizacao": "2020-10-29T01:00:00",
            "rastreamento": true
        },
        {
            "idMedicao": 3,
            "latitude": 74.641,
            "longitude": -10.7641,
            "temperatura": 40,
            "umidade": 98,
            "dataAtualizacao": "2020-10-29T01:00:00",
            "rastreamento": true
        }
    ]
}
```