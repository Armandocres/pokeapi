import React from 'react';
import { shallow } from 'enzyme';
import PokeGrid from '../../components/PokeGrid';
import useFetchPokemones from '../../hooks/useFetchPokemones';
jest.mock('../../hooks/useFetchPokemones');

describe('Pruebas en componente Pokegrid', () => {
  const name = 'pikachu';

  test('Snapshoot', () => {
    useFetchPokemones.mockReturnValue({
      data: {},
      loading: true,
    })

    const wrapper = shallow(<PokeGrid pokemon={name} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar el snapshot usando el useFetch', () => {
    const pokemon = {
      id: '1',
      height: '56',
      name: 'pikachu',
      especie: 'pikachu',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg',
    }

    useFetchPokemones.mockReturnValue({
      data: pokemon,
      loading: false,
    });

    const wrapper = shallow(<PokeGrid pokemon={name} />);
    expect(wrapper).toMatchSnapshot();
  });

});