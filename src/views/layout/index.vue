<template>
  <div class="layout-container">
    <!-- child routes view -->
    <router-view></router-view>
    <!-- /child routes view -->

    <!-- tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
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