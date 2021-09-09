<template>
    <div>
        <p v-if="postVisible === title.id">{{ title.body }} {{ postVisible }}</p>
    </div>
</template>

<script>
export default {
    name: 'SinglePostView',
    props: {
        title: {
            type: Object,
            required: true,
            default: () => {}
        },
        body: {
            type: String,
            required: true,
            default: 'Sem content'
        },
        postVisible: {
            type: Number,
            required: false,
            default: 0
        },
    }
}
</script>

<style>

</style>