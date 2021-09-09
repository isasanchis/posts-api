<template>
  <div>
    <div v-for="post in posts" :key="post.id" id="posts-container">
      <h1 @click="$emit('click', post)" class="post-card">{{ post.title }}</h1>
   </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style>

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