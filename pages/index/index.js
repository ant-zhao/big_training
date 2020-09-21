//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rulesBox: false
  },
  go(e) {
    const type = e.currentTarget.dataset.type || e.target.dataset.type
    console.log('>> e', e)
    let url = null
    switch (type) {
      case 'ranking':
        url = '/pages/ranking/ranking'
        break;
      case 'wrongQuestion':
        url = '/pages/wrongQuestion/wrongQuestion'
        break;
      case 'record':
        url = '/pages/record/record'
        break;
      default:
        break;
    }
    if (!url) return
    wx.navigateTo({
      url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  rulesBoxShow () {
    this.setData({
      rulesBox: !this.data.rulesBox
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