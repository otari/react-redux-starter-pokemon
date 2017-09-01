import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Pokemons from './Pokemons';
import * as PokemonActions from '../actions/pokemons';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
export class Home extends React.Component {

    componentDidMount() {
        //Just to show loading message a little longer :)
        _.delay(() => {
            this.props.actions.pokemons.getPockemonsList({ limit: 100 });
        }, 3000)

    }

    render() {
        return (
            <Pokemons />
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(
    (state) => ({}),
    (dispatch) => ({
        actions: {
            pokemons: bindActionCreators(PokemonActions, dispatch)
        }
    }))(Home);