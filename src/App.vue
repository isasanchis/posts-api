<template>
  <div id="app">

    <Header />
    <PostListView v-if="view === 'list'" @click="changeView" :posts="posts" />
    <PostDetailView v-if="view === 'detail'" @click="returnView" :postObj="postObj" />
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
      let hintPosts = this.posts.slice(0, 4);
      if(hintPosts.includes(this.postObj)){
        const index = hintPosts.indexOf(this.postObj);
        hintPosts.splice(index, 1);
        hintPosts.push(this.posts[4]);
      }
      console.log(hintPosts);
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