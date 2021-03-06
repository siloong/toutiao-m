/* 
  用户相关请求模块
*/
import request from '@/utils/request';

/* 
  登录/注册请求
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  });
};


/* 
  验证码请求
*/
export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  });
};



/* 
  获取当前登录用户信息
*/
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  });
};


/* 
  获取用户频道列表
*/
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  });
}