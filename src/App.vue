<template>
  <div id="app">

    <Header />
    <PostListView v-if="view === 'list'" :posts="posts" @click="changeView" />
    <PostDetailView v-if="view === 'post'" @click="returnView()" :postObj="postObj" />
    <Footer />

  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header';
import PostListView from './components/PostListView.vue'
import PostDetailView from './components/PostDetailView.vue'
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Header, PostListView, PostDetailView, Footer },
  data() {
    return {
      posts: null,
      url: 'https://jsonplaceholder.typicode.com/posts',
      postVisible: 0,
      view: 'list',
      postObj: {},
    }
  },
  mounted() {
    axios.get(this.url)
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    toggleVisible(post) {
      if(this.postVisible === post.id) {
        return this.postVisible = 0
      }
      this.postVisible = post.id
    },
    changeView(post) {
      this.postObj = post;
      this.view = 'post';
    },
    returnView() {
      this.postObj = {};
      this.view = 'list';
    }
  }
};

</script>

<style>

body {
  background-color:rgb(231, 52, 76);
  font-family: Verdana, Tahoma, sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

</style>