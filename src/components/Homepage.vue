<template>
  <div id="home-view">
      <h1 class="name-page">H. BLOG</h1>
      <button class="home-button">Confira nossos posts! </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  background-color:rgb(231, 52, 76);
  font-family: Verdana, Tahoma, sans-serif;
}

#home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.name-page {
  color: #fff;
  font-size: 8em;
  text-shadow: 1px 1px 2px #000;
}

.home-button {
	color: #fff;
	background-color: rgb(231, 52, 76);
	border:1px solid #000;
	border-radius:28px;
	cursor:pointer;
	font-size:1.2em;
	padding:16px 31px;
	text-transform: uppercase;
	text-shadow: 0px 1px 1px #000;
}

</style>