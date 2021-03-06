//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
        'http://os310ujuc.bkt.clouddn.com/haibao1.jpg',
        'http://os310ujuc.bkt.clouddn.com/haibao2.jpg',
        'http://os310ujuc.bkt.clouddn.com/haibao3.jpg',
    ],
    time:6,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {
    var time = 5;
    this.timer = setInterval(() =>{
      this.setData({
        time:time--
      })
      if(time == 0){
        clearInterval(this.timer);
        wx.redirectTo({
          url: '../logs/logs',
        })
      }
    },1000)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tomajor: function() {
    clearInterval(this.timer);
    wx.redirectTo({
      url: '../logs/logs',
    })
  }
})
