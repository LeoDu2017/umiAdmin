const APIV1 = '/api/v1';
const APIV2 = '/api/v2';

module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.svg',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    getTrees:`${APIV1}/albums/tree`,
    updateTreeNames:`${APIV1}/albums/tree/update`,
    storeSubTrees:`${APIV1}/albums/tree/storeSubTree`,
    getSubTrees:`${APIV1}/albums/tree/getSubTrees`,
    getPictures:`${APIV1}/albums/pictures`,

    getShopInfoApi:`${APIV1}/shop/info`,
    updateShopInfoApi:`${APIV1}/shop/info/update`,
    getShopAdminsApi:`${APIV1}/shop/admins`,
    delShopAdminApi:`${APIV1}/user/del`,
    createShopAdminApi:`${APIV1}/user/add`,
    resetPasswordApi:`${APIV1}/user/reset`,


    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    usersApi: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    // user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
