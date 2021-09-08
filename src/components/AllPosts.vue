<template>
  <div id="posts-view">

    <header id="header-page">
      <h1 class="name-page">H. BLOG</h1>
      <div class="line-1"></div>
    </header>

  <div id="posts-container">
    <main v-for="post in posts" :key="post.id" id="posts-show">
      <span class="post-card">
        {{ post.title }}
      </span>
    </main>
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

.name-page {
  color: #fff;
  font-size: 5em;
  text-align: center;
  text-shadow: 1px 1px 2px #000;
  margin: 0;
}

.line-1 {
  border-top: 1px solid black;
  margin-top: 30px;
  margin-bottom: 50px;
}

/* POSTS */
#posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#posts-show{
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.post-card {
  background-color: #fff;
  text-align: center;
  padding: 16px;
  width: 250px;
  height: 100px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
</style>