import React from 'react';
import PokeApi from '../PokeApi';
import { shallow } from 'enzyme';

describe('Pruebas en el componentes giftExpertApp', () => {

  test('Prueba del snapchot', () => {
    const wrapper = shallow(<PokeApi />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar la lista de categorias', () => {
    const categories = 'Dragon Ball';
    const warapper = shallow(<PokeApi defaultCategories={categories} />);

    expect(warapper).toMatchSnapshot();
  })

})