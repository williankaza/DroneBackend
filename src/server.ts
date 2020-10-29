import express, { request, response } from "express";

const app = express()
app.use(express.json());

var drones: Array<Drone> = []

interface Drone {
    idDrone: string
    medicoes: Array<Medicao>
}

interface Medicao {
    idMedicao: number,
    latitude: number,
    longitude: number,
    temperatura: number,
    umidade: number,
    dataAtualizacao: Date,
    rastreamento: boolean    
}


app.post('/drone/:idDrone/medicoes', (request,response)=>{
    let idMedicao: number = 1
    let drone: Drone
    const { idDrone } = request.params
    const body = request.body
    const indexDrone = drones.findIndex(x => x.idDrone == idDrone)

    if (indexDrone > -1){
        let droneMedicoes = drones[indexDrone].medicoes
        idMedicao = Math.max(...droneMedicoes.map(medicao => medicao.idMedicao))+1

        let novaMedicao: Medicao = {
            idMedicao: idMedicao,
            latitude: body.latitude,
            longitude: body.longitude,
            temperatura: body.temperatura,
            umidade: body.umidade,
            dataAtualizacao: body.dataAtualizacao,
            rastreamento: body.rastreamento
        }
        
        drone = drones[indexDrone]
        drone.medicoes.push(novaMedicao)

        drones[indexDrone] = drone
        
        console.log(drones)
        return response.status(200).json(drone)
    } else {
        return response.status(400).json({ error: 'Não foi encontrado drone com o id passado' })
    }
})


app.post('/drone', (request, response)=>{
    let idMedicao: number = 1
    let drone: Drone
    const body = request.body
    const indexDrone = drones.findIndex(x => x.idDrone == body.idDrone)

    if (indexDrone > -1){
        let droneMedicoes = drones[indexDrone].medicoes
        idMedicao = Math.max(...droneMedicoes.map(medicao => medicao.idMedicao))+1
    }

    let novaMedicao: Medicao = {
        idMedicao: idMedicao,
        latitude: body.latitude,
        longitude: body.longitude,
        temperatura: body.temperatura,
        umidade: body.umidade,
        dataAtualizacao: body.dataAtualizacao,
        rastreamento: body.rastreamento
    }
    if (indexDrone > -1){
        drone = drones[indexDrone]
        drone.medicoes.push(novaMedicao)

        drones[indexDrone] = drone
    } else {
        drone = {
            idDrone: body.idDrone,
            medicoes: [
                novaMedicao
            ]
        }
        drones.push(drone)
    }
    
    console.log(drones)
    return response.status(200).json(drone)
})


app.get('/drones', (request, response)=>{
    return response.json(drones)
})

app.listen(4300, ()=>{
    console.log()
})



