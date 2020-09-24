<template>
  <div class="home-container">
    <!-- nav-bar -->
    <van-nav-bar class="app-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        icon-prefix="iconfont"
        icon="sousuo"
        size="small"
        round
        text="搜索"
      >
      </van-button>
    </van-nav-bar>
    <!-- nav-bar -->

    <!-- tab -->
    <van-tabs v-model="active">
      <van-tab 
        v-for="item in channels"
        :key="item.id"
        :title="item.name">
        <article-list :channel="item" />
      </van-tab>
    </van-tabs>
    <!-- /tab -->
  </div>
</template>


<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './childComponents/ArticleList'

export default {
  name: 'Home',
  data() {
    return {
      active: 0,  // tab index
      channels: []  // channels lists data
    }
  },
  components: {
    ArticleList
  },
  created() {
    this.loadChannels();
  },
  methods: {
    async loadChannels() {
      const { data } = await getUserChannels();
      this.channels = data.data.channels;
    }
  }
}
</script>


<style lang="less" scoped>
  .home-container {
    .app-nav-bar {
      /deep/ .van-nav-bar__title {
        max-width: none;
      }
      .search-btn {
        width: 277px;
        height: 32px;
        border: none;
        font-size: 14px;
        color: #fff;
        background-color: #5babfb;
      }
    }
  }
</style>