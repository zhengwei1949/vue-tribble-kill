<template>
    <div class='ShowBlog' v-theme:column="'wide'">
        <input type="text" v-model="search">
        <h1>博客总览</h1>
        <div v-for="blog in filteredBlogs" :key="blog.id">
            <h3 v-rainbow>{{ blog.title | toUppercase }}</h3>
            <p>{{ blog.body | snippet }}</p>
            <button @click="del(blog.id)">删除</button>
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
            },
            del(id){
                // console.log(id)
                this.$axios.delete('/posts/'+id)
                .then(data=>{
                    console.log(data)
                    if(data.status == 200 && data.statusText == 'OK'){
                        console.log(111)
                        this.getData()
                    }
                })
            }
        },
        computed:{
            filteredBlogs:function(){
                var that = this 
                return this.blogs.filter(function(blog){
                    // return true
                    // console.log(blog.title.includes(that.search))
                    return blog.title.includes(that.search.toLowerCase())
                })
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase()
            }
        },
        directives:{
            'rainbow':{
                bind(el,binding,vnode){
                    el.style.color = '#'+Math.random().toString(16).slice(2,8)
                }
            }
        },
        created() {
            this.getData()
        },
    }
</script>
<style scoped>

</style>