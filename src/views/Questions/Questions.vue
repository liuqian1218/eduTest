<template>
  <div>
    <center>职业兴趣测试</center>
    <percent :sort="sort"></percent>
    <qst-detail :qslist="questionList" @sendSort="getSort"></qst-detail>
  </div>
</template>

<script>
import percent from './childrenQuestion/percent'
import qstDetail from './childrenQuestion/qstDetail'
export default {
    name:"Questions",
    components:{
      percent,
      qstDetail,
    },
    data(){
      return {
        questionList:[],
        sort:1,
      }
    },
    methods:{
      getSort(s){
        this.sort = s;
      }
    },
    created(){
      this.questionList = this.$store.state.qsList;
    }
}
</script>

<style>

</style>