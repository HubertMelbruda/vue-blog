<template>
  <header>
    <h1 class="header__title">This is your Blog</h1>
    <nav>
      <router-link class="link" :to="{ name: 'home' }">Posts</router-link>
      <router-link class="link" :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </header>
</template>
<script>
export default {}
</script>

<style>

.header__title {
  color: #dfdfdf;
  font-size: 48px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.link {
  color: #bbb;
  text-decoration: none;
  margin-left: 30px;
}
header a.router-link-active {
  color: rgb(0, 0, 0);
  font-weight: bold;
}
</style>
