import useFetchPokemones from '../../hooks/useFetchPokemones';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hooks', () => {
  test('Debe retornar el estado inicial', async() => {
    const { result } = renderHook( () => useFetchPokemones('Pikachu'));
    const { data, loading } = result.current;

    expect(data).toEqual({});
    expect(loading).toBe(true);
  });
})