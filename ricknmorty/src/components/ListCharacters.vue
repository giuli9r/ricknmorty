<template>
    <section>
        <div class="character">
            <h2>Characters</h2>
            <div class="character_list" 
            v-for="char in characters" :key="char.id">
                {{ char.name }}
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore} from 'vuex'

export default {
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

<style scoped>

</style>