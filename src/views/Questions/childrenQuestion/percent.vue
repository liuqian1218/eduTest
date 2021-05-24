<template>
  <div id="percent">
      <span>{{sort}}/105</span>
      <div class="outer">
          <div class="inner" :style="{width:health+'%'}"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:"percent",
    props:{
        sort:{
            type:Number,
            default(){
                return 0
            }
        },
    },
    data(){
        return {
            health:0
        }
    },
    updated(){
        this.health = this.sort/105*100 ;
    },
}
</script>

<style scoped>
    .outer{
        height:10px;
        width:95%;
        margin:0 auto;
        border:1px #000 solid;
        box-sizing:border-box;
    }
    .inner{
        height:10px;
        background-color: green;
    }
    span{
        font-size:12px;
    }
</style>