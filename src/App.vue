<template>
  <div id="app">

    <Header />
    <PostListView v-if="view === 'list'" @click="changeView" :posts="posts" />
    <PostDetailView v-if="view === 'detail'" @click="returnView" :postObj="postObj" :hintPosts="hintPosts" />
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
      view: 'list',
      postObj: {},
      hintPosts: [],
    }
  },
  mounted() {
    axios.get(this.url)
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    changeView(post) {
      this.postObj = post;
      this.view = 'detail';
      this.readMore();
    },
    returnView() {
      this.postObj = {};
      this.view = 'list';
    },
    readMore() {
      this.hintPosts = this.posts.slice(0, 4);
      if(this.hintPosts.includes(this.postObj)){
        const index = this.hintPosts.indexOf(this.postObj);
        this.hintPosts.splice(index, 1);
        this.hintPosts.push(this.posts[4]);
      }
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