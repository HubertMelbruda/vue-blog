<template>
  <div class="create">
    <form @submit.prevent="handleSubmit" class="form">
      <label class="form__title label">Title:</label>
      <input v-model="title" type="text" class="form__input" required>

      <label class="form__content label">Content:</label>
      <textarea v-model="body" class="form__input textarea" required></textarea>

      <label class="form__tags label" >Tags (hit enter to add a tag)</label>
      <input v-model="tag" @keydown.enter.prevent="handleKeydown" type="text" class="form__input" >
      <div v-for="tag in tags" :key="tag.id" class="pill">
        #{{ tag }}
      </div>

      <button class="button">Send</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { projectFirestore, timeStamp } from '@/firebase/config'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()
    // router.go(-1)
    // router.go(1)
    

    const handleKeydown = () => {
      if(!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '')   // remove all whitespace 
        tags.value.push(tag.value)
      }
        tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createAt: timeStamp()
        }

        //add user post to database
       const res = await projectFirestore.collection('posts').add(post)

       router.push({ name: 'home'})
    }

    return { title, body, tag, tags, handleKeydown, handleSubmit}
  }
  
}
</script>
<style>
  .form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  .form__input {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgb(189, 189, 189);
  }
  .textarea {
    height: 160px;
  }
  .label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #d8188e;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  .button {
    display: block;
    margin-top: 30px;
    background: #d8188e;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 8px 25px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  
</style>