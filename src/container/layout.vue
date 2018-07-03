
<template>
  <div class="layout">
     <router-view/>
     <div class="test"></div>
     <div class="footer border">
        <router-link v-for='(item,index) in navLink' :key='index' :to="{name:item.name}">
          <i :class="item.icon+' iconfont'"></i>
          <span>{{item.text}}</span>
        </router-link>  
     </div>
  </div>  
</template>

<script>
export default {
   data(){
     return {

     }
   },
   computed:{
      ...vm.mapGetters([
        'navLink'
      ])
   },
   created(){
     
   }
}
</script>

<style lang="scss" scoped>
@import "../../static/border.scss";
 .layout{
   .border{
     height: 90px;
     border-top: 1px solid #ccc ;/*no*/
      @include border-bottom-1px(#fff); 
   }
  .footer{
    width: 100%;
    display: flex;
    position: fixed;
    justify-content: space-around;
    text-align: center;
    bottom:0;
    height: 90px;
   
    a{
      display: flex;
      flex-direction: column;
      justify-content: space-around; 
      padding: 10px 0 ;
      .iconfont{
        font-size:45px;
      }

    }

  } 
 } 

</style>


