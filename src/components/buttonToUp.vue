<template>
  <button class="button-up" @click="$emit('click')">
    <b-icon icon="arrow-up" variant="light"></b-icon>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.button-up{
  width: 55px;
  height: 55px;
  background:none;
  border-radius: 50%;
  border:1px solid $white;
  position: fixed;
  bottom: 183px;
  right: 58px;
  @media(max-width:1300px){
    bottom: 50px;
    right: 10px;
  }
}
</style>