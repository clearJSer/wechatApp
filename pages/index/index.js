//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    team_logo: '',
    team_name:'',
    welcome:'',
    menuList:[],
    goodsList:[],
    scrollTop:0,
    templateData:{},
    select:'13naqjy0m',
    mode:'scaleToFill',
    src:"https://img.yzcdn.cn/upload_files/2017/04/24/FkZFGUvuQL8OMD-Sjkx4P0qU64G8.jpg"
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    wx.request({
      url: 'https://open.youzan.com/api/oauthentry/weapp.wsc.homepage/1.0.0/get?access_token=2850f4bf1cdc3017a429272cfa965074&kdt_id=14581473&app_id=wx197c8e41d45cc396',
      method: 'GET',
      success: this.getMenuList.bind(this)
    })
    //13naqjy0m
    //加载首屏信息
    wx.request({
      url: `https://open.youzan.com/api/oauthentry/weapp.wsc.tag.items/1.0.0/get?access_token=405a23ae41b534c1891023ea44b33dcf&kdt_id=14581473&app_id=wx197c8e41d45cc396&alias=13naqjy0m&page_size=20&page_no=1`,
      method: 'GET',
      success: function(res){
        var obj = {}
        obj.title = '调味品'
        obj.data = res.data.response.items
        this.setData({
          goodsList:[obj]
        })
      }.bind(this)
    })
  },
  getMenuList(res){
      var obj = res.data.response;
      this.setData({
          team_logo:obj.team_logo,
          team_name:obj.team_name,
          welcome:obj.data[0][1].content,
          menuList:obj.data[0][2].sub_entry
      })
  },
  chooseMenu(event){
    var id = event.target.dataset.id;
    console.log(this.data.scrollTop)
    var title = event.target.dataset.name;
    this.setData({
      select:id
    })
     wx.request({
      url: `https://open.youzan.com/api/oauthentry/weapp.wsc.tag.items/1.0.0/get?access_token=405a23ae41b534c1891023ea44b33dcf&kdt_id=14581473&app_id=wx197c8e41d45cc396&alias=${id}&page_size=20&page_no=1`,
      method: 'GET',
      success: function(res){
        var obj = {}
        obj.title = title
        obj.data = res.data.response.items
        console.log(obj)
        this.setData({
          goodsList:[obj]
        })
      }.bind(this)
    })
  },
  openDetail(event){
    var id = event.currentTarget.dataset.alias;
    wx.navigateTo({
        url: '/pages/detail/detail?id=' + id
    })
  }
})
