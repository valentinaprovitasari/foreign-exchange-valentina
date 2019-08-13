<template>
  <div class="home currency container">
    <div class="box currency__box">
      <div class="currency__title">
        <span class="tag">
          USD - United States Dollars
        </span>
      </div>
      <div class="currency__input columns">
        <div class="column">
          <span>
            USD
          </span>
        </div>
        <div class="column">
          <input class="input" type="text" v-model="amount" placeholder="Place your currency here">
        </div>
      </div>
      <div class="currency__content">
        <currency></currency>
      </div>
      <div class="currency__menu  columns">
        <div class="dropdown column"
             @click="showCurrency()"
             v-bind:class="{'is-active': isActive}">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>{{selectedCurrencyName}}</span>
              <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
          </div>
          <div class="currency__menu">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <div v-for="name in ratesName"
                     :key="name"
                     class="dropdown-item">
                  <div class="currency-name" @click="selectCurrency(name)">{{name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <a class="button is-primary" @click="submitCurrency()">Submit</a>
        </div>
      </div>
      </div>
  </div>
</template>

<script src='./js/home-page.js'></script>

<style lang="sass" scoped>
  .currency
    &__box
      width: 500px
    &__input
      padding-top: 20px
    &__menu
      padding-top: 20px
</style>
