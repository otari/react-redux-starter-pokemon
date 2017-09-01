import React from 'react';
import { pokemonId } from '../utils/helpers';
const Avatar = (props) => {

    const {pokemon} = props;

    let pokemonAvatarURL = 'http://www.poketdex.com/images/dex/pokemon-large/{ID}.png'

    pokemonAvatarURL = pokemonAvatarURL.replace("{ID}", pokemonId(pokemon.url));

    return (
        <img title={pokemon.name} alt={pokemon.name} src={pokemonAvatarURL} />
    )
}

export default Avatar;
