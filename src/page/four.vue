<script>

    export default {
        data(){
            return{

            }
        },

  created(){

    this.$ajax({
    url:'/topics',
    success:function(res){
      console.log(res)
    }
    })
  }
    }

</script>

<template>
  <div>
    第四个页面
  </div>
</template>

<style lang="">

</style>
