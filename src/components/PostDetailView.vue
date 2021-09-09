<template>
    <div id="detail-container">
        <h1 class="title-detail">{{ postObj.title }}</h1>
        <p class="text-detail">{{ postObj.body }}</p>
        <button id="returnBtn" @click="$emit('click')">Voltar</button>

        
    </div>
</template>

<script>
export default {
    name: 'PostDetailView',
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
    margin: 30px ;
    padding: 50px;
    border-radius: 5px;
}

.title-detail {
    text-align: center;
}

#returnBtn {
    padding: 10px;
    background: rgb(245, 94, 114);
    color: #fff;
    border: none;
    border-radius: 30px;
    width: 90px;
    cursor: pointer;
    margin: 20px 0 0 0;
}

#returnBtn:hover{
    background: rgb(226, 113, 128);
}

</style>