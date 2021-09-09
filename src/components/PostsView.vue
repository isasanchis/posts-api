<template>
  <div id="posts-view">

    <div id="posts-container">
      <span v-for="post in posts" :key="post.id" id="posts-show">
        <button @click="toggleVisible(post)" class="post-card">
          {{ post.title }}  
          <SinglePostView :body="post.body" :title="post" :postVisible="postVisible"/> 
        </button>
      </span>
    </div>

  </div> 
</template>

<script>
import axios from 'axios'
import SinglePostView from './SinglePostView.vue'

export default {
  components: { SinglePostView },
  data() {
    return {
      posts: null,
      url: 'https://jsonplaceholder.typicode.com/posts',
      postVisible: 0
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
      this.postVisible = post.id;
      console.log(post.id);
    }
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