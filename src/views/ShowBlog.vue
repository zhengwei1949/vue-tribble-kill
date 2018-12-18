<template>
    <div class='ShowBlog' v-theme:column="'wide'">
        <h1>博客总览</h1>
        <div v-for="blog in blogs" :key="blog.id">
            <h3 v-rainbow>{{ blog.title | to-uppercase }}</h3>
            <p>{{ blog.body | snippet }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'show-blogs',
        data() {
            return {
                blogs:[],
                search:''
            }
        },
        methods: {
            getData() {
                this.$axios.get('/posts')
                .then(data=>{
                    this.blogs = data.data.slice(0,10)
                })    
            }
        },
        created() {
            this.getData()
        },
    }
</script>
<style scoped>

</style>