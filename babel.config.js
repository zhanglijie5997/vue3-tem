module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/env"
  ],
  "plugins": [
    ["@vue/babel-plugin-jsx", {
      // Specify source
      "source": "@vue/runtime-dom",
      "optimizate": true
    }],
    ["import", {
      "libraryName": "ant-design-vue",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}
