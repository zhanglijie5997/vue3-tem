module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["@hcysunyang/vue-next-jsx", {
      // Specify source
      "source": "@vue/runtime-dom"
    }],
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
