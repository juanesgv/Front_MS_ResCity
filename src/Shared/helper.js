import axios from 'axios';
import {EnviromentVariables} from '../Constants/Constants';

export const createAxiosInstance = (config) => {
    let minConfig = {
        baseURL: EnviromentVariables.API_HOST_MS_NOTIFICATIONS,
    }
    if (config) {
        minConfig = { ...minConfig, ...config }
    }

    return axios.create(minConfig) 
}

export const createAxiosInstance_OpenWeather = (config) => {
    let minConfig = {
        baseURL: EnviromentVariables.API_HOST_OPEN_WEATHER,
    }
    if (config) {
        minConfig = { ...minConfig, ...config }
    }

    return axios.create(minConfig)
}

export const createAxiosInstance_Sensors = (config) => {
    let minConfig = {
        baseURL: EnviromentVariables.API_HOST_MS_SENSORS,
    }
    if (config) {
        minConfig = { ...minConfig, ...config }
    }

    return axios.create(minConfig)
}

export const createAxiosInstance_Variables = (config) => {
    let minConfig = {
        baseURL: EnviromentVariables.API_HOST_MS_VARIABLES,
    }
    if (config) {
        minConfig = { ...minConfig, ...config }
    }

    return axios.create(minConfig)
}