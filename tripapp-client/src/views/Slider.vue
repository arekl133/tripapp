<template>
<div class="sliderbox">
    <div class="content" v-for="(img, index) in images" :key="img">
        <transition name="fade">
            <div v-if="currentSlide == index">
               <img :src="require(`@/assets/slider/${img}.jpg`)" alt class="img" />
            </div>
        </transition>
    </div>
    <div class="dotted">
        <div v-for="(img,index) in images" 
        :key="img" 
        @click="dotActive(index)"
        :class="currentSlide === index ? 'dott2' : 'dott3'"
        class="dott"
        ></div>
    </div>
    <div class="boxInfo">
            <div class="textbox1" v-for="(tex, index) in text" :key="tex" >
                <transition name="fade">
                    <div v-if="currentSlide == index">
                     <h1 class="text">{{tex}}</h1> 
                    </div>
                </transition>
         </div>

          <div class="textbox2" v-for="(texp, index) in textp" :key="texp" >
              <transition name="fade">
                 <div v-if="currentSlide == index">
                     <h1 class="textp">{{texp}}</h1> 
                 </div>
             </transition>
         </div>
    </div>
</div>      


  
</template>

<script>
export default {
name: "Slider",

data(){
    return {
        currentSlide: 0,
        interval: "",
        sliders:['content1', 'content2', 'content3'],
        images: ['5', '6', '7', '8'],
        text: ['Wycieczki jedndniowe', 'Tanie wycieczki' , 'Dla Całych rodzin', 'Zapraszamy do zapoznania sie z ofertą'],
        textp: ['tekst', 'Lorem ipsum', 'Lorem loorem lorem', 'Lorem ipsum Lorem']
    };
  },
  methods: {
    dotActive(index) {
        this.currentSlide = index;
    },
  },

  mounted(){
      setInterval(() => {
          if(this.currentSlide == 3){
              this.currentSlide = 0
          }else{
              this.currentSlide ++
          }
      }, 3000)
  },
  beforeUnmount(){
      clearInterval(this.interval);
  }
};


</script>

<style scoped>
.sliderbox{
    position: relative;
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
   
}
.content {
    position: absolute;
    width: 100vw;
    height: 100%;
    
}
.img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 5px solid rgb(49, 69, 89);
}

.boxInfo{
   position: relative;
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    }
.textbox1{
    position: absolute;
    bottom: 70px;
    width: 70%;
    height: auto;
    margin-left: 100px;
    
}
.textbox2{
    position: absolute;
    bottom: 40px;
    width:80;
    height: auto;
    margin-left: 100px;
   
    
}

.text{
    color: white;
    width: 100%;
    height: 100%;
    font-size: 3.5rem;
    font-family: 'Poppins', sans-serif;
    
    font-weight: 600;
    text-transform: uppercase;
}
h1.textp{
    
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: white;
    
    text-transform: uppercase;
}
.content1{
    position: absolute;
    width: 100%;
    height: 350px;
    background-color:blue;
}
.content2{
    position: absolute;
    width: 100%;
    height: 350px;
    background-color:black;
}
.content3{
    position: absolute;
    width: 100%;
    height: 350px;
    background-color:yellow;
}



.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
  
}

.fade-enter-from {
  
  opacity: 0;
  
}
.fade-leave-to {
  opacity: 0;
  
  
}



.dotted {
   position: absolute;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.dott{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 5;
    margin: 0 5px 15px 5px;
    cursor: pointer;
    box-shadow: 1px 1px 15px  white;
}
.dott2{
    background: rgb(49, 69, 89);
    
}
.dott3{
   background: white;
    
}
</style>

