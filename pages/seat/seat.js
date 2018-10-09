const mockdata = require('../../utils/mockdata.js')

// pages/seat/seat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seats: [],
    selectedSeats: { A11: 'occupied', B4: 'occupied', B11: 'occupied', C10: 'occupied', D1: 'occupied', E1: 'occupied', E2: 'occupied', E7: 'occupied', F5: 'occupied', F12: 'occupied', H11: 'occupied', H12: 'occupied', I1: 'occupied', I3: 'occupied', I4: 'occupied', I5: 'occupied', I11: 'occupied', I12: 'occupied',  D3: 'selected', D4: 'selected' }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      seats: mockdata.seats
    })
    console.log(this.data)
  },

  bindDotTap: function(e) {
    var id = e.currentTarget.dataset.id
    var prop = 'selectedSeats.' + id
    if (this.data.selectedSeats[id] != 'selected') {
      this.setData({
        [prop]: 'selected'
      })
    }
    else {
      this.setData({
        [prop]: null
      })
    }
    console.log(this.data.selectedSeats)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})