<template>
  <div id="app">
    <tabbar style="position:fixed;" >
      <tabbar-item link="/" :selected="true">
        <span slot="label">首页</span>
        <i slot="icon" class="fa fa-home" ></i>
      </tabbar-item>
      <tabbar-item link="/two">
        <i slot="icon" class="fa fa-ambulance" ></i>
        <span slot="label">发送</span>
      </tabbar-item>
      <tabbar-item link="/three">
        <i slot="icon" class="fa fa-window-restore" ></i>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/four">
        <i slot="icon" class="fa fa-user-circle" ></i>
        <span slot="label">我的</span>
      </tabbar-item>

    </tabbar>
    <transition :name="this.$store.getters.direction === 'forward'?'pop-in':'pop-out'">
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  // :name="$store.getters.direction==='forward'?'pop-in':'pop-out'"
  name: 'app',
  components:{
    Tabbar, TabbarItem
  },
}


</script>

<style>

</style>
