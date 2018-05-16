// pages/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      'http://os310ujuc.bkt.clouddn.com/01.jpg',
      'http://os310ujuc.bkt.clouddn.com/02.jpg',
      'http://os310ujuc.bkt.clouddn.com/03.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    proList: null
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
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    // console.log(index)
    var proList = this.data.proList;
    var school = proList[index].school;
    var detail = proList[index].detail;
    var pro = proList[index].pro;
    var mark = proList[index].mark;
    wx.navigateTo({
      url: '/pages/desc/desc?school='+school+'&detail='+detail+'&mark='+mark+'&pro='+pro,
    
    })
  },
  getProList:function() {
    var self = this;
    var url;
    var index = parseInt(self.options.majorindex)+ 1;
    console.log(index);
    switch(self.options.major){
      case "电气工程及自动化":
        url=  'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/dianqirank';//关于学校的数据
        break;
      case "机械设计制造及自动化":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/jixiegongcheng';//关于学校的数据
        break;
      case "测控技术与仪器":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/cekongjishu';//关于学校的数据
        break;
      case "土木工程":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/tumugongcheng';//关于学校的数据
        break;
      case "金融学":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/jinrong';//关于学校的数据
        break;
      case "会计学":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/kuaiji';//关于学校的数据
        break;
      case "英语":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/english';//关于学校的数据
        break;
      case "法学":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/faxue';//关于学校的数据
        break;
      case "临床医学":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/linchuangyixue';//关于学校的数据
        break;
      case "国际经济与贸易":
        url = 'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/guojijingjiyvmaoyi';//关于学校的数据
        break;
    }
    wx.request({
      url:url,
      method:'GET',
      success:function(res){
        // console.log(res);
        // console.log(res.data.data[index]);
        let schooldata = res.data.data;
        console.log(schooldata)
        var schoolArr = [];
        for(let i = 0; i < 10; i ++) {
          schoolArr[i] = new Array();
        }
        var schoolList = schoolArr.map(function(val) {
          return {...val};
        })
        console.log(schoolList)
        for(let i = 0; i < 10; i ++) {
          var j = i + 1;
          schoolList[i].school = schooldata[j][0];
          schoolList[i].mark = schooldata[j][3];
          schoolList[i].detail = schooldata[j][6];
          schoolList[i].pro = schooldata[j][4];
          schoolList[i].schoolLogo = schooldata[j][5];
          schoolList[i].description = schooldata[j][1];
        }
        console.log(schoolList)
        self.setData({
          proList:schoolList,
          newData: schooldata
        })
      }
    })
  },
})