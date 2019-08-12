<template>
  <div class="currency">
    <currency-item v-for="(rateMapped,index) in ratesMapped"
              :currency="rateMapped"
              :key="index"></currency-item>
  </div>
</template>

<script src='./js/currency.js'></script>

<style scoped>

</style>
