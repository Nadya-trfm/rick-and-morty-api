<template>
  <div class="pagination">
    <button
      class="pagination__item"
      :disabled="!pageInfo?.prev"
      @click="$emit('changePage', currentPage - 1 )"
    >
      <img src="../assets/pictures/left.svg">
    </button>
    <div class="pagination__item pagination__item--number">
      <p>{{ currentPage }}</p>
    </div>
    <button
      class="pagination__item"
      :disabled="!pageInfo?.next"
      @click="$emit('changePage', currentPage + 1 )"
    >
      <img src="../assets/pictures/right.svg">
    </button>
  </div>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'
import type { PageInfo } from '@/types'


const props = defineProps({
    pageInfo: {
      type: Object as PropType<PageInfo | null>,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
)

const emit = defineEmits({
  changePage: (_page: number) => true
})
</script>


<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled img{
      filter: opacity(50%);
    }
    img {
      width: 40px;
      height: 40px;
    }

    &--number {
      color: black;
      font-size: 20px;
      border: black 3px solid;
      padding: 6px 12px;
    }
  }
}
</style>