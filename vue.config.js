const path = require("path");
function resolve(dir) {
  //path.join(__dirname)设置绝对路径
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
};
