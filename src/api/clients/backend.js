import axios from 'axios';

const config = {
    baseURL: 'http://pokeapi.co/api/v2/',
    responseType: 'json',
    headers: { 'Content-type': 'application/json' },
};

const backend = axios.create(config);

export default backend;