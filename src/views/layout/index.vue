<template>
  <div class="layout-container">
    <!-- child routes view -->
    <router-view></router-view>
    <!-- /child routes view -->

    <!-- tabbar -->
    <van-tabbar route>
      <van-tabbar-item replace icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item replace icon="comment-o" to="/question">问答</van-tabbar-item>
      <van-tabbar-item replace icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item replace icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /tabbar -->

  </div>
</template>
  

<script>
  export default {
    name: 'Layout',
    data() {
      return {
        active: 0
      }
    }
  }
</script>


<style scoped lang="less">
</style>