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
      let firstPost = this.posts[0];
      let secondPost = this.posts[1];
      let thirdPost = this.posts[2];
      let quartPost = this.posts[3];
      console.log(firstPost, secondPost, thirdPost, quartPost);
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