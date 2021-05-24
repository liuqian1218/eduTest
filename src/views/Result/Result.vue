<template>
  <div>
    <table>
      <th>
        <td>类型</td>
        <td>得分</td>
      </th>
      <tr v-for="item in score">
        <td>{{item.type}}</td>
        <td>{{item.score}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name:"Result",
    data(){
      return {
        res:[],
        score:[]
      }
    },
    methods:{
      getScore(obj){
        var score = 0;
        if(obj.direct == "正向计分"){
          switch(obj.answer){
            case 'A':
              score = 1;
              break;
            case 'B':
              score = 2;
              break;
            case 'C':
              score = 3;
              break;
            case 'D':
              score = 4;
              break;
            case 'E':
              score = 5;
              break;
          }

        }else{
          switch(obj.answer){
            case 'A':
              score = 5;
              break;
            case 'B':
              score = 4;
              break;
            case 'C':
              score = 3;
              break;
            case 'D':
              score = 2;
              break;
            case 'E':
              score = 1;
              break;
          }
        }
        return score ;
      }
    },
    created(){
      this.res = this.$store.state.results;
      var types = this.$store.state.types;
            
      types.forEach(element => {
        this.score.push({
          type : element,
          score : 0
        })
        var resitem = this.res.filter(item => {
          return item.type === element;
        })
        this.score[this.score.length-1].score =resitem.reduce((accumulator, currentValue) => {
          return accumulator+this.getScore(currentValue);
        },0)
      });
     
    },
}
</script>

<style>

</style>