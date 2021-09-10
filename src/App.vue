<template>
  <div id="app">
    <Header @filter="searchPost" />
    <PostListView v-if="isListView" @click="changeView" :posts="postsReturn" />
    <PostDetailView v-else @click="returnView" :postInfo="postInfo" :hintPosts="hintPosts" />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header';
import PostListView from './components/PostListView.vue'
import PostDetailView from './components/PostDetailView.vue'

export default {
  name: 'App',
  components: { Header, PostListView, PostDetailView },
  data() {
    return {
      posts: null,
      url: 'https://jsonplaceholder.typicode.com/posts',
      view: 'list',
      postInfo: {},
      hintPosts: [],
      filter: '',
    }
  },
  created() {
    axios.get(this.url)
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    changeView(post) {
      this.postInfo = post;
      this.view = 'detail';
      this.readMore();
    },
    returnView() {
      this.postInfo = {};
      this.view = 'list';
    },
    readMore() {
      this.hintPosts = this.posts.slice(0, 4);
      if(this.hintPosts.includes(this.postInfo)){
        const index = this.hintPosts.indexOf(this.postInfo);
        this.hintPosts.splice(index, 1);
        this.hintPosts.push(this.posts[4]);
      }
    },
    searchPost(postTitle) {
      this.filter = postTitle;
    }
  },
  computed: {
    isListView() {
      return this.view === 'list';
    },
    postsReturn() {
      if(this.filter) {
        return this.posts.filter((item) => item.title.includes(this.filter))
      }
      return this.posts;
    }
  }
};

</script>

<style>
body {
  background-color:#f7f7f7;
  font-family: Verdana, Tahoma, sans-serif;
}

html,
body {
  margin: 0;
}

#app {
  height: 100%;
}
</style>