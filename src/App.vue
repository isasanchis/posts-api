<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Header, Footer }
};

</script>

<style>

body {
  background-color:rgb(231, 52, 76);
  font-family: Verdana, Tahoma, sans-serif;
  margin: 0;
}

</style>