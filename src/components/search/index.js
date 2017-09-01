import React from 'react'
import { connect } from 'react-redux';
import styles from '../../containers/App.scss';
import * as PokemonActions from '../../actions/pokemons';
import { bindActionCreators } from 'redux';
import * as SearchAction from '../../actions/search';

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.hanldeFilter = _.debounce(this.hanldeFilter, 500);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ value: '' })
        this.props.actions.search.filterPokemons("");
    }

    hanldeFilter(value) {
        this.props.actions.search.filterPokemons(value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} noValidate className={`${styles['navbar-form']} ${styles['navbar-left']}`} role="search">
                {this.state.keyword}
                <div className={styles['form-group']}>
                    <input onChange={(event) => {
                        this.setState({ value: event.target.value })
                        this.hanldeFilter(event.target.value);
                    }} value={this.state.value} type="text" className={styles['form-control']} placeholder="Filter by name" />
                </div>
                {this.props.searchFilter.keyword
                    ?
                    <button type="submit" className={`${styles['btn']} ${styles['btn-default']}`}>Reset Form</button>
                    :
                    ''}
            </form>
        );
    }
}

export default connect(
    (state) => ({
        searchFilter: state.searchFilter
    }),
    (dispatch) => ({
        actions: {
            pokemons: bindActionCreators(PokemonActions, dispatch),
            search: bindActionCreators(SearchAction, dispatch)
        }
    })
)(Search);
