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

    <!-- login form -->
    <van-form 
    @submit="onLogin"
    @failed="onFailed"
    ref="login-form"
    :validate-first="true"
    :show-error="false"
    :show-error-message="false">
      <!-- mobile input -->
      <van-field
        v-model="user.mobile"
        icon-prefix="iconfont"
        left-icon="shouji"
        center
        clearable
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRules.mobile"
      />
      <!-- code input -->
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="iconfont"
        left-icon="yanzhengma"
        center
        placeholder="请输入验证码"
        name="code"
        :rules="formRules.code"
      >
        <!-- SendSms and Interval -->
        <template #button>
          <van-count-down 
          v-if="isCountDown"
          :time="10000 * 6"
          format="ss s"
          @finish="isCountDown = false"
          />
          <van-button 
          v-else
          size="mini" 
          round 
          :loading="isSendCodeLoading"
          class="code-send-btn" 
          @click.prevent="onSendSms"
          >
            发送验证码
          </van-button>
        </template>
      </van-field>
      <!-- login button -->
      <div class="login-btn-wrap">
        <van-button type="info" block class="login-btn">登录</van-button>
      </div>
    </van-form>
    <!-- /login form -->

  </div>
</template>


<script>
import {Toast} from 'vant';
import {login, sendSms} from '@/api/user.js';

export default {
  name: 'Login',
  data() {
    return {
      // user the mobile and code value
      user: {
        mobile: '13911111111',
        code: '246810', 
      },
      // show interval
      isCountDown: false,
      // send code loading animation
      isSendCodeLoading: false,
      // form the rules
      formRules: {
        mobile: [
          {required: true, message: '请输入手机号'},
          {pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号'}
        ],
        code: [
          {required: true, message: '请输入验证码'},
          {pattern: /^\d{6}$/, message: '请输入正确的验证码'}
        ]
      }
    };

  },
  methods: {
    // login the handle method
    async onLogin() {
      // Toast loading
      Toast.loading({
        message: "登录中...",
        forbidClick: true,
        duration: 0
      });

      try {
        const {data} = await login(this.user);
        // The user login state in Vuex's user Object
        this.$store.commit('setUser', data.data);
        // Toast success
        Toast.success("登录成功");
      } catch (error) {
        // Toast fail
        Toast.fail("登录失败");
      };
    },

    // form rules failed the handle method
    onFailed(err) {
      if(err.errors[0]) {
        Toast({
          message: err.errors[0].message,
          position: 'top'
        });
      }
    },

    // send code the handle method
    async onSendSms() {
      try {
        // validata mobile
        await this.$refs['login-form'].validate('mobile');
        // close send code logading animation
        this.isSendCodeLoading = true;
        // send code the request
        const res = await sendSms(this.user.mobile);
        // send code finish
        this.isCountDown = true;  //show interval
        console.log(res);
      } catch (err) {
        let message = '';
        if(err && err.response && err.response.status === 429) {
          // resend code
          message = '发送频繁，请稍后重试';
        } else if (err.name === 'mobile') {
          // mobile rules fail
          message = err.message;
        } else {
          // unknown error
          message = '发送失败，请稍后重试';
        }
        // toast failed
        Toast({
          message,
          position: 'top'
        });
      }
      // close send code logading animation
      this.isSendCodeLoading = false;
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