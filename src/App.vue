<script setup>
  import HomePage from './components/home/HomePage.vue';
  import ProductDetails from './components/product/ProductDetails.vue';
  import navbar from './components/layout/navbar.vue';
  import contact from './components/layout/contact.vue';
  import NotFound from './components/NotFound.vue';
// import NotFound from './components/NotFound.vue';
  // import ProductDetails from './components/product/ProductDetails.vue';
</script>

<template>
<div>

  <navbar/>
  <HomePageComponent/>
  <ProductDetailsComponent/>
  <contactComponent/>
  <NotFoundComponent/>
  <router-view></router-view>
</div>
</template>

<style scoped></style>
