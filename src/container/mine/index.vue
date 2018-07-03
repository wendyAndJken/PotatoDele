<template>
  <div class="mine">
    <div class="header">
      <h1>this is mine</h1>  
    </div>
    <flexbox class="nav_box" :gutter="0"> 
      <flexbox-item :span="11/12">
        <swiper :options="navSwiperOption"  ref='navSwiper' id='navSwiper' v-if='!PopupShow'>
        <swiper-slide v-for='(item,index) in nav' :key='index' :class="index==active?'yellow':''">{{item.text}}</swiper-slide>
        </swiper> 
        <p v-if='PopupShow'>全部频道</p>  
      </flexbox-item> 
      <flexbox-item :span="1/12" @click.native='changePopup'>
        <x-icon type="ios-arrow-down" size="30"></x-icon>
      </flexbox-item>
    </flexbox >

    <div class="mask" v-if='PopupShow'>
        <div class="popup_content"></div>
    </div>

    <div class="container_box">
      <swiper :options="containerSwiperOption"  ref='containerSwiper' id='containerSwiper'>
        <swiper-slide v-for='(item,index) in nav' :key='index'>{{item.text}}</swiper-slide>
      </swiper>  
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import {Flexbox, FlexboxItem ,Popup ,TransferDom} from 'vux'
export default {
    directives: {
      TransferDom
    },
   data(){
     return {
       PopupShow:false,
        nav:[
          {text:1,show:true},{text:2,show:true},{text:3,show:true},{text:4,show:true},{text:5,show:true},{text:6,show:true},{text:7,show:true},{text:8,show:true}
          ],
        navSwiperOption:{
            slidesPerView:5,
            slidesPerGroup : 1,
            resistanceRatio:0,
            watchSlidesProgress : true,
            watchSlidesVisibility : true, 
             on:{
               tap:()=>{
                   this.isActive(this.navSwiper.clickedIndex) 
                   this.containerSwiper.slideTo(this.active);  
                },
             }
        },
        containerSwiperOption:{
            resistanceRatio:0,
              autoHeight:true,
              on:{
                slideChangeTransitionEnd:()=>{
                  this.isActive(this.containerSwiper.activeIndex) 
                  var activeIndex = this.containerSwiper.activeIndex;            
                  var navSlide = $("#navSwiper .swiper-slide").removeClass("active").eq(activeIndex).addClass("active");
                   if(navSlide.hasClass("swiper-slide-visible") && activeIndex>2){                 
                      var num = Math.floor(this.navSwiper.width/navSlide.width()-3) 
                      if(this.containerSwiper.activeIndex>=this.navSwiper.activeIndex){              
                        this.navSwiper.slideTo(this.containerSwiper.activeIndex-num);             
                      }
                   }
                   if(navSlide.hasClass("swiper-slide-visible") && activeIndex <=2){  
                      this.navSwiper.slideTo(0,500,false);
                   }

                }
              }   
        }
     }
   },
   components:{
      swiper, 
      swiperSlide,
      Flexbox, 
      FlexboxItem,
      Popup 
   },
   computed:{
    ...vm.mapGetters([
        'active'
    ]),
    navSwiper(){
      return this.$refs.navSwiper.swiper
    },
    containerSwiper(){
      return this.$refs.containerSwiper.swiper
    }

   },
   methods:{
      ...vm.mapActions([
        'isActive'
      ]),
     changActive(){
       this.isActive(index)
     },
     changePopup(){
       this.PopupShow = !this.PopupShow
        console.log(2)
     },
     log(){

     } 
   },
   created(){  
   },
    mounted(){        
    
   },
}
</script>

<style lang="scss">
  .mine{
    position: relative;
    height: 100%;
    width: 100%;
    .mask{
      position: absolute;
      background-color: rgba(0,0,0,.2);
      height: 100%;
      width: 100%;
      z-index: 500;
      .popup_content{
        width: 100%;
        height: 40%;
        background-color: rgb(96, 198, 230);
        position: absolute;
        top:0;
        z-index: 501;
      }
    }
    #navSwiper{
      .swiper-slide{
        height: 40px;
        background-color:pink; 
        color: black;
        &.yellow{
          background-color: yellow;
        }  
      }

    }
    #containerSwiper{
      height: 300px;
      background-color: brown;
      color:#fff;
      font-size:30px
    }
  }
</style>
