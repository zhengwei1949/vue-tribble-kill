<template>
  <div class="home">
    <add-blog></add-blog>
  </div>
</template>

<script>
// @ is an alias to /src
import AddBlog from '@/components/AddBlog.vue'

export default {
  name: 'home',
  components: {
    AddBlog
  }
}
</script>
