import React, { useState } from "react";

const AddPokemon = ({ setpoke }) => {
	const [inputValue, setinputValue] = useState("");

	const handleInput = (e) => {
		setinputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setpoke(inputValue);
			setinputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<label htmlFor="pokemon">Busca a tu pokemon</label>
			<input type="text" value={inputValue} onChange={handleInput} />
		</form>
	);
};

export default AddPokemon;
