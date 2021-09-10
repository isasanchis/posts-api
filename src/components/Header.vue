<template>
  <div>
    <header class="header-container">
      <h1 class="header-name">H. BLOG</h1>
      <input class="header-input" type="search" name="search" id="search" placeholder="Digite e pressione ENTER" 
        v-model="searchText"
        @change="changeInput" />
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

<style scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #e7344c;
  height: 80px;
  box-shadow: 3px 4px 8px 1px rgba(0, 0, 0, 0.2);
}

.header-name {
  color: #fff;
  margin: auto 70px;
  text-shadow: 1px 1px 2px #000;
}

.header-input {
  height: 32px;
  width: 50%;
  margin: auto 30px;
}
</style>