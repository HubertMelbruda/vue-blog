<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }" >
      <h3 class="post__title">{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }" class="pill">
        #{{ tag }}
      </router-link>
    </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core"

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "..."
    })

    return { snippet }
  },
}
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #515151;
}
.post__title {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post__title::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #d8188e;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
</style>
