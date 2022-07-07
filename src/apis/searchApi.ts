import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoiam9zZWRib2xpdmFybWFmcm9udGVuZDgyIiwiYSI6ImNsMmgybDVkZTAwY3IzY3A4ZGN5MHRrMXEifQ.zbiGMxUeuHIR2wEnpnhQZg'
    }
})

export default searchApi;