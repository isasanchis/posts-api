<template>
    <div id="reading-container">
        <div id="details-show">
            <div id="detail-container">
                <h1 class="title-detail">{{ post.title }}</h1>
                <p class="text-detail">{{ post.body }}</p>
                <button id="returnBtn" @click="$emit('click')">Voltar</button>
            </div>
        </div>
        <p style="color:#fff; text-align:center;">Leia mais:</p>
        <PostListView :posts="hintPosts" @click="changePost" />
    </div>
</template>

<script>
import PostListView from './PostListView.vue' 

export default {
    name: 'PostDetailView',
    components: { PostListView },
    data() {
        return {
            post: { 
                id: null, 
                title: null, 
                body: null 
            },
        }
    },
    created() {
        this.post = this.postObj;
    },
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
    },
    methods: { 
        changePost(post) {
            const index = this.hintPosts.indexOf(post);
            this.hintPosts.splice(index, 1);
            this.hintPosts.push(this.post);
            this.post = post;
        }
    }
}
</script>

<style scoped>

#detail-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px;
    margin-bottom: 0;
    padding: 38px;
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
    margin: 20px 0 20px 0;
}

#returnBtn:hover{
    background: rgb(226, 113, 128);
}

#details-show {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 280px) {
    #detail-container {
        padding: 20px;
    }
}

</style>