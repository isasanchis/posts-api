<template>
  <div id="app">
      <AllPosts />
      <Footer />
  </div>
</template>

<script>
import AllPosts from './components/AllPosts';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { AllPosts, Footer }
};
</script>
