<template>
  <div id="posts-view">

    <header>
      <h1 class="name-page">H. BLOG</h1>
    </header>

    <main>
      <div class="posts-show" v-for="post in posts" :key="post.id">
        <h2> {{ posts }} </h2>
      </div>
    </main>
      
  </div> 
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: null,
      postsShow: { title: '', body: ''}
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response));
  }
}
</script>

<style>
body {
  background-color:rgb(231, 52, 76);
  font-family: Verdana, Tahoma, sans-serif;
}

.name-page {
  color: #fff;
  font-size: 5em;
  text-align: center;
  text-shadow: 1px 1px 2px #000;
  margin: 0;
}

</style>