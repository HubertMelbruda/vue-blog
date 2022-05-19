<template>
  <div class="tag-cloud">
    <h3 class="tag-cloud__header">Tags:</h3>
    <div v-for="tag in tags" :key="tag" class="tag-cloud__tags">
      <router-link :to="{ name: 'Tag', params: { tag: tag }}" class="tag-cloud__tag">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>
<script>
import useTags from '../composables/useTags'

export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  }
  
}
</script>
<style>
.tag-cloud {
    padding: 10px;
  }
  .tag-cloud__header {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud__tags {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud__tag {
    color: rgb(115, 114, 114);
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
  
</style>