import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoianZhbmRyZXMyNDciLCJhIjoiY2w0ZGU5M3RkMDdoMjNqczZ5enNoa2MzMSJ9.Cay8M2afYw9VQK9NLhM5kg'
    }
})  

export default directionsApi;