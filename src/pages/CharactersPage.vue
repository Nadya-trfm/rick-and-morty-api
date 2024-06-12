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
      <pagination
        :page-info="pageInfo"
        :current-page="currentPage"
        @change-page="changePage"
      ></pagination>
    </section>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/baseLayout/BaseLayout.vue'
import { onMounted, type Ref, ref, toValue } from 'vue'
import { getCharactersData } from '@/services/api'
import {
  type CharactersData,
  type PageInfo,
  type ResultData
}
  from '@/types'
import CharacterCard from '@/components/CharacterCard.vue'
import Pagination from '@/components/Pagination.vue'

const charactersData = ref<CharactersData>()
const isLoading = ref(false)
const currentPage = ref(1)
const characters = ref<ResultData[]>()
const pageInfo = ref<PageInfo | null>(null)

async function changePage(page: number | Ref<number>) {
  isLoading.value = true

  try {
    charactersData.value = await getCharactersData(page)
    characters.value = charactersData.value.results
    pageInfo.value = charactersData.value.info
    currentPage.value = toValue(page)
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  changePage(currentPage)
})

</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}
</style>