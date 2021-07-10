import React, { useState } from "react";
import AddPokemon from "./components/AddPokemon";
import PokeGrid from "./components/PokeGrid";

const PokeApi = () => {
	const [pokemon, setPokemon] = useState(["pikachu"]);

	return (
		<>
			<h1>PokeApi</h1>
			<AddPokemon setpoke={setPokemon} />
			<PokeGrid pokemon={pokemon} />
		</>
	);
};

export default PokeApi;
