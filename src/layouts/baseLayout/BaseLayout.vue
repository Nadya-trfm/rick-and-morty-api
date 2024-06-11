<template>
  <header class="header">
    <div class="container">
    </div>
  </header>
  <main class="main">
    <div class="container">
      <slot></slot>
    </div>
  </main>
  <footer class="footer">
  </footer>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">

.container{
  max-width: 1220px;
  padding: 0 10px;
}
</style>