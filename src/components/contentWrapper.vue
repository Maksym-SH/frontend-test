<template>
  <section class="main-section">
    <div class="container">
      <div class="main-section__select">
        <div class="main-section__select_butt-wrap">
          <button class="select"
          @click="callAddCategories()">
              Порода <span :class="{'open-categories': getCategoriesActive}">&#60;</span>
          </button>
          <button class="main-section__select__categories"
            v-if="getSelectDog !== 'Все пёсики'">
            {{getSelectDog}} <span @click="callClearCategories">&#215;</span>
          </button>
        </div>
        <div class="main-section__select--sorted" v-if="getSelectDog === 'Все пёсики'">
          <p>Сортировка по алфавиту</p>
          <div class="main-section__select--sorted_checkbox"
            :class="{'checkbox-active': getAlhSort}"
            @click="callChangeAlhSort">
            <div class="ellips" :class="{'ellips-right': getAlhSort}"></div>
          </div>
        </div>
      </div>
      <div class="main-section__categories" v-if="getCategoriesActive">
          <template v-for="(item,index) in getCategories">
              <button :disabled="item === getSelectDog" :class="[item === getSelectDog ? 'main-section__categories-active-button' :'']" :key="index"
              @click="callSortedCategories(item)"
              v-show="item.length > 1">{{item}}</button>
              <span :key="'span' + index" v-show="item.length === 1">{{item}}</span>
          </template>
      </div>
      <div class="select-card">
        <b-icon class="favorite"
          title="Добавить в избранные"
          :icon="getSelectCard.favorite ? 'heart-fill' : 'heart'"
          scale="2"
          @click.stop="callAddFavorites(getSelectCard.id)">
         </b-icon>
        <img :src="getSelectCard.image" alt="">
        <p class="card-name">{{getSelectCard.name}}</p>
      </div>
      <div class="cards-wrapper">
        <div class="cards-wrapper__item" v-for="item in getCards"
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
    </div>
  </section>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'main-component',
  computed:mapGetters([
   'getAlhSort',
   'getCards',
   'getSelectCard',
   'getCategories',
   'getCategoriesActive',
   'getSelectDog']),
  methods:mapActions([
   'callChangeAlhSort',
   'getAllDogs',
   'callCardSelect',
   'callAddFavorites',
   'callAddCategories',
   'callSortedCategories',
   'callClearCategories',
   'callChangeSelectedCard']),
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.main-section{
  width: 100%;
  &__categories{
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    span{
      text-transform: uppercase;
      font-size: 28px;
      color: $dark-grey;
    }
    button{
      margin: 15px;
      padding: 4px 12px;
      border-radius: 20px;
      border:1px solid $dark-grey;
      background: transparent;
      color: $dark-grey;
      transition: all .5s ease;
      text-transform: capitalize;
      &:hover{
        color: $blue;
        border-color: $blue;
      }
      &:first-child{
        margin: 0 0 15px 0;
        display: block;
      }
    }
    &-active-button{
        color: $blue !important;
        border-color: $blue !important;
    }
  }
  &__select{
    padding: 50px 0;
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 1160px;
    align-items: center;
    position: relative;
    justify-content: space-between;
    &__categories{
      position: absolute;
      left: 80px;
      padding: 4px 12px;
      border-radius: 20px;
      border:1px solid $blue;
      background: transparent;
      text-transform: capitalize;
      color: $blue;
    }
    &--sorted{
      display: flex;
      align-items: center;
      p{
        line-height: 0;
        margin-bottom: 4px;
        font-size: 16px;
        margin-right:  15px;
        color: $dark-grey;
      }
      &_checkbox{
        border-radius: 9px;
        width: 29px;
        cursor: pointer;
        border: 1px solid $dark-grey;
        height: 14.5px;
        padding: 1.7px 3px;
        .ellips{
          width: 9px;
          height: 9px;
          border-radius: 50%;
          transition: all .5s ease !important;
          background: $dark-grey;
        }
        .ellips-right{
            background-color: $blue;
            transform: translate(12px);
        }
      }
      .checkbox-active{
          border-color: $blue !important;
        }
    }
    &_butt-wrap{
       .select{
      padding:0 10px 0 0;
      background:none;
      color: $white;
      font-size: 16px;
      border: none;
      outline: none;
      border-bottom:1px dashed $white;
       position: relative;
      span{
        position: absolute;
        right: -2px;
        top: 2px;
        transform: rotate(-90deg);
      }
      .open-categories{
        right: -4px;
        transform: rotate(90deg) !important;
      }
    }
    }

  }
  .select-card{
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    position: relative;
    img{
      user-select: none;
      width:100%;
      max-height: 600px;
      border-radius: 8px;
    }
  }
}
.unselect-name{
    font-size: 25px;
    position: absolute;
    bottom: 0;
    right: 25px;
    font-weight: bold;
}
.card-name{
    position: absolute;
    bottom: 50px;
    right: 50px;
    font-weight: bold;
    font-size: 30px;
    color:$white;
    font-family: $ibm;
    text-transform: capitalize;
}
.favorite{
    position: absolute;
    inset: 35px;
    cursor: pointer;
  }
.cards-wrapper{
  width: 100%;
  max-width: 1195px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  &__item{
    width: 367px;
    height: 290px;
    min-height: 174px;
    img{
      max-width: 100%;
      height: 100%;
    }
    cursor: pointer;
    margin: 15px;
    position: relative;
  }
}
@media(max-width:1400px){
  .cards-wrapper{
    max-width: 100%;
    &__item{
      width: 30%;
      height: auto;
      box-sizing: border-box;
    }
  }
  .card-name, .unselect-name{
    bottom: 2%;
    right: 25px;
    font-size: 15px !important;
  }
}
@media(max-width:992px){
  .cards-wrapper{
    &__item{
    width: 29%;
    min-width: 150px;
    }
  }
}
@media(max-width:768px){
  .cards-wrapper{
    width: calc(100% - 30px);
    &__item{
      width: 40%;
    }
  }
    .favorite{
    width: 10px;
    position: absolute;
    inset: 10px;
  }
}
@media(max-width:430px){
  .cards-wrapper{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__item{
      width: 60%;
      height: 174px;
      margin: 7.5px;
    }
  }
  .main-section{
    &__select{
      flex-direction: column-reverse;
      .select{
        margin-top: 15px;
        font-size: 14px;
      }
      &--sorted{
        p{
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>