import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const axios = require("axios")

  const load = async () => {
    try {
      // simulation delay 
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      let data = await axios.get("http://localhost:8000/posts/" + id);
      post.value = data.data
    } 
    catch (err) {
      if (err.response.statusText !== "OK") {
        err.value = "That post does not exist" + err.response.status
        console.log(err.value)
      }
    }
  };

  return { post, error, load}
};

export default getPost
