<template>
  <div class="profile-container">
    <!-- user info -->
    <van-cell-group>
      <van-cell 
        title="单元格" 
        value="内容"
        center
      >
        <van-image 
          width="50" 
          height="50" 
          slot="icon"
          fit="cover"
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg" 
        />
        <div slot="title">MUZE</div>
        <van-button
          size="small"
          round
        >
          编辑资料
        </van-button>
      </van-cell>
    </van-cell-group>  
    <!-- / user info -->
  </div>
</template>


<script>
export default {
  name: 'Profile'
}
</script>


<style lang="less" scoped>
  
</style>