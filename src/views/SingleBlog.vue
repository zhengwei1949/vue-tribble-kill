<template>
    <div class='single-blog'>
        Single Blog
    </div>
</template>
<script>
    export default {
        name:'single-blog',
        data() {
            return {

            }
        },
        created(){
            console.log(this.$route.params.id)
        }
    }
</script>
<style scoped>

</style>