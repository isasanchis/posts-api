<template>
    <div id="detail-container">
        <h1 class="title-detail">{{ postObj.title }}</h1>
        <p class="text-detail">{{ postObj.body }}</p>
        <button id="returnBtn" @click="$emit('click')">voltar</button>
    </div>
</template>

<script>
export default {
    name: 'SinglePostView',
    props: {
        postObj: {
            type: Object,
            required: true,
            default: () => {}
        }
    }
}
</script>

<style>

#detail-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px 0 30px 0;
    padding: 50px;
}

.title-detail {
    text-align: center;
}

</style>