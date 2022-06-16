import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoianZhbmRyZXMyNDciLCJhIjoiY2w0ZGU5M3RkMDdoMjNqczZ5enNoa2MzMSJ9.Cay8M2afYw9VQK9NLhM5kg'
    }
})  

export default searchApi;