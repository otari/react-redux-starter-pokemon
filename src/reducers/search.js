import { createReducer } from '../utils/helpers';

export default createReducer({ keyword: null }, {
    ['POKEMON_LIST_FILTER']: (state, payload) => {
        return Object.assign({}, state, {
            keyword: payload.keyword || null
        })
    },
});
