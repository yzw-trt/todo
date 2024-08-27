//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD","#FC9F9D","#90C652", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84"],
    wlist: [
      { "xqj": 2, "skjc": 4, "skcd": 1, "kcmc": "初二历史（10）" },
      { "xqj": 2, "skjc": 5, "skcd": 1, "kcmc": "初二历史（11）" },
      { "xqj": 2, "skjc": 7, "skcd": 1, "kcmc": "初二历史（8）"},
      { "xqj": 3, "skjc": 3, "skcd": 1, "kcmc": "初二历史（12）" },
      { "xqj": 3, "skjc": 5, "skcd": 1, "kcmc": "初二历史（9）" },
      { "xqj": 3, "skjc": 9, "skcd": 1, "kcmc": "托管+陪餐（单周8）" },
      { "xqj": 3, "skjc": 10, "skcd": 1, "kcmc": "@晚自习 （双周9）" },
      { "xqj": 4, "skjc": 3, "skcd": 1, "kcmc": "初二历史（9）" },
      { "xqj": 4, "skjc": 7, "skcd": 1, "kcmc": "初二历史（11）" },
      { "xqj": 4, "skjc": 9, "skcd": 1, "kcmc": "托管+陪餐(单周10) (双周9)" },
      { "xqj": 4, "skjc": 10, "skcd": 1, "kcmc": "@晚自习 (单周10) (双周12)" },
      { "xqj": 5, "skjc": 3, "skcd": 1, "kcmc": "初二历史（8）" },
      { "xqj": 5, "skjc": 5, "skcd": 1, "kcmc": "初二历史（10）" },
      { "xqj": 5, "skjc": 7, "skcd": 1, "kcmc": "初二历史（12）" },
      { "xqj": 5, "skjc": 9, "skcd": 1, "kcmc": "托管+陪餐(单周12) (双周11)" },
      { "xqj": 5, "skjc": 10, "skcd": 1, "kcmc": "@晚自习 (单周11) (双周8)" },

    ],
    delay: true
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
