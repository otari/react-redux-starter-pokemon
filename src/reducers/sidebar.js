import { createReducer } from '../utils/helpers';
import SIDEBAR_INITIAL_STATE from './states/sidebar';

export default createReducer(SIDEBAR_INITIAL_STATE, {

    ['SIDEBAR_SHOW']: (state) => {
        return Object.assign({}, state, {
            visible: true
        })
    },

    ['SIDEBAR_HIDE']: (state) => {
        return Object.assign({}, state, {
            visible: false
        })
    },
});
