import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    cards:[
        {
          id:1,
          name:"maltese",
          image:require("../assets/image/maltese.png"),
          favorite:false,
        },
        { id:2,
          name:"spaniel",
          image:require("../assets/image/spaniel.png"),
          favorite:false,
        },
        {
          id:3,
          name:"labrador",
          image:require("../assets/image/labrador.png"),
          favorite:false,
        },
        {
          id:4,
          name:"cattledog",
          image:require("../assets/image/cattledog.png"),
          favorite:false,
        },
        {
          id:5,
          name:"bulldog",
          image:require("../assets/image/bulldog.png"),
          favorite:false,
        },
        {
          id:6,
          name:"shiba",
          image:require("../assets/image/shiba.png"),
          favorite:false,
        },
        {
          id:7,
          name:"poodle",
          image:require("../assets/image/poodle.png"),
          favorite:false,
        },
        {
          id:8,
          name:"kelpie",
          image:require("../assets/image/kelpie.png"),
          favorite:false,
        },
        {
          id:9,
          name:"corgi",
          image:require("../assets/image/corgi.png"),
          favorite:false,
        }
      ],
    cardSelect:{},
    favorites:[],
    categories:[],
    alhSort:false,
    categoriesActive:false,
    selectDog:'Все пёсики'
  },
  getters:{
    getFavorites(state){
      return state.favorites;
    },
    getSelectCard(state){
      return Object.keys(state.cardSelect).length ? state.cardSelect : state.cards[0]
    },
    getCards(state){
      let sort = Array.from(state.cards).sort((a, b) => a.name > b.name ? 1 : -1);
      if(state.alhSort && state.selectDog === 'Все пёсики'){
        return sort
      }
      if(state.selectDog === "Все пёсики"){
        return state.cards
      }
      else{
        return Array.from(state.cards.filter(item => item.name === state.selectDog))
      }
    },
    getSelectDog(state){
      return state.selectDog
    },
    getCategories(state){
      return state.categories;
    },
    getAlhSort(state){
      return state.alhSort
    },
    getCategoriesActive(state){
      return state.categoriesActive
    }
  },
  mutations:{
    CHANGE_ALH_SORT(state){
      state.alhSort = !state.alhSort;
    },
    ADD_FAVORITES(state,id){
      let item = state.cards.find(item => item.id === id);
      item.favorite = !item.favorite;
      if(item.favorite){
        state.favorites.push(item)
      }
      else{
        state.favorites.splice(state.favorites.indexOf(item), 1);
      }
    },
    SELECT_CARD(state,id){
      state.cardSelect = state.cards.find(item => item.id === id);
    },
    ADD_CATEGORIES(state){
      state.categoriesActive = !state.categoriesActive
      let letters = new Set(state.cards.map(item => item.name.charAt(0)));
      let names = new Set(state.cards.map(item => item.name));
      state.categories = [...letters, ...names]
      state.categories.sort()
      state.categories.unshift('Все пёсики')
    },
    SORTED_CATIGORIES(state,item){
      state.selectDog = item;
      state.categoriesActive = false
    },
    CLEAR_CATEGORIES(state){
      state.selectDog = "Все пёсики";
    },
  },
  actions:{
    callChangeAlhSort({commit}){
      commit('CHANGE_ALH_SORT')
    },
    callCardSelect({commit},id){
      commit('SELECT_CARD',id)
    },
    callAddFavorites({commit},id){
      commit('ADD_FAVORITES',id)
    },
    callAddCategories({commit}){
      commit('ADD_CATEGORIES')
    },
    callSortedCategories({commit},item){
      commit('SORTED_CATIGORIES', item)
    },
    callClearCategories({commit}){
      commit("CLEAR_CATEGORIES")
    },
  }
})