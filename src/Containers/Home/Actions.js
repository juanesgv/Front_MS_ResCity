import { EnviromentVariables } from '../../Constants/Constants';
import { createAxiosInstance, createAxiosInstance_OpenWeather, createAxiosInstance_Sensors, createAxiosInstance_Variables } from '../../Shared/helper';

export function GetDataFromOpenWeather() {
    return new Promise((resolve, reject) => {
        createAxiosInstance_OpenWeather().get('/data/2.5/weather', { params: { q: 'cali', appid: EnviromentVariables.API_KEY_OPEN_WEATHER } })
            .then(res => {
                let data = {
                    humidity: res.data.main.humidity,
                    temp: res.data.main.temp
                }
                return resolve(data);
            }).catch(err => {
                return reject(err);
            })
    })
}

export function postUsers(data) {
    return new Promise((resolve, reject) => {
        try {
            createAxiosInstance().post(`/api/user`, data)
                .then(Response => {
                    console.log(Response)
                    return resolve(Response)
                }).catch(err => {
                    console.log(err.response.data)
                    return reject(err)
                })
        } catch {
            console.log(console.error())
        }

    })
}

export function getSensors() {


    let body = {
        "seleccionar": "ID_NODO_SENSOR, LATITUD, LONGITUD",
        "condicion": {

        },
        "agrupar": "",
        "ordenar": ""
    }

    return new Promise((resolve, reject) => {
        try {
            createAxiosInstance_Sensors().post(`/api/nodoSensor/get`, body)
                .then(Response => {
                    return resolve(Response.data.data)
                }).catch(err => {
                    return reject(err)
                })
        } catch {
            console.log(console.error())
        }

    })
}

export function getDatos() {

    let body = {
        "seleccionar": "ID_NODO_SENSOR, ID_VARIABLE, AVG(VALOR_DATO) AS PROM_VALOR_DATO ",
        "condicion": {

        },
        "agrupar": "ID_NODO_SENSOR, ID_VARIABLE",
        "ordenar": ""
    }

    return new Promise((resolve, reject) => {
        try {
            createAxiosInstance_Variables().post(`/api/datosNodoSensor/get`, body)
                .then(Response => {
                    return resolve(Response.data.data)
                }).catch(err => {
                    return reject(err)
                })
        } catch {
            console.log(console.error())
        }

    })
}

export function getVariablesInformation() {

    let body = {
        "seleccionar":"ID_VARIABLE, NOMBRE_VARIABLE, UNIDAD_MEDIDA",
        "condicion":{
        
        },
        "agrupar":"",
        "ordenar":""
    }

    return new Promise((resolve, reject) => {
        try {
            createAxiosInstance_Variables().post(`/api/variablesNodoSensor/get`, body)
                .then(Response => {
                    return resolve(Response.data.data)
                }).catch(err => {
                    return reject(err)
                })
        } catch {
            console.log(console.error())
        }

    })
}

export function getInformationSensor(sensor, variables){
    console.log(sensor)
    console.log(variables)
}