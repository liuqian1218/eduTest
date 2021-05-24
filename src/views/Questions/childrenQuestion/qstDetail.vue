<template>
  <div id="qst-detail">
      <div class="title">{{sort}}、{{qsCon.question}}</div>
      <p class="answer" @click="submit('A')"><span>A、</span>完全不符合</p>
      <p class="answer" @click="submit('B')"><span>B、</span>基本不符合</p>
      <p class="answer" @click="submit('C')"><span>C、</span>不确定</p>
      <p class="answer" @click="submit('D')"><span>D、</span>基本复核</p>
      <p class="answer" @click="submit('E')"><span>E、</span>完全复核</p>
  </div>
</template>

<script>
export default {
    name:"qstDetail",
    props:{
        qslist:{
            type:Array,
        },
    },
    data(){
        return {
            qsCon:{},
            sort:1
        }
    },
    created(){
        this.qsCon = this.qslist[this.sort-1]
    },
    methods:{
        submit(ans){
            var res = {
                sort:this.sort,
                direct:this.qsCon.direct,
                answer:ans,
                type:this.qsCon.type
            }
            this.$emit("sendSort",this.sort);
            this.sort += 1;
            
            this.$store.commit("updateRes",res)
            if(this.qslist.length > this.sort-1){
                this.$router.push("/questions/"+ this.sort);
                this.qsCon = this.qslist[this.sort-1];
            }else{
                this.$router.push("/results");
            }
            
        },
    },
}
</script>

<style scoped>
    .title{
        width:95%;
        margin:20px auto;
        height:40px;
        text-align: center;
    }
    .answer{
        height:40px;
        width:95%;
        background-color: #ddd;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
    }
    .answer span{
        float:left;
        padding-left:5px;
    }
</style>