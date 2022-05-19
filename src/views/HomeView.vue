<template>
  <div class="home">
    <!-- show Error when problem with fetching data  -->
    <div v-if="error">{{ error }}</div>

    <!-- Show post list or Loading data... msg.  -->
    <div v-if="isPostVisible">
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
      <div v-else><Spinner /></div>
    </div>

    <!-- button to show and hide posts -->
    <button @click="showPosts">
      <p v-if="showPosts">Hide Post</p>
      <p v-if="!showPosts">Show Post</p>
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import PostList from "../components/PostList.vue"
import Spinner from "../components/Spinner.vue"
import getPosts from "../composables/getPosts"

export default {
  name: "HomeView",
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const isPostVisible = ref(true)
    const showPosts = () => {
      isPostVisible.value = !isPostVisible.value
    }

    const { posts, error, load } = getPosts()
    load()

    return { posts, error, isPostVisible, showPosts }
  },
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
