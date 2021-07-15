import React from 'react';
import { shallow } from 'enzyme';
import AddPokemon from '../../components/AddPokemon';

describe('Pruebas en componente AddPokemon', () => {
  const setPoke = jest.fn();
  let wrapper = shallow(<AddPokemon setpoke={setPoke} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddPokemon setpoke={setPoke} />);
  });

  test('Pruebas en Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiarla caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    input.simulate('change', { target: { value: value }
    });
  });

  test('No debe de lanzarse el evento Submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setPoke).not.toHaveBeenCalled();
  });

  test('Debe llamar al setPoke y limpiar la caja de texto', () => {
    const value = 'Hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setPoke).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });

});