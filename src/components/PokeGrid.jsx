import React from "react";
import useFetchPokemones from "../hooks/useFetchPokemones";

const PokeGrid = ({ pokemon }) => {
	const { data: pokemones, loading } = useFetchPokemones(pokemon);

	return (
		<div className="card-grid">
			{loading && <p>Cragando...</p>}
			<figure className="card__figure">
				<img src={pokemones.image} alt={pokemones.name} />
			</figure>
			<div>
				<p>Pokemon: {pokemones.name}</p>
				<p>Peso: {pokemones.height}</p>
				<p>Especie: {pokemones.especie}</p>
				<p>Id: {pokemones.id}</p>
			</div>
		</div>
	);
};

export default PokeGrid;
