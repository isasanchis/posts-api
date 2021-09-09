<template>
  <div>
    <header id="header-container">
      <h1 class="header-name">H. BLOG</h1>
      <input class="header-input" type="search" name="search" id="search" v-model="searchText" @change="changeInput">
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    changeInput() {
      this.$emit('filter', this.searchText);
    }
  },
}
</script>


<style>
#header-container {
  background-color:rgb(231, 52, 76);
  box-shadow: 3px 4px 8px 1px rgba(0, 0, 0, 0.2);
  height: 80px;
}

.header-name {
  color: #fff;
  font-size: 3em;
  text-align: center;
  text-shadow: 1px 1px 2px #000;
  margin: 0;
}

@media screen and (min-width: 62.5em) {
  #header-container {
    height: 110px;
  } 
  .header-name {
    font-size: 5em;
  }
}
</style>