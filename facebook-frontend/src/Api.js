import axios from 'axios'

const instance = axios.create({
    baseURL:"https://facebookbackend.herokuapp.com"
})

export default instance