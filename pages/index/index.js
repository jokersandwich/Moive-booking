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
        time_list: ['10:30 am', '12:00 am', '01:20 pm', '02:45 pm', '03:15 pm', '05:10 pm']
      }, {
        title: '杜比全景声 - 百老汇影城',
        time_list: ['9:30 am', '11:00 am', '00:20 pm', '01:45 pm', '02:15 pm', '04:10 pm']
      }, {
        title: 'LUXE - UME国际影城',
        time_list: ['8:30 am', '10:20 am', '11:50 am', '00:45 pm', '01:15 pm', '03:10 pm']
      }
    ],
    select_date: { week: '日', date: '24', month: '6', year: '2018' },
    select_theater: 0,
    select_time: '10:30 am'
  },

  onLoad() {
    var that = this;

    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250?count=10',
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        var movie_list = that.movie_list || [];

        for (var i = 0; i < res.data.subjects.length; i++) {
          var movie = {}
          movie.movie_src = res.data.subjects[i].images.small
          movie.movie_title = res.data.subjects[i].title
          movie.movie_genres = res.data.subjects[i].genres.join(' | ')
          movie.movie_durations = res.data.subjects[i].durations[0]
          movie.movie_average = res.data.subjects[i].rating.average
          movie_list.push(movie)
        }
        
        that.setData({ movie_list })
      }
    })
  },

  // 选择类型
  bindGenreTap: function (e) {
    this.setData({
      select_genres: e.currentTarget.dataset.id
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
      select_theater: select_theater
    })
    console.log(select_theater)
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
      select_theater: select_theater
    })
    console.log(select_theater)
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