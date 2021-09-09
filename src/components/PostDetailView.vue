<template>
    <div id="reading-container">

        <div id="detail-container">
            <h1 class="title-detail">{{ postObj.title }}</h1>
            <p class="text-detail">{{ postObj.body }}</p>
            <button id="returnBtn" @click="$emit('click')">Voltar</button>
        </div>

        <section id="posts-show">
            <span id="posts-container">
                <h3>Leia mais:</h3>
                <span id="post-card" class="post-card">{{ hintPosts[0].title }}</span>
                <span id="post-card" class="post-card">{{ hintPosts[1].title }}</span>
                <span id="post-card" class="post-card">{{ hintPosts[2].title }}</span>
                <span id="post-card" class="post-card">{{ hintPosts[3].title }}</span>
            </span>
        </section>

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
        },
        hintPosts: {
            type: Array,
            required: true,
            default: () => []
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
    margin: 30px;
    margin-bottom: 0;
    padding: 40px;
    border-radius: 5px;
}

#reading-container span {
    margin: 20px;
}

#reading-container h3 {
    color: #fff;
    text-align: center;
    font-weight: 100;
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
    margin: 20px 0 20px 0;
}

#returnBtn:hover{
    background: rgb(226, 113, 128);
}

#post-card {
    display: inline-block;
    width: 200px;
}

</style>