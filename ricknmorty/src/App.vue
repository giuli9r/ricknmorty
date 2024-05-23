<template>
    <div class="container">
        <h1>Rick and Morty</h1>
        <FilterByStatus></FilterByStatus>
        <FilterByGender></FilterByGender>
        <FilterByName/>
        <ListCharacters></ListCharacters>
    </div>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue'
import FilterByStatus from './components/FilterByStatus.vue'
import FilterByGender from './components/FilterByGender.vue'
import FilterByName from './components/FilterByName.vue'

export default {
    name: 'App',
    components: {
        ListCharacters,
        FilterByStatus,
        FilterByGender,
        FilterByName
    },
}
</script>

<style lang="scss">
:root {
    --background-body: #24282F;
    --background-card: #3C3E44;
    --text-white: #FFFFFF;
    --text-gray: #c0c0c0;
    --text-orange: #FF9800;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
    margin-bottom: 3rem;
    text-align: center;
}
.container {
    width: 780px;
    max-width: 80%;
    margin: 5rem auto;
}
img {
    width: 100%;
}
</style>