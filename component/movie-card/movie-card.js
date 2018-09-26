// component/movie-card/movie-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie_src: String,
    movie_title: String,
    movie_genres: String,
    movie_durations: String,
    movie_average: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindCardTap: function () {
      var that = this;

      this.setData({
        show: !that.data.show
      })
    }
  }
})
