import React, { useState } from "react";
import AddPokemon from "./components/AddPokemon";
import PokeGrid from "./components/PokeGrid";

const PokeApi = ({ defaultCategpries = "pikachu" }) => {
	const [pokemon, setPokemon] = useState(defaultCategpries);

	return (
		<>
			<h1>PokeApi</h1>
			<AddPokemon setpoke={setPokemon} />
			<PokeGrid pokemon={pokemon} />
		</>
	);
};

export default PokeApi;
