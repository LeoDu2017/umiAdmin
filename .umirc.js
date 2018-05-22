export default {
  plugins: ['umi-plugin-locale','umi-plugin-dva'],
  locale: {
    enable: true, // default true
    default: 'zh-CN', // default zh-CN
    baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
  }
}
