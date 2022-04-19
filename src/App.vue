<template>
  <div id="app">
    <header-component :currentComp="mainComponent" @current-component="changeComponent"></header-component>
    <keep-alive>
      <component :is="mainComponent"></component>
    </keep-alive>
    <scroll-button v-if="showButtonScroll" @click="scrollUp()"></scroll-button>
  </div>
</template>

<script>
import header from './components/header.vue';
import content from './components/contentWrapper.vue';
import scrollButton from './components/buttonToUp.vue';
import favoritesSection from './components/favoritesWrapper.vue';
export default {
  name: 'App',
  components: {
    'favorite-component':favoritesSection,
    'scroll-button': scrollButton,
    'content-component':content,
    'header-component':header,
  },
  data(){
    return{
      showButtonScroll:false,
      mainComponent:'content-component',
    }
  },
  methods:{
    changeComponent(component){
      this.mainComponent = component
    },
    scrollUp(){
      window.scrollTo(0,0)
    },
    checkScrollPos(){
      window.scrollY > 700 ? this.showButtonScroll = true: this.showButtonScroll = false;
    }
  },
  mounted(){
    window.addEventListener('scroll', ()=>{
      setTimeout(()=>{
          this.checkScrollPos()
      },500)
    })
  }
}
</script>

<style lang="scss" >
@import './assets/scss/variables.scss';
body{
  margin: 0;
  background-color: $black !important;
}
#app{
  color: $white;
}
::-webkit-scrollbar-button {
  background-repeat: no-repeat;
  width: 10px;
  height: 0px;
}
::-webkit-scrollbar-track {
  background-color: $black;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  background-color: $yellow;
}
::-webkit-scrollbar {
  width: 10px;
}
a {
  color: $white !important;
  text-decoration: none !important;
}
</style>
