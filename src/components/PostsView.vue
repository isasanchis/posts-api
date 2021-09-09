<template>
  <div id="posts-view">
    <div id="posts-container">
      <span v-for="post in posts" :key="post.id" id="posts-show">
        <button @click="showModal(post)" class="post-card">
          {{ post.title }}
        </button>
      </span>
    </div>
    
    <div class="modal-container" v-if="visibleModal" @click="closeModal">
      <div class="modal-content">
        <span>
          <h2> {{ chosenPost.title }} </h2>
          <p> {{ chosenPost.body }} </p>
        </span>
      <span class="closeBtn" @click="closeModal">&times;</span>
      </div>
    </div>

  </div> 
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: null,
      url: 'https://jsonplaceholder.typicode.com/posts',
      chosenPost: { title: '', body: ''},
      visibleModal: false,
    }
  },
  mounted () {
    axios.get(this.url)
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  },
  methods: {
    showModal(post) {
      this.chosenPost = post;
      this.visibleModal = true;
    },
    closeModal() {
      this.visibleModal = false;
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

/* MODAL  */

.modal-container {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  overflow: hidden;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.closeBtn {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.closeBtn:hover,
.closeBtn:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>