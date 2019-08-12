<template>
  <div class="currency-item box columns is-vcentered">
    <div class="currency-item__main column is-two-thirds">
      <div class="currency-item__title">
          {{currency.name}}
      </div>
      <div class="currency-item__content is-italic">
        {{currency.content}}
      </div>
      <div class="currency-item__detail">
        {{currency.detail}}
      </div>
    </div>
    <div class="currency-item__rate column">
      {{currency.rate}}
    </div>
    <div class="currency-item__delete column is-one-fifth">
      <a class="delete" @click="removeCurrency(currency.name)"></a>
    </div>
  </div>
</template>

<script src='./js/currency-item.js'></script>

<style lang="sass" scoped>
  .currency-item
    &__main
      text-align: left
</style>
