/**
 * Fetch Pokemons list
 */
export function getPockemonsList(params) {
    return {
        type: 'POKEMONS_LIST_REQUEST',
        payload: {
            options: {
                returnRejectedPromiseOnError: true
            },
            request: {
                params: params,
                method: 'get',
                url: 'pokemon'
            }
        }
    }
}