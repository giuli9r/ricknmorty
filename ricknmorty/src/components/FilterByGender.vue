<template>
  <div class="filter">
    <div class="item" @click="filterGender('')">
      All
    </div>
    <div class="item" @click="filterGender('Male')">
      Male
    </div>
    <div class="item" @click="filterGender('Female')">
      Female
    </div>
    <div class="item" @click="filterGender('genderless')">
      Genderless
    </div>
    <div class="item" @click="filterGender('unknown')">
      Unknown
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    
    const filterGender = ((gender) => {
      store.dispatch ('filterByGender', gender)
    })
    
    return {
      filterGender
    }
  }
}
</script>


<style lang="scss" scoped>
.filter {
  width: 600px;
  margin: 0 auto 0 auto;
  margin-top: 10pt;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 10px;
  overflow: hidden;
  .item {
    padding: 1rem 0.5rem;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--text-orange);
    }
  }
}
</style>