<template>
  <div class="filter-buttons">
    <label for="name">
      Имя персонажа(на английском):
      <input
        id="name"
        v-model="localCharacterOptions.name"
      >
    </label>
    <div class="filter-buttons__status">
      <p>Статус персонажа: </p>
      <label for="alive">
        <input
          id="alive"
          v-model="localCharacterOptions.status"
          type="radio"
          value="alive"
        />
        Жив(а)
      </label>
      <label for="dead">
        <input
          id="dead"
          v-model="localCharacterOptions.status"
          type="radio"
          value="dead"
        />
        Мертв(а)
      </label>

      <label for="unknown">
        <input
          id="unknown"
          v-model="localCharacterOptions.status"
          type="radio"
          value="unknown"
        />
        Неизвестно
      </label>
      <label for="empty">
        <input
          id="empty"
          v-model="localCharacterOptions.status"
          type="radio"
          value=""
        />
        Не выбран
      </label>
    </div>
    <div class="filter-buttons__button">
      <button @click="update">
        Применить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, reactive, watch } from 'vue'
import type { CharacterOptions } from '@/types'

const props = defineProps({
    characterOptions: {
      type: Object as PropType<CharacterOptions>,
      required: true
    }
  }
)

const localCharacterOptions = reactive<CharacterOptions>({ ...props.characterOptions })

watch(props.characterOptions, (newValue) => Object.assign(localCharacterOptions, newValue))

const emit = defineEmits({
  updateCharacterOptions: (_characterOptions: CharacterOptions) => true
})

function update() {
  emit('updateCharacterOptions', { ...localCharacterOptions })
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/colors";

.filter-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 10px 0;
  border: $dark-grey 3px solid;

  &__status {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: $dark-grey 1px solid;
      border-radius: 3px;
      background: $light-grey;
      color: white;
      padding: 5px;
    }
  }

}
</style>