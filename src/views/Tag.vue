<template>
  <div class="tag">
    Tag
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'


export default {
  setup() {
    const route = useRoute()

    const { posts, error, load } = getPosts()
    load()
    console.log(posts.value)
    console.log(route.params.id)
    
    // const filteredPosts = computed(() => {
    //   posts = posts.
    // }) 



    return { }
  }  
}
</script>

<style>
  
</style>