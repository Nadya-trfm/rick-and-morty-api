<template>
  <base-layout>
    <section class="content">
      <ul>
        <li
          v-for="character in characters"
          :key="character.id"
        >
          <character-card :character="character" />
        </li>
      </ul>
    </section>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/baseLayout/BaseLayout.vue'
import { onMounted, ref } from 'vue'
import { getCharactersData } from '@/services/api'
import {
  type CharactersData,
  type PageInfo,
  type ResultData
}
  from '@/types'
import CharacterCard from '@/components/CharacterCard.vue'

const charactersData = ref<CharactersData>()
const isLoading = ref(false)
const page = ref(1)
const characters = ref<ResultData[]>()
const pageInfo = ref<PageInfo>()

onMounted(async () => {
  isLoading.value = true

  try {
    charactersData.value = await getCharactersData(page)
    characters.value = charactersData.value.results
    pageInfo.value = charactersData.value.info
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
})

</script>

<style scoped>
.content{
  margin: 20px 0;
}
</style>