import getPokemones from "../../helpers/getPokemones";

describe('Pruebas con getPokemones', () => {
  test('Debe traer 5 elementos', async() => {
    const pokemon = {
      id: 25,
      height: 4,
      name: 'pikachu',
      especie: 'pikachu',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    }

    const gifs = await getPokemones('pikachu');

    expect(pokemon).toEqual(gifs);
  });

});