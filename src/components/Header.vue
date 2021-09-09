<template>
  <div>
    <header id="header-container">
      <h1 class="header-name">H. BLOG</h1>
    </header>
  </div>
</template>

<style>

#header-container {
  background-color:rgb(245, 94, 114);
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

@media screen and (min-width: 48.75em) {
  .header-name {
    font-size: 1em;
  }
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