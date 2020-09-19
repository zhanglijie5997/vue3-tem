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
      "libraryName": "ant-design-vue",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}
