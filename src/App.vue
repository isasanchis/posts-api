<template>
  <div id="app">
    <Header />
    <PostsView />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import PostsView from './components/PostsView';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Header, PostsView, Footer }
};

</script>

<style>

body {
  background-color:rgb(231, 52, 76);
  font-family: Verdana, Tahoma, sans-serif;
  margin: 0;
}

</style>