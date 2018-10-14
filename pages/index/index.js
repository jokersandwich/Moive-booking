//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    genres: [
      '全部', '剧情', '喜剧', '动作', '爱情', '科幻', '动画', '悬疑', '惊悚', '恐怖', '犯罪', '同性', '音乐', '歌舞', '传记', '历史', '战争', '西部', '奇幻', '冒险', '灾难', '武侠', '情色'
    ],
    select_genres: '全部',
    movie_list: [],
    complete_list: [],
    start: 0,
    date_list: [
      { week: '日', date: '24', month: '6', year: '2018' },
      { week: '一', date: '25', month: '6', year: '2018' },
      { week: '二', date: '26', month: '6', year: '2018' },
      { week: '三', date: '27', month: '6', year: '2018' },
      { week: '四', date: '28', month: '6', year: '2018' },
      { week: '五', date: '29', month: '6', year: '2018' },
      { week: '六', date: '30', month: '6', year: '2018' }
    ],
    theater_list: [
      {
        title: 'IMAX - 万达影城',
        time_list: ['10:30 am', '00:00 pm', '01:20 pm', '02:45 pm', '03:15 pm', '05:10 pm']
      }, {
        title: '杜比全景声 - 百老汇影城',
        time_list: ['09:30 am', '11:00 am', '00:20 pm', '01:45 pm', '02:15 pm', '04:10 pm']
      }, {
        title: 'LUXE - UME国际影城',
        time_list: ['08:30 am', '10:20 am', '11:50 am', '00:45 pm', '01:15 pm', '03:10 pm']
      }
    ],
    select_date: { week: '日', date: '24', month: '6', year: '2018' },
    select_theater: 0,
    select_time: '10:30 am'
  },

  onLoad() {
    var start = this.data.start
    this.getData(start)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var start = this.data.start
    if (this.data.select_genres == '全部') {
      if (start < 240) {
        start += 10
        this.getData(start)
      } else {
        wx.showToast({
          title: '已加载所有电影',
        })
      }
    } else {
      return
    }
  },

  // 请求豆瓣数据
  getData: function (start) {
    var that = this;

    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250?count=10&start=' + start,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        var movie_list = that.data.movie_list || [];

        for (var i = 0; i < res.data.subjects.length; i++) {
          var movie = {}
          movie.movie_src = res.data.subjects[i].images.small
          movie.movie_title = res.data.subjects[i].title
          movie.movie_genres = res.data.subjects[i].genres.join(' | ')
          movie.movie_durations = res.data.subjects[i].durations[0]
          movie.movie_average = res.data.subjects[i].rating.average
          movie_list.push(movie)
        }

        wx.hideLoading()
        that.setData({
          movie_list,
          complete_list: movie_list,
          start
        })
      }
    })
  },

  // 选择类型
  bindGenreTap: function (e) {
    var select_genres = e.currentTarget.dataset.id
    var complete_list = this.data.complete_list
    var search_list = []

    if (select_genres == '全部') {
      search_list = complete_list
    } else {
      for (var i = 0; i < complete_list.length; i++) {
        if (complete_list[i].movie_genres.includes(select_genres)) {
          search_list.push(complete_list[i])
        }
      }
    }

    this.setData({
      movie_list: search_list,
      select_genres
    })
  },

  // 选择日期
  bindDateTap: function (e) {
    this.setData({
      select_date: this.data.date_list[e.currentTarget.dataset.id]
    })
  },

  // 选择电影院（前进）
  bindForwardTap: function (e) {
    var select_theater = this.data.select_theater

    if (select_theater < this.data.theater_list.length - 1) {
      select_theater += 1;
    } else {
      select_theater == this.data.theater_list.length - 2;
    }

    this.setData({
      select_theater: select_theater,
      select_time: this.data.theater_list[select_theater].time_list[0]
    })
  },

  // 后退
  bindBackTap: function (e) {
    var select_theater = this.data.select_theater

    if (select_theater > 0) {
      select_theater -= 1;
    } else {
      select_theater == 0;
    }

    this.setData({
      select_theater: select_theater,
      select_time: this.data.theater_list[select_theater].time_list[0]
    })
  },

  // 选择时间
  bindTimeTap: function (e) {
    this.setData({
      select_time: e.currentTarget.dataset.id
    })
  },

  // 预定
  bindBookingTap: function(e) {
    var data = this.data
    var movie_data = data.movie_list[e.currentTarget.dataset.id]
    var booking_data = {
      select_date: data.select_date,
      select_theater: data.theater_list[data.select_theater],
      select_time: data.select_time
    }

    wx.setStorage({ key: 'movie_data', data: movie_data })
    wx.setStorage({ key: 'booking_data', data: booking_data })

    wx.navigateTo({
      url: '/pages/seat/seat',
    })
  }
})