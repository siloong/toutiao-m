<template>
  <div class="profile-container">
    <!-- user info -->
    <van-cell-group 
    class="profile-info"
    >
      <!-- login status-->
      <div v-if="user">
          <van-cell 
          class="base-info"
          :border="false"
          title="单元格" 
          value="内容"
          center
          >
            <van-image 
              class="avatar"
              slot="icon"
              fit="cover"
              round
              src="https://img.yzcdn.cn/vant/cat.jpeg" 
            />
            <div slot="title" class="name">MUZE</div>
            <van-button
              class="updata-btn"
              size="small"
              round
            >
              编辑资料
            </van-button>
          </van-cell>

          <van-grid class="status-info" :border="false">
            <van-grid-item>
              <div slot="text" class="info-item">
                <div class="count">1109</div>
                <div class="text">头条</div>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div slot="text" class="info-item">
                <div class="count">1109</div>
                <div class="text">关注</div>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div slot="text" class="info-item">
                <div class="count">1109</div>
                <div class="text">粉丝</div>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div slot="text" class="info-item">
                <div class="count">1109</div>
                <div class="text">获赞</div>
              </div>
            </van-grid-item>
          </van-grid>
      </div>
      <!-- / login status-->
        
      <!-- not login status-->
      <div v-else class="not_login">
        <div class="not_login-avatar" @click="$router.push('/login')">
          <img src="./phone.png" alt="">
        </div>
        <div class="not_login-text">登录/注册</div>
      </div>
      <!-- / not login status-->
      </van-cell-group>  

    <!-- / user info -->

    <!-- nav -->
    <van-grid :column-num="2" class="nav-wrap">
      <van-grid-item class="nav-item"
        icon-prefix="iconfont"
        icon="shoucang" 
        text="收藏" 
      />
      <van-grid-item class="nav-item"
        icon-prefix="iconfont" 
        icon="lishi" 
        text="历史" 
      />
    </van-grid>
    <!-- / nav -->

    <van-cell title="消息通知" class="mt-4" is-link to=""></van-cell>
    <van-cell title="小智同学" is-link to=""></van-cell>
    <van-cell 
      title="退出登录" 
      class="out_login-btn mt-4" 
      v-if="user"
      @click="onOutLogin"></van-cell>
    <!-- <div>{{user}}</div> -->
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Profile',
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      onOutLogin() {
        this.$dialog.confirm({
          title: '退出登录',
          message: '你确定要退出登录吗？',
        })
          .then(() => {
            // on confirm
            this.$store.commit('setUser', null);
          })
          .catch(() => {
            // on cancel
            console.log('cancel');
          });
      }
    }
  }
</script>


<style lang="less" scoped>
  .profile-container {
    .profile-info {
      background: url("./banner.png") no-repeat;
      background-size: cover;
      .base-info {
        box-sizing: border-box;
        height: 115px;
        padding-top: 38px;
        padding-bottom: 11px;
        background-color: unset;
        .avatar {
          box-sizing: border-box;
          width: 66px;
          height: 66px;
          border: 1px solid #fff;
          margin-right: 11px;
        }
        .name {
          font-size: 15px;
          color: #fff;
        }
        .updata-btn {
          height: 18px;
          font-size: 10px;
          color: #666;
        }
      }

      .status-info {
        /deep/ .van-grid-item__content {
          background-color: unset;
        }
        .info-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }


      .not_login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 180px;
        .not_login-avatar img{
          width: 66px;
          height: 66px;
        }
        .not_login-text {
          font-size: 14px;
          color: #fff;
        }
      }
    }
    /deep/ .nav-wrap {
      .nav-item {
        height: 70px;
        .iconfont {
          font-size: 22px;
        }
        .iconfont-shoucang {
          color: #eb5253;
        }
        .iconfont-lishi {
          color: #ff9d1d;
        }
        .van-grid-item__text {
          font-size: 14px;
          color: #333;
        }
      }
    }
    .out_login-btn {
      font-size: 15px;
      text-align: center;
      color: #d86262;
    }

    .mt-4 {
      margin-top: 4px;
    }

  }
</style>