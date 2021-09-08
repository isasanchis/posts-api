<template>
  <div id="posts-view">

    <header id="header-page">
      <h1 class="name-page">H. BLOG</h1>
    </header>

    <div v-for="post in posts" :key="post.id" id="posts-show">
        {{ post.title }}
    </div>
      
  </div> 
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: null
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
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