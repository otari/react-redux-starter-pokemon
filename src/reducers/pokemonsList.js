import { createReducer } from '../utils/helpers';
import POKEMONST_LIST_INITIAL_STATE from './states/pokemonsList';

export default createReducer(POKEMONST_LIST_INITIAL_STATE, {
    //We need to implement some dynamic way of generating constants
    //otherwise its really annoying and possible bug source 
    ['POKEMONS_LIST_REQUEST']: (state) => {
        return Object.assign({}, state, {
            count: 0,
            data: [],
            fetching: true,
            fetched: false,
        })
    },
    ['POKEMONS_LIST_REQUEST_SUCCESS']: (state, payload) => {
        return Object.assign({}, state, {
            count: payload.data.count,
            data: payload.data.results,
            fetching: false,
            fetched: true,
        })
    },
    ['POKEMONS_LIST_REQUEST_FAIL']: (state) => {
        return Object.assign({}, state, {
            count: 0,
            data: [],
            fetching: false,
            fetched: true,
        })
    },
});