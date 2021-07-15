import { useState, useEffect } from 'react';
import getPokemones from '../helpers/getPokemones';

const useFetchPokemones = ( pokemon ) => {
  const [state, setstate] = useState({
    data: {},
    loading: true
  });

  useEffect(() => {
		getPokemones(pokemon).then((pokemo) => {
        setstate({
          data: pokemo,
          loading: false
        })
    });
	}, [pokemon]);

  return state;
}

export default useFetchPokemones;