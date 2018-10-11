const mockdata = require('../../utils/mockdata.js')

// pages/seat/seat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seats: [],
    selected_seats: { A11: 'occupied', B4: 'occupied', B11: 'occupied', C10: 'occupied', D1: 'occupied', E1: 'occupied', E2: 'occupied', E7: 'occupied', F5: 'occupied', F12: 'occupied', H11: 'occupied', H12: 'occupied', I1: 'occupied', I3: 'occupied', I4: 'occupied', I5: 'occupied', I11: 'occupied', I12: 'occupied',  D3: 'selected', D4: 'selected' },
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
      success: function(res) {
        res.data.movie_src = res.data.movie_src.replace(/s_ratio/, "m_ratio")
        console.log(res.data)
        that.setData({
          movie_data: res.data
        })
      },
    })

    wx.getStorage({
      key: 'booking_data',
      success: function(res) {
        that.setData({
          booking_data: res.data
        })
      },
    })

    this.setData({
      seats: mockdata.seats
    })
  },

  // 选择座位
  bindDotTap: function(e) {
    var id = e.currentTarget.dataset.id
    var prop = 'selected_seats.' + id

    if (this.data.selected_seats[id] != 'selected') {
      this.setData({
        [prop]: 'selected'
      })
    }
    else {
      this.setData({
        [prop]: null
      })
    }
    
    console.log(this.data.selected_seats)
  },

  bindFooterTap: function(e) {
    wx.navigateTo({
      url: '/pages/check/check',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})