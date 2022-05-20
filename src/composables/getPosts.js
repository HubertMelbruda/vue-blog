import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  const axios = require("axios")

  const load = async () => {
    try {
      // simulation delay
      // await new Promise(resolve => {
      //   setTimeout(resolve, 1000)
      // })

      // fetch data from localhost
      // const data = await axios.get("http://localhost:8000/posts")
      // posts.value = data.data

      const res = await projectFirestore.collection("posts").get()

      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      error.value = err.message
    }
  }
  return { posts, error, load }
}

export default getPosts
