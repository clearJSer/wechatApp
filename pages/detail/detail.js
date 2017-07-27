// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:'',
    title:'',
    price:'',
    mode:'scaleToFill',
    home:'../../assets/icon/home.png',
    shopcar:'../../assets/icon/shop-cart-o.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
     wx.request({
      url: `https://open.youzan.com/api/oauthentry/weapp.wsc.item.detail/1.0.0/get?access_token=d0454543b6c83f5081de7336cc8cb63a&kdt_id=14581473&app_id=wx197c8e41d45cc396&alias=${id}&fans_type=1343`,
      success: function(res){
        var obj = res.data.response.brief
        this.setData({
          imageSrc:obj.picture[0].url,
          title:obj.title,
          price:obj.price
        })
      }.bind(this)
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