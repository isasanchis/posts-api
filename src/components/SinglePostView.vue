<template>
  <div>
    <!-- <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p> -->
    Hello world
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      posts: null,
      url: 'https://jsonplaceholder.typicode.com/posts'
    }
  },
  // mounted() {
  //   axios.get(this.url)
  //     .then(response => (this.posts = response.data))
  //     .catch(error => console.log(error));
  // },
}
</script>

<style>

</style>