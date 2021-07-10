import { useState, useEffect } from 'react';
import getPokemones from '../helpers/getPokemones';

const useFetchPokemones = ( pokemon ) => {
  const [state, setstate] = useState({
    data: {},
    loading: true
  });

  useEffect(() => {
		getPokemones(pokemon).then((pokemo) => {
      setTimeout(() => {
        setstate({
          data: pokemo,
          loading: false
        })
      }, 1200);
    });
	}, [pokemon]);

  return state;
}

export default useFetchPokemones;