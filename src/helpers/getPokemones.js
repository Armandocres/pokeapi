const getPokemones = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(url);
  const data = await response.json();
  const pokemones = {
    id: data.id,
    height: data.height,
    name: data.name,
    especie: data.species.name,
    image: data.sprites.other.dream_world.front_default,
  };

  return pokemones;
};

export default getPokemones;