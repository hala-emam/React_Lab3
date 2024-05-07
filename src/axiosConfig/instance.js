import axios from 'axios'

const axiosInstance=axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key:"c63490792447aeca84223e0c1bc9ebfb",
    }
})
export default axiosInstance;