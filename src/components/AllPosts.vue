<template>
  <div id="posts-view">

    <header id="header-page">
      <h1 class="name-page">H. BLOG</h1>
    </header>

  <div id="posts-container">
    <span v-for="post in posts" :key="post.id" id="posts-show">
      <button class="post-card">
        {{ post.title }}
      </button>
    </span>
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
/* HEADER */
body {
  background-color:rgb(231, 52, 76);
  font-family: Verdana, Tahoma, sans-serif;
  margin: 0;
}

#header-page {
  background-color:rgb(245, 94, 114);
  box-shadow: 3px 4px 8px 1px rgba(0, 0, 0, 0.2);
  height: 110px;
  margin-bottom: 50px;
}

.name-page {
  color: #fff;
  font-size: 5em;
  text-align: center;
  text-shadow: 1px 1px 2px #000;
  margin: 0;
}

/* POSTS */
#posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.post-card {
  font-family: Verdana;
  font-size: 1em;
  background-color: #fff;
  width: 250px;
  height: 100px;
  margin: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
}
</style>