<template>
    <section>
        <h2>Characters</h2>
        <div class="characters">
            <div class="character_item" 
            v-for="char in characters" :key="char.id">
            <CardCharacter :character="char"/>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore} from 'vuex'
import CardCharacter from './CardCharacter'

export default {
  components: { CardCharacter },
    setup(){
        const store = useStore()
        const characters = computed(() => {
            return store.state.charactersFilter
        })

        onMounted(() => {
            store.dispatch('getCharacters')
        })

        return { 
            characters
        }
    }
}
</script>



<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>