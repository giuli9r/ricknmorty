<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <ListCharacters>
      
    </ListCharacters>
  </div>
  </template>

<script>
import ListCharacters from './components/ListCharacters.vue'

export default {
  name: 'App',
  components: {
    ListCharacters
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
