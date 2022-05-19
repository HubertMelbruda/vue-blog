<template>
  <header>
    <nav>
      <router-link class="link" :to="{ name: 'home' }">Posts</router-link>
      <router-link class="link" :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </header>
</template>
<script>
export default {

}
</script>
<style>
.link {
  text-decoration: none;
  font-size: 25px;
  letter-spacing: 1px;
  background-color: #ff8800;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 10px;
  color:#f4f4f4
}

 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  
  header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: rgb(0, 0, 0);
    font-weight: bold;
  }
</style>
