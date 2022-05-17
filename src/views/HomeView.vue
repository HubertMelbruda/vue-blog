<template>       
  <div class="home">
    <!-- show Error when problem with fetching data  -->
    <div v-if="error">{{ error }}</div>

    <!-- Show post list or Loading data... msg.  -->
    <div v-if="posts.length">
      <PostList  :posts="posts" />
    </div>
    <div v-else>Loading data...</div>

    <!-- button to show and hide posts -->
    <button @click="showPosts = !showPosts">
      <p v-if="showPosts">Hide Post</p>
      <p v-if="!showPosts">Show Post</p>
    </button>

  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'HomeView',
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts()
    
    load()
    
    return { posts, error }
  }
}
</script>
