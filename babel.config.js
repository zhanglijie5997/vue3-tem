module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["@vue/babel-plugin-jsx", {
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
