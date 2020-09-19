<template>
  <div class="login-container">
    <!-- navbar -->
    <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /navbar -->

    <!-- login from -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="iconfont"
        left-icon="shouji"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="user.code"
        clearable
        icon-prefix="iconfont"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="mini" round class="code-send-btn">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <div class="login-btn-wrap">
      <van-button type="info" block class="login-btn" @click="handleLogin">登录</van-button>
    </div>
    <!-- /login from -->
  </div>
</template>


<script>
import {login} from '@/api/user.js';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        mobile: '',   // 手机号码
        code: '' //验证码
      }
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await login(this.user);
        console.log(res);
      } catch (error) {
        console.log('login fail ...');
        console.log(error);
      }
    }
  }
}
</script>


<style scoped lang="less">
  body {
    background-color: #f5f7f9;
  }

  .login-container {
    .login-btn-wrap {
      padding: 26px 16px;
      .login-btn {
        border: none;
        background-color: #6db4fb;
        .van-button__text {
          font-size: 15px;
        }
      }
    }

    .code-send-btn {
      width: 76px;
      height: 23px;
      background-color: #ededed;
      .van-button__text {
        color: #666666;
        font-size: 11px;
      }
    }
  }
</style>