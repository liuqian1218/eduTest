<template>
  <div>
    <h2>职业兴趣测试</h2>
    <h3>提示：</h3>
    <p>1、请按照主观兴趣作答，无需参考当前能力</p>
    <p>2、作答越认真，结果准确度越高</p>
    <p>3、请在安静的环境及平静的心态下进行测试</p>
    <button @click = "start">准备好了，开始测试</button>
  </div>
</template>

<script>
export default {
    name:"Home",
    methods:{
      start(){
         this.$router.push("/questions/"+ 1);
      },
      getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
        }
        return shuffled.slice(min);
      },
    },
    data(){
      return {
        qsList:[],
      }
    },
    created(){
      //更新store里的types
      var list = this.$store.state.list;//全 问题列表
      var types = [];
      list.forEach(element => {
        var con = types.findIndex((e) => {
          return e === element.type
        });
        if(con === -1){
          types.push(element.type);
        }
      });
      this.$store.commit("updateTypes",types)

      //随机获取每个类型5到题
      types.forEach(item => {
        var itemList = list.filter(value => {
          return value.type === item;
        })
        //随机获取itemList 的5道题，push到qsList
        // console.log(this.getRandomArrayElements(itemList,5));
        this.qsList.push(...this.getRandomArrayElements(itemList,5));
      }) 
      // console.log(this.qsList);
      this.$store.commit("updateQsList",this.qsList)
    },
}
</script>

<style>

</style>