import axios from 'axios'
import { type Ref, toValue } from 'vue'
import { type CharactersData } from '@/types'

export function getCharactersData(page: number | Ref<number>, status: string = '', name: string   = ''): Promise<CharactersData> {
  let url = `https://rickandmortyapi.com/api/character/?page=${toValue(page)}`

  if (status) {
    url += `&status=${status}`
  }
  if (name) {
    url += `&name=${name}`
  }

  return axios.get(url)
    .then((result) => result.data)
}