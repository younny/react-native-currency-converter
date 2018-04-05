import axios from 'axios'

const BASE_URL = 'https://api.github.com'

const create = (baseURL=BASE_URL) => {
    let instance = axios.create({ baseURL })

    instance.interceptors.request.use((config) => config, (error) => Promise.reject(error))

    instance.interceptors.response.use((response) => response, (error) => Promise.reject(error))
    //instance.defaults.headers.common['Authorization'] = ''

    const getRates = () => {
        return instance.get(`${baseURL}/users`)
                .then(response => ({ response }))
                .catch(error => ({ error }))
    }

    return {
        getRates
    }
}

export default { create }