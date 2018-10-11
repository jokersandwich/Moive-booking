// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_data: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.getStorage({
      key: 'movie_data',
      success: function (res) {
        res.data.movie_src = res.data.movie_src.replace(/s_ratio/, "m_ratio")
        console.log(res.data)
        that.setData({
          movie_data: res.data
        })
      },
    })
  },

  bindFooterTap: function() {
    wx.showLoading({
      title: '正在付款',
    })
    setTimeout(function() {
      wx.hideLoading()
      wx.showToast({
        title: '预定成功',
      })
    }, 500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})