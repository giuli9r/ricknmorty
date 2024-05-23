<template>
    <section>
        <h2>Characters</h2>
        <div class="characters">
            <div class="character_item" 
            v-for="char in characters" :key="char.id">
            <CardCharacter :character="char"/>
            </div>
        </div>
        <div class="pagination">
            <button class="button-4" @click="goToPage(paginationInfo.prev)" :disabled="!paginationInfo.prev">Ant.</button>
            <span>Page {{ currentPage }} of {{ paginationInfo.count }}</span>
            <button class="button-4" @click="goToPage(paginationInfo.next)" :disabled="!paginationInfo.next">Sig.</button>
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
        const store = useStore();
        const characters = computed(() =>  store.state.charactersFilter )
        const paginationInfo = computed(() =>  store.state.paginationInfo )
        const currentPage = computed(() =>  store.state.currentPage )

        const goToPage = (pageUrl) => {
            if (pageUrl) {
                if (pageUrl) {
                const url = new URL(pageUrl);
                const page = url.searchParams.get('page');
                store.dispatch('getCharacters', Number(page));
                }
            }
        };

        // Fetch characters on component mount
        onMounted(() => {
            store.dispatch('getCharacters',  currentPage.value)
        })

        return { 
            characters,
            paginationInfo,
            currentPage,
            goToPage,
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

/* CSS */
.button-4 {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.button-4:hover {
  background-color: #b7cfff;
  text-decoration: none;
  transition-duration: 0.1s;
}

.button-4:disabled {
  background-color: #e0e0e0;
  border-color: rgba(27, 31, 35, 0.15);
  color: #a3a3a3;
  cursor: default;
}

.button-4:active {
  background-color: #9698f5;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.button-4:focus {
  outline: 1px transparent;
}

.button-4:before {
  display: none;
}

.button-4:-webkit-details-marker {
  display: none;
}
</style>