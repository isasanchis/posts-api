<template>
	<div id="reading-container">
		<div class="details-show">
			<div class="detail-container">
				<h1 class="title-detail">{{ post.title }}</h1>
				<p class="text-detail">{{ post.body }}</p>
				<button class="return-btn" @click="$emit('click')">Voltar</button>
			</div>
		</div>
		<p class="readMore">Leia mais:</p>
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
		this.post = this.postInfo;
	},
	props: {
		postInfo: {
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

.detail-container {
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

.return-btn {
	padding: 10px;
	background: #e7344c;
	color: #fff;
	border: none;
	border-radius: 30px;
	width: 90px;
	cursor: pointer;
	margin: 20px 0 20px 0;
}

.return-btn:hover{
	background: #f55e72;
}

.details-show {
	display: flex;
	justify-content: center;
	align-items: center;
}

.readMore {
	text-align: center;
	font-size: 1.4em;
	margin-bottom: 0;
}

@media screen and (max-width: 280px) {
	#detail-container {
		padding: 20px;
	}
}

</style>