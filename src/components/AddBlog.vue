<template>
  <div class='AddBlog'>
    <h2>添加博客</h2>
    <form v-if="!submmited">
      <div>
        <label for="title">博客标题</label>
        <input type="text" name="" id="title" v-model="blog.title">
      </div>
      <div>
        <label for="content">博客内容</label>
        <textarea name="" id="content" cols="30" rows="10" v-model="blog.content"></textarea>
      </div>
      <div id="checkboxes">
        <label for="vue">Vue.js</label>
        <input type="checkbox" id="vue" value="vue.js" v-model="blog.categories">
        <label for="node">Node.js</label>
        <input type="checkbox" id="node"  value="node.js" v-model="blog.categories">
        <label for="react">React.js</label>
        <input type="checkbox" id="react" value="React.js" v-model="blog.categories">
        <label for="angular">Angular.js</label>
        <input type="checkbox" id="angular" value="Angular.js" v-model="blog.categories">
      </div>
      <div>
        <select name="" id="" v-model="blog.author">
          <option v-for="(item,index) in authors" :key="index">
            {{item}}
          </option>
        </select>
      </div>
      <button @click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>您的博客发布成功!!</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:{{blog.content}}</p>
      <ul>
        <li v-for="(item,index) in blog.categories" :key="index">
          {{ item }}
        </li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'AddBlog',
    data() {
      return {
        blog:{
          title:'',
          content:'',
          categories:[],
          author:''
        },
        authors:['Hemiah','Henry','Bucky'],
        submmited:false
      }
    },
    methods: {
      post() {
        // console.log(111)
        this.$axios.post('/posts',{
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        })
        .then(data=>{
          console.log(data)
          this.submmited = true
        })
      }
    },
  }
</script>
<style scoped>

</style>