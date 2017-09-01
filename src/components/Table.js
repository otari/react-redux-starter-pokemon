import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import AppStyles from '../containers/App.scss';
import Avatar from './Avatar';
const Table = (props) => (
    <div>
        {props.pokemons.data.length ?
            <div className={`${AppStyles.panel} ${AppStyles['panel-info']}`}>
                <div className={AppStyles['panel-heading']}>
                    Showing {props.pokemons.data.length} pokemons of {props.pokemons.count}
                </div>
                <table className={`${AppStyles.table} ${AppStyles['table-striped']} ${AppStyles['table-hover']}`}>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(props.pokemons.data, (pokemon, index) => (
                            <tr key={index}>
                                <td>
                                    <Avatar pokemon={pokemon} />
                                </td>
                                <td>{pokemon.name}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            : 'Loading...'
        }
    </div>
);

export default connect(
    (state) => ({
        pokemons: state.pokemonsList
    }))(Table);
