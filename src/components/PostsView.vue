<template>
  <div id="posts-view">
    <router-link to="post">CLICK</router-link>
      <div id="posts-container">
        <span v-for="post in posts" :key="post.id" id="posts-show">
          <span class="post-card">
            {{ post.title }}
          </span>
        </span>
      </div>
  </div> 
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: null,
      url: 'https://jsonplaceholder.typicode.com/posts'
    }
  },
  mounted () {
    axios.get(this.url)
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  }
}
</script>

<style>

/* POSTS */

#posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.post-card {
  display: block;
  background-color: #fff;
  width: 250px;
  height: 100px;
  margin: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
}

</style>