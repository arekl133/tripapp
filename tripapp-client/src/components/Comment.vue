<template>

  <div class="comment" :class="{'good': comment.rate > 3}" :style="{background: backgroundColor()}">
   <p><strong>Tytuł: </strong>{{comment.title}}</p>
    <p><strong>Zawartość: </strong>{{comment.content}}</p>
    <p><strong>Nick: </strong>{{comment.nick}}</p>
    <p><strong>Ocena: </strong>{{comment.rate}}</p>
  </div>

</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {type: Object, required: true}
  },
  methods: {
    backgroundColor() {
      switch(this.comment.rate) {
        case 5:
        case 4:
          return 'lightblue'
        case 3:
          return 'dodgerblue'
        case 2:
        case 1:
          return 'blue'
      }
    }
  }
}
</script>

<style scoped>

.comment {
  border: 1px solid rgb(0, 0, 0);
  width: 350px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
 
}
.comment p{
  color: white;
  font-size: 1.5rem;
}
.good {
  background: rgb(49, 69, 89);
}
.neutral {
  background: rgb(49, 69, 89);
}
.bad{
  background: rgb(49, 69, 89);
}
</style>