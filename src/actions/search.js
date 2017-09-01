export function filterPokemons(keyword) {
    return dispatch => {
        dispatch({ type: 'POKEMON_LIST_FILTER', payload: { keyword: keyword } });
    }
}