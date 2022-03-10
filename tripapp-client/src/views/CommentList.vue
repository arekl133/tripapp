<template>
<div class="container">
  <div v-for="comment in comments" v-bind:key="comment.id">
    <Comment :comment="comment"/>
  </div>
  <CommentForm @add-comment="addComment()"/>
  <button @click="goBack">Powrot</button>
</div>
</template>

<script>
import axios from "axios";
import Comment from "@/components/Comment";
//import placeService from "@/services/placeService";
import CommentForm from "@/components/CommentForm";
export default {
  name: "CommentList",
  components: {Comment, CommentForm},
  props: {
    id: {type: String}
  },
  data() {
    return {
      
      comments: [],
      
    }
  },
  mounted(){
    this.getPlace(this.id)
  },

  created() {
    
    this.getPlace(this.$route.params.id)
  },
  methods: {
    
    getPlace(id) {
    axios.get('api/comments/' + id)
    .then((resp)=>{
      this.comments = resp.data;
      console.log(this.comments)
      console.log(id)
    })
  },
   addComment() {
  const id = this.$route.params.id
  console.log(id)
  axios.post('api/comments/' + id,
      
      {
          nick: this.comments.nick,
          title: this.title,
          content: this.content,
          rate: this.rate,
          place: id
      }
  
  )
  
    console.log("click")
    },
    goBack() {
      this.$router.push('/places/' + this.$route.params.id)
    },
  }
}

</script>

<style scoped>
.container{
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color:rgb(123, 147, 170) ;

}
</style>