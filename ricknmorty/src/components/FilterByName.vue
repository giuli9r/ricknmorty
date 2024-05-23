<template>
    <div class="search">
        <input 
        type="text" 
        placeholder="Search by Name"
        v-model="name"
        @keyup="filter(), updateFoundByName()">
        <!-- <h2 v-show="!foundByName"> No characters found</h2> -->
        <h2 v-if="!foundByName">No characters found!😢</h2>
    </div>
    
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue'
import { computed } from 'vue'


export default {
    setup(){
        const store = useStore();
        const name = ref('');
        const foundByName = computed(() => store.state.foundByName)

        const filter = ()=>{
            store.dispatch('filterByName', name.value)
        }
        const updateFoundByName = () => {
            store.dispatch('updateFoundByName')
        }
        
        return {
            foundByName,name, filter, updateFoundByName
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
  width: 400px;
  margin: 3rem auto 0;
  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>