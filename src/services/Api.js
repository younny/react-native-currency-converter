import axios from 'axios'
import AppConfig from '../configs/AppConfig'

const create = (baseURL=AppConfig.baseUrl) => {
    let instance = axios.create({ baseURL })

    instance.interceptors.request.use((config) => config, (error) => Promise.reject(error))

    instance.interceptors.response.use((response) => response, (error) => Promise.reject(error))
    //instance.defaults.headers.common['Authorization'] = ''

    const getRates = () => {
        return instance.get(`${baseURL}/rates`)
                .then(response => ({ response }))
                .catch(error => ({ error }))
    }

    return {
        getRates
    }
}

export default { create }
