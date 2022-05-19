import { ref } from "vue"

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  const axios = require("axios")

  const load = async () => {
    try {
      // simulation delay
      await new Promise(resolve => {
        setTimeout(resolve, 1000)
      })

      const data = await axios.get("http://localhost:8000/posts")
      posts.value = data.data
    } catch (error) {
      if (error.response.statusText !== "OK") {
        error.value =
          "Problem with a server. Status code: " + error.response.status
      }
    }
  }
  return { posts, error, load }
}

export default getPosts
