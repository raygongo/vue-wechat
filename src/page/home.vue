<script type="text/javascript">
    import * as type from '../store/mutation'
    export default {
        data(){
            return{
              // 初始化设置
                options: {
                    touch: "", //反馈触摸的dom
                    vertical: true, //不必需，默认是true代表监听竖直方向touch
                    target: '#scroller', //运动的对象
                    property: "translateY", //被滚动的属性
                    sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
                    factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
                    step: 40,
                }
            }
        },
        created(){
            this.$store.dispatch(type.ADD_TOPICS_DATA);
        },
        mounted(){
//            const scroller = document.getElementById('#scroller');
////            let  = Document.querySelector('');
//
//            Transform(scroller);
//            new AlloyTouch({
//              touch: "", //反馈触摸的dom
//              vertical: true, //不必需，默认是true代表监听竖直方向touch
//              target: scroller, //运动的对象
//              property: "translateY", //被滚动的属性
//              sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
//              factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
//              step: 40,
//            })

        },
        computed:{
            topicsData:function () {
              return this.$store.state.homeList.topicsData;
            },

        },
        methods:{
          updateData(){
          },
          // 回调函数
          onAnimationEnd() {
              console.log('onAnimationEnd')
          }
        }
    }
</script>

<template>
    <div class="home">
        <div class="topic-list">
          <div id="scroller">
              <div class="topic-item" v-for="topic in topicsData " >
                  <img :src="topic.author.avatar_url" class="header-icon">
                  <span class="topic-list-bar">置顶</span>
                  <div class="topic-title">{{topic.title}}</div>
                  <div class="topic-time">
                    <span >{{topic.create_at}}</span>
                    <span class="topic-author">{{topic.author.loginname}}</span>
                  </div>
             </div>
          </div>
        </div>
    </div>
</template>

<style lang="less" >
   #scroller{
     position: absolute;
     width: 100%
   }
  .topic-list{
    .topic-item{
       padding: 10px 5px;
      background: cadetblue;
      position: relative;
      overflow: hidden;
      display: flex;display: flex;
      flex-direction: column;
      padding-left: 60px;
      height: 70px;
      border-bottom: 1px #fff solid;
      justify-content: space-between;
      .header-icon{
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 25px;
        position: absolute;
        top: 10px;
        left:10px;
        margin-right: 20px;
      }
      .topic-list-bar{
        font-size:12px ;
        color: #fff;
        background: green;
        padding: 2px 15px;
        position: absolute;
        top:5px;
        left: -15px;
        -webkit-transform: rotatez(-45deg);
        -moz-transform: rotatez(-45deg);
        -ms-transform: rotatez(-45deg);
        -o-transform: rotatez(-45deg);
        transform: rotatez(-45deg);
      }
      .topic-time{
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom:0;
        font-size: 14px;
        color: #cccccc;
      }
      .topic-title{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>
