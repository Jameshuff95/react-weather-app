export const DEFAULT_PLACE = {
    name:"North Middletown",
    place_id:"north-middletown-4302734",
    adm_area1:"Kentucky",
    adm_area2:"Bourbon",
    country:"United States of America",
    lat:"38.14508N",
    lon:"84.11132W",
    timezone:"America/New_York",
    type:"settlement"
};

export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca'
};

export const UNITS = {
    metric: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'm/s',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    us: {
        temperature: '°F',
        precipitation: 'in/hr',
        wind_speed: 'm/s',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    uk: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    ca: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'km/h',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
};