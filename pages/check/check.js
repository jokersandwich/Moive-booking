// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_data: {},
    booking_data: {}
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
        that.setData({
          movie_data: res.data
        })

        wx.getStorage({
          key: 'booking_data',
          success: function (res) {
            // 计算座位
            var selected_row = []

            for (var i = 0; i < res.data.selected_seats.length; i++) {
              var letter = res.data.selected_seats[i][0]
              if (!selected_row.includes(letter)) {
                selected_row.push(letter)
              }
            }

            res.data.selected_row = selected_row.join(', ')
            res.data.selected_seats = res.data.selected_seats.join(', ')

            // 计算结束时间
            var durations = parseInt(that.data.movie_data.movie_durations)
            var hours = parseInt(res.data.select_time.slice(0, 2))
            var minutes = parseInt(res.data.select_time.slice(3, 5))
            var zone = res.data.select_time.slice(6)
            var end_hours = hours + Math.floor((durations + minutes) / 60)
            var end_minutes = (durations + minutes) % 60
            var end_time = ''

            if (end_hours >= 12) {
              end_hours -= 12
              zone = zone == 'am' ? 'pm' : 'am'
              if (end_hours >= 10) {
                end_time = end_hours + ':' + end_minutes + ' ' + zone
              } else {
                end_time = '0' + end_hours + ':' + end_minutes + ' ' + zone
              }
            } else {
              if (end_hours >= 10) {
                end_time = end_hours + ':' + end_minutes + ' ' + zone
              } else {
                end_time = '0' + end_hours + ':' + end_minutes + ' ' + zone
              }
            }

            res.data.end_time = end_time
            that.setData({
              booking_data: res.data
            })
          },
        })
      },
    })
  },

  // 支付
  bindFooterTap: function() {
    wx.showLoading({
      title: '正在付款',
    })
    setTimeout(function() {
      wx.hideLoading()
      wx.showToast({
        title: '预定成功',
      })
    }, 1500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})