// pages/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      '/img/01.jpg',
      '/img/02.jpg',
      '/img/03.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    proList: [
    {

      schoolLogo: '/img/chongqingdaxue.jpg',

      school: '重庆大学',

      description: '重庆大学是全国重点高校\n重庆大学是全国重点高校'

    },

    {

      schoolLogo: '/img/chongqingdaxue.jpg',

      school: '清华大学',

      description: '清华大学是全国重点高校\n重庆大学是全国重点高校'

    },

    {

      schoolLogo: '/img/chongqingdaxue.jpg',

      school: '北京大学',

      description: '北京大学是全国重点高校\n重庆大学是全国重点高校'

    },

    {

      schoolLogo: '/img/chongqingdaxue.jpg',

      school: '复旦大学',

      description: '复旦大学是全国重点高校\n重庆大学是全国重点高校'

    },

    {

      schoolLogo: '/img/chongqingdaxue.jpg',

      school: '上海交通大学',

      description: '上海交通大学大学是全国重点高校\n重庆大学是全国重点高校'

    },

    {

      schoolLogo: '/img/chongqingdaxue.jpg',

      school: '哈尔滨理工大学',

      description: '哈尔滨理工大学是全国重点高校\n重庆大学是全国重点高校'

    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // this.setData({
    //   text: '01',
    // })
    this.getProList();
  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var school = proList[index].school;
    wx.navigateTo({
      url: '/pages/desc/desc?school='+school,
    })
  },
  getProList: function(){
    var self = this;
    // console.log(self.options.major)
    switch(self.options.major){
      case "电气工程及自动化":
      wx.request({
        url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/dianqirank',//关于学校的数据
        method: 'GET',
        success: function (res) {
          console.log(res);
          self.setData({
            proList: res.data,
          })
        }
      })
      break;
      case "机械设计制造及自动化":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/jixiegongcheng',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
      break;
      case "测控技术与仪器":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/cekongjishu',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "土木工程":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/tumugongcheng',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "金融学":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/jinrong',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "会计学":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/kuaiji',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "英语":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/english',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "法学":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/faxue',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "临床医学":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/linchuangyixue',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
      case "国际经济与贸易":
        wx.request({
          url: 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/guojijingjiyvmaoyi',
          method: 'GET',
          success: function (res) {
            console.log(res);
            self.setData({
              proList: res.data,
            })
          }
        })
        break;
    }




    // console.log(self.options);
    // wx.request({
    //   url:'',
    //   method:'GET',
    //   success:function(res){
    //     console.log(res);
    //     self.setData({
    //       proList:res.data,
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})