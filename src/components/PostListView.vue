<template>
  <div id="posts-show">
    <main v-for="post in posts" :key="post.id" id="posts-container">
      <span @click="$emit('click', post)" class="post-card">{{ post.title }}</span>
   </main>
  </div>
</template>

<script>
export default {
  name: 'PostListView',
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped>
#posts-show {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

#posts-container {
  margin: 30px;
}

.post-card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 5px;
  width: 250px;
  height: 100px;
  margin: 0;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
}
</style>