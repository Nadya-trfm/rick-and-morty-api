import axios from 'axios'
import { type Ref, toValue } from 'vue'
import { type CharactersData } from '@/types';

export function getCharactersData(page: number | Ref<number> ): Promise<CharactersData>{
  return axios.get(`https://rickandmortyapi.com/api/character/?page=${toValue(page)}`)
    .then((result) => result.data);
}