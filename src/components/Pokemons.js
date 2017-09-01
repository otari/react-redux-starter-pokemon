import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import AppStyles from '../containers/App.scss';
import Avatar from './Avatar';
import Pokemon from './Pokemon';

const filterPokemons = (pokemons, filter) => {
    return pokemons.filter(pokemon => {
        if (!filter.keyword)
            return pokemon;
        return pokemon.name.indexOf(filter.keyword) >= 0;
    })
}
const Pokemons = (props) => (
    <div>
        {props.pokemonsAll.fetching || !props.pokemonsAll.data.length ?
            <div className={`${AppStyles.alert} ${AppStyles['alert-default']}`} role="alert">
                Please wait, loading...
            </div>
            :
            (props.pokemons.length ?
                <div className={`${AppStyles.panel} ${AppStyles.clearfix} ${AppStyles['panel-default']}`}>
                    <div className={AppStyles['panel-body']}>
                        <div className={AppStyles.row}>
                            {_.map(props.pokemons, (pokemon, index) => (
                                <Pokemon key={index} id={index + 1} pokemon={pokemon} />
                            ))
                            }
                        </div>
                    </div>
                </div>
                :
                <div className={`${AppStyles.alert} ${AppStyles['alert-warning']}`} role="alert">
                    No Pokemons Found For Keywrod <strong>{props.searchFilter.keyword}</strong>
                </div>)

        }
    </div>
);

export default connect(
    (state) => ({
        searchFilter: state.searchFilter,
        pokemonsAll: state.pokemonsList,
        pokemons: filterPokemons(state.pokemonsList.data, state.searchFilter)
    }))(Pokemons);
