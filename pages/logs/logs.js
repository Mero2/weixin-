Page({
  data: {
    majorList:null,
    'currentItem':null
  },
  onLoad: function () {
    this.getmajorList();
  },
  toSchool: function (e) {
    // console.log(e)
    var index = e.currentTarget.dataset.index;
    var majorList = this.data.majorList;
    var major = majorList[index];
    this.setData({
      'currentItem':index
    });
    // console.log(majorList, 'here is lgs')
    wx.navigateTo({
      url: '/pages/school/school?major='+ major + '&majorindex=' + index,
    })
  },
  getmajorList: function () {
    var self = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/subinformation#!method=get',//关于专业的数据
      method: 'GET',
      success: function (res) {
        var majorL = res.data.data;
        let arrList = [];
        for(let ma in majorL){
          arrList.push(majorL[ma]);
        }
        // console.log(arrList);
        self.setData({
          majorList: arrList,
        })
      }
    })
  }
})

  
