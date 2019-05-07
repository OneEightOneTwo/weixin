//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    src:"/imgs/demo.jpg"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  bindNavgateMine(){
    console.log(1)
    
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  }
})
