<template>
  <article class="character-card">
    <div class="character-card__poster">
      <img
        class="character-card__img"
        :src="character.image"
        alt="character_img"
      >
    </div>
    <div class="character-card__info">
      <p class="character-card__name">
        {{ character.name }}
      </p>
      <p
        class="character-card__status"
        :class="[statusClass]"
      >
        {{ character.status }} - {{ character.species }}
      </p>
      <span>Последнее известное местоположение: </span>
      <p>{{ character.location.name }}</p>
      <span>Первое появление в: </span>
      <p>{{ character.origin.name }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { type ResultData } from '@/types'

const props = defineProps({
    character: {
      type: Object as PropType<ResultData>,
      required: true
    }
  }
)

const statusClass = ref()
statusClass.value = 'character-card__status--' + props.character.status.toLowerCase()
</script>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.character-card {
  display: flex;
  width: 600px;
  background: $light-grey;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 100%;
  }

  &__poster {
    flex: 2 1 40%;
    width: 100%;

  }

  &__img {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  }

  &__info {
    color: white;
    padding: 10px;

    span {
      display: block;
      color: $text-gray;
    }
  }

  &__name {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
  }

  &__status {
    font-size: 16px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;

    &::before {
      content: "";
      border-radius: 3px;
      width: 5px;
      height: 5px;
      margin-right: 0.5em;
      background-color: $text-gray;
    }

    &--alive::before {
      background-color: greenyellow;
    }

    &--dead::before {
      background-color: darkred;
    }

  }
}
</style>