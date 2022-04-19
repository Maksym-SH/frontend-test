<template>
  <header class="header">
      <div class="header__logo"
       @click="$emit('current-component','content-component')">
         <p>ПЁСЕЛЬ</p>
      </div>
      <div class="header__favorite-item" title="Посмотреть избранные"
       @click="$emit('current-component','favorite-component')">
        <p :class="[currentComp === 'favorite-component'?
        'header__favorite-item--active': '']">
          Избранные пёсели
          <b-icon :icon="currentComp === 'favorite-component' ?
          'heart-fill' :
          'heart'">
          </b-icon>
        </p>
      </div>
  </header>
</template>

<script>
export default {
  name:'headerComponent',
  props:{
    currentComp:{
      type:String,
      require:true,
      default:'content-component',
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables.scss';
.header{
  background-color: $black;
  padding: 40px 40px 27px 60px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
  &__logo{
    cursor: pointer;
    p{
      font-size: 30px;
      text-transform: uppercase;
      color: $blue;
      line-height: 0;
    }
  }
  &__favorite-item{
    cursor: pointer;
    font-family: $ibm;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.01em;
    color: $dark-grey;
  }
  &__favorite-item--active{
    color: $white;
  }
  @media(max-width:768px){
    padding: 25px 20px;
    &__logo{
      p{
        font-size: 20px;
      }
    }
    &__favorite-item{
      font-size: 15px;
    }
  }
}
</style>