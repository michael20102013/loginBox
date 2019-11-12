const {
    addLessLoader,
    override,
    overrideDevServer,
    fixBabelImports
} = require('customize-cra')

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1890ff" },
        localIdentName: "[local]--[hash:base64:5]"
    })
)

// module.exports = function(config, env) {
//     return config
// };