import { combineReducers } from 'redux';
import User from './users';
import SideBar from './sidebar';
import PokemonsList from './pokemonsList';
import searchFilter from './search';
export default combineReducers({
    sidebar: SideBar,
    user: User,
    pokemonsList: PokemonsList,
    searchFilter: searchFilter
});