// pages/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg'
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
    // this.setData({
    //   text: '01',
    // })
    this.getProList();
  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    var school = proList[index].school;
    wx.navigateTo({
      url: '/pages/desc/desc?school='+school,
    })
  },
  getProList: function(){
    var self = this;
    wx.request({
      url:'http://localhost:3000/',//关于学校的数据
      method:'GET',
      success:function(res){
        console.log(res);
        self.setData({
          proList:res.data,
        })
      }
    })
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