<template>
  <base-layout>
    <section class="content">
      <filter-buttons
        :character-options="characterOptions"
        @update-character-options="updateCharacterOptions"
      />
      <error-request v-if="isError" />
      <template v-else>
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
      </template>
    </section>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/baseLayout/BaseLayout.vue'
import { onMounted, reactive, type Ref, ref, toValue, watch } from 'vue'
import { getCharactersData } from '@/services/api'
import {
  type CharacterOptions,
  type CharactersData,
  type PageInfo,
  type ResultData
}
  from '@/types'
import CharacterCard from '@/components/CharacterCard.vue'
import Pagination from '@/components/Pagination.vue'
import FilterButtons from '@/components/FilterButtons.vue'
import ErrorRequest from '@/components/ErrorRequest.vue'

const charactersData = ref<CharactersData>()
const isLoading = ref(false)
const currentPage = ref(1)
const characters = ref<ResultData[]>()
const pageInfo = ref<PageInfo | null>(null)
let characterOptions = reactive<CharacterOptions>({ name: '', status: '' })
const isError = ref(false)

async function changePage(page: number | Ref<number>) {
  isLoading.value = true

  try {
    charactersData.value = await getCharactersData(page, characterOptions.status, characterOptions.name)
    characters.value = charactersData.value.results
    pageInfo.value = charactersData.value.info
    currentPage.value = toValue(page)
    isError.value = false
  } catch (e) {
    console.error(e)
    isError.value = true
  } finally {
    isLoading.value = false
  }
}

watch(characterOptions, () => {
  changePage(currentPage)
})

function updateCharacterOptions(newCharacterOptions: CharacterOptions) {
 Object.assign(characterOptions,newCharacterOptions)
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