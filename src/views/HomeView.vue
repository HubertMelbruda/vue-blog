<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="isPostVisible">
      <div v-if="posts.length" class="layout">
        <PostList :posts="posts" />
        <TagCloud :posts="posts" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
      <button v-if="posts.length" @click="showPosts" class="button">
        <p v-if="showPosts">Hide Post</p>
        <p v-if="!showPosts">Show Post</p>
      </button>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity"
import PostList from "../components/PostList.vue"
import Spinner from "../components/Spinner.vue"
import TagCloud from "../components/TagCloud.vue"
import getPosts from "../composables/getPosts"

export default {
  name: "HomeView",
  components: {
    PostList,
    Spinner,
    TagCloud,
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
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
