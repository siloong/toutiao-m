<template>
  <div class="article-list">
    <van-pull-refresh 
      v-model="isRefreshLoading" 
      @refresh="onRefresh"
      :success-text="refreshSuccessText"
      success-duration="1500"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <article-item 
          v-for="(item, index) in articles"
          :key="index"
          :article="item"
        />
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
import { getArticles } from '@/api/article';
import ArticleItem from '@/components/article-item/ArticleItem'

export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object
    }
  },
  data() {
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: null,
      isRefreshLoading: false,
      refreshSuccessText: ''
    };
  },
  components: {
    ArticleItem
  },
  methods: {
    // load more data method
    async onLoad() {
      // send request
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      });
      // insert data to articles view
      const { results } = data.data;
      this.articles.push(...results);
      // close loading
      this.loading = false;

      if(results.length) {
        this.timestamp = data.data.pre_timestamp
      } else {
        this.finished = true;
      }
    },

    // refresh handle method
    async onRefresh() {
      // send request
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1
      });

      const { results } = data.data;
      this.articles.push(...results);
      // close loading animation
      this.isRefreshLoading = false;
      this.refreshSuccessText = `更新了${results.length}条数据`;
    }
  }
}
</script>


<style lang="less" scoped>
  .article-list {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    top: 90px;
    overflow-y: scroll;
  }
</style>