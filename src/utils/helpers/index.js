/**
 * 
 * @param {*} constants 
 */
export function createConstants(...constants) {

    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

/**
 * 
 * @param {*} initialState 
 * @param {*} reducerMap 
 */
export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function pokemonId(url) {

    url = url.replace(/\/$/, "");

    return url.split('/').pop();
}