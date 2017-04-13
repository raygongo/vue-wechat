<script type="text/javascript">
  import {
    Tab,
    TabItem,
    Scroller
  } from 'vux'
  import * as type from '../store/mutation'
  export default {
    data() {
      return {
        pulldownConfig: {
          content: '重新加载数据',
          height: 60,
          autoRefresh: false,
          downContent: 'Pull Down To Refresh',
          upContent: 'Release To Refresh',
          loadingContent: 'Loading...',
          clsPrefix: 'xs-plugin-pulldown-'
        }
      }
    },
    created() {
      this.$store.dispatch(type.ADD_TOPICS_DATA);
    },
    mounted() {
  
    },
    computed: {
      topicsData: function() {
        return this.$store.state.homeList.topicsData;
      },
  
    },
    methods: {
      // 加载更多
      loadMore() {
  
      },
      //刷新数据
      onRefresh() {
        this.$ajax({
          url: '/topics',
          success: (res) => {
            this.$refs.scroller.donePulldown()
            this.$store.commit(type.SET_TOPICS_DATA, {
              topicsData: res.data.data
            })
          }
        })
      }
  
    },
    components: {
      Tab,
      TabItem,
      Scroller
    }
  }
</script>

<template>
  <div class="home">
    <tab class="tab-nav">
      <tab-item>全部</tab-item>
      <tab-item>精华</tab-item>
      <tab-item>分享</tab-item>
      <tab-item>问答</tab-item>
      <tab-item>招聘</tab-item>
    </tab>
    <div class="topic-list">
      <scroller lock-x height="-50px" use-pullup ref="scroller"  @on-pulldown-loading="onRefresh">
        <div>
          <div v-for="topic in topicsData ">
            <router-link class="topic-item" :to="{name:'detail',query: { id: topic.id }}" tag="div">
              <img :src="topic.author.avatar_url" class="header-icon">
              <span class="topic-list-bar">置顶</span>
              <div class="topic-title">{{topic.title}}</div>
              <div class="topic-time">
                <span>{{topic.create_at}}</span>
                <span class="topic-author">{{topic.author.loginname}}</span>
              </div>
            </router-link>
          </div>
        </div>
      </scroller>
    </div>
  </div>
</template>

<style lang="less">
  .tab-nav {
    position: absolute
  }
  
  .topic-list {
    .topic-item {
      padding: 10px 5px;
      background: cadetblue;
      position: relative;
      overflow: hidden;
      display: flex;
      display: flex;
      flex-direction: column;
      padding-left: 60px;
      height: 70px;
      border-bottom: 1px #fff solid;
      justify-content: space-between;
      .header-icon {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 25px;
        position: absolute;
        top: 10px;
        left: 10px;
        margin-right: 20px;
      }
      .topic-list-bar {
        font-size: 12px;
        color: #fff;
        background: green;
        padding: 2px 15px;
        position: absolute;
        top: 5px;
        left: -15px;
        -webkit-transform: rotatez(-45deg);
        -moz-transform: rotatez(-45deg);
        -ms-transform: rotatez(-45deg);
        -o-transform: rotatez(-45deg);
        transform: rotatez(-45deg);
      }
      .topic-time {
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom: 0;
        font-size: 14px;
        color: #cccccc;
      }
      .topic-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>
