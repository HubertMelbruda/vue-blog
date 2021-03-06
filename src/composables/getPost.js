import { projectFirestore } from "@/firebase/config"
import { ref } from "vue"

const getPost = id => {
  const post = ref(null)
  const error = ref(null)


  const load = async () => {
    try {
      // let data = await axios.get("http://localhost:8000/posts/" + id);
      // post.value = data.data

      let res = await projectFirestore.collection("posts").doc(id).get()

      if (!res.exists) {
        throw Error("This post does not exist")
      }

      post.value = { ...res.data(), id: res.id }
    } catch (err) {
      error.value = err.message
    } finally {
      console.log("Ten blok kodu wykonuje się zawsze, nawet po ERROR")
    }
  }

  return { post, error, load }
}

export default getPost
