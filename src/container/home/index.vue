<template>
  <div class="home">
    <h1>this is home</h1>
    <div class="content">
      <ul class="navIs" :style="{left:left+'px'}">
        <li v-for='(item,index) in nav' :key='index' :class="index==active?'active':''"  @click='changActive(index)'>{{item.text}}</li> 
      </ul>
      <div class="container">
        <swiper :options="swiperOption"  ref='mySwiper'>
          <swiper-slide v-for='(item,index) in container' :key='index'>{{item}}</swiper-slide>
        </swiper> 
      </div>
    </div>

  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      nav: [{text:1,show:true},{text:2,show:true},{text:3,show:true},{text:4,show:true},{text:5,show:true},{text:6,show:true},{text:7,show:true},{text:8,show:true}],
      container: [1,2,3,4,5,6,7,8,],
      left:0,
      swiperOption: {//swiper3
         on:{
           slideChangeTransitionEnd:()=>{   
            this.isActive(this.swiper.activeIndex)           
           }
         } 
      }
    };
  },
  components: {
    swiper, 
    swiperSlide
  },
  computed: {
    ...vm.mapGetters([
        'active'
    ]),
    swiper(){
      return this.$refs.mySwiper.swiper
    }

  },
  methods: {
    ...vm.mapActions([
      'isActive'
    ]),
    changActive(index){
      
      if((index+1>3 && index+1 <this.nav.length-3) && index>this.active){
        console.log(index+1)
         this.left =  (index-2)*(-75)
      }else{
        // this.left =  (index-2)*(75)
      }
       this.isActive(index) 
    }
  },
  created() {
    
  },
  mounted(){ 
    console.log(this.active)
  },
  watch:{
    active:function(oldvalue,newvalue){     
      this.swiper.slideTo(oldvalue,500,false) 
    } 
  },
  updated(){
    
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    .container {
      flex: 1;
      background-color: pink;
      height: 500px;
      .swiper-container ,.swiper-slide{
        height: 100%;
      }
    }
    .navIs {
      background-color: rgb(247, 235, 238);
      margin-top: 50px;
      width: 100%;
      // overflow: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      height: 50px;
      text-align: center;
      justify-content: space-around;
      position: relative;
      li {
        width: 150px;
        display: inline-block;
        height: 50px;
      }
      .active {
        border-bottom: 3px solid yellow;
      }
    }
  }
}
</style>

