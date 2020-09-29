<template>
  <van-cell class="article-item">
    <div slot="title" class="title van-multi-ellipsis--l3">{{article.title}}</div>
    <div slot="label">
      <div 
        class="cover-wrap"
        v-if="article.cover.type === 3"
      >
        <van-image 
          class="cover-item"
          fit="cover"
          v-for="(item, index) in article.cover.images"
          :key="index"
          :src="item"
        />
      </div>

      <div class="label-wrap">
        <span>{{article.aut_name}}</span>
        <span>{{article.comm_count}}评论</span>
        <span>{{article.pubdate}}</span>
      </div>
    </div>

    <div slot="value" v-if="article.cover.type === 1">
      <van-image 
        class="cover-item"
        fit="cover"
        :src="article.cover.images[0]"
      />
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
  .article-item {
    .title {
      font-size: 16px;
      color: #3a3a3a;
    }
    /deep/ .van-cell__value {
      flex: unset;
      width: 116px;
      height: 73px;
    }
    .cover-item {
      width: 116px;
      height: 73px;
    }
  }
</style>
  