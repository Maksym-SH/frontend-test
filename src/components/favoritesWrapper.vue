<template>
  <section class="favorites-section">
    <div class="container">
       <div class="cards-wrapper" v-if="getFavorites.length">
        <div class="cards-wrapper__item" v-for="item in getFavorites"
          :key="item.id"
          @click="callCardSelect(item.id)">
          <b-icon class="favorite"
          :icon="!item.favorite ? 'heart' : 'heart-fill'"
          scale="2"
          title="Добавить в избранное"
          @click.stop="callAddFavorites(item.id)"
          >
         </b-icon>
          <p class="unselect-name">{{item.name}}</p>
          <img :src="item.image" alt="">
        </div>
      </div>
      <h3 v-else align="center">Избранные отсутствуют</h3>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name:'favorite-component',
  computed:mapGetters(['getFavorites']),
  methods:mapActions(['callAddFavorites'])
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.favorites-section{
  padding-top: 105px;
  width: 100%;
}
</style>