import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoiam9zZWRib2xpdmFybWFmcm9udGVuZDgyIiwiYSI6ImNsMmgybDVkZTAwY3IzY3A4ZGN5MHRrMXEifQ.zbiGMxUeuHIR2wEnpnhQZg'
    }
})

export default directionsApi;