import intl from 'react-intl-universal';
import router from 'umi/router';

// 打开选项的下拉框
export function handletoggleOpen(dispatch,i,n){
  let currentIndex = n === i ? -1 : i;
  dispatch({
    type: 'header/select',
    payload: currentIndex,
  });
}

// 鼠标离开收起下拉框
export function handleMouseLeave(dispatch){
  dispatch({
    type: 'header/select',
    payload: -1,
  });
}

// 点击侧边栏收起图标展开/收起侧边栏
export function handleToggle(dispatch,min){
  dispatch({
    type:'left/toggle',
    payload: min
  })
}

// 获得导航栏数据
export function getList(linkType){
  let list = {
    index:[{
      name: intl.get('HOME'),
      link:'/',
      type:'home',
      index:0,
      sublength:1,
      child:[]
    }],
    spots:[{
      name:intl.get('HOME'),
      link:'/',
      type:'home',
      index:0,
      sublength:1,
      child:[]
    },{
      name:intl.get('SHOP'),
      link:'/spots/shop',
      type:'shop',
      index:1,
      sublength:1,
      child:[
        {
          name:intl.get('SHOPINFO'),
          link:'/spots/shop/info',
          index:10,
        },{
          name:intl.get('SHOPADMIN'),
          link:'/spots/shop/admin',
          index:11,
        }
      ]
    },{
      name:intl.get('BRAND'),
      link:'/spots/brand',
      type:'brand',
      index:2,
      sublength:1,
      child:[
        {
          name:intl.get('BRANDLIST'),
          link:'/spots/brand/list',
          index:20,
        }
      ]
    },{
      name:intl.get('PRODUCT'),
      link:'/spots/product',
      type:'product',
      index:3,
      sublength:1,
      child:[
        {
          name:intl.get('PRODUCTLIST'),
          link:'/spots/product/list',
          index:30,
        }
      ]
    },{
      name:intl.get('ORDER'),
      link:'/spots/order',
      type:'order',
      index:4,
      sublength:1,
      child:[
        {
          name:intl.get('ORDERLATEST'),
          link:'/spots/order/latest',
          index:40,
        },{
          name:intl.get('ORDERPREVIOUS'),
          link:'/spots/order/previous',
          index:41,
        },{
          name:intl.get('ORDERUNFINISHED'),
          link:'/spots/order/unfinished',
          index:42,
        }
      ]
    },{
      name:intl.get('CAPITAL'),
      link:'/spots/capital',
      type:'capital',
      index:5,
      sublength:1,
      child:[
        {
          name:intl.get('CAPITALFUND'),
          link:'/spots/capital/fund',
          index:50,
        }
      ]
    },{
      name:intl.get('SYSTEM'),
      link:'/spots/system',
      type:'system',
      index:6,
      sublength:1,
      child:[
        {
          name:intl.get('SYSTEMHELP'),
          link:'/spots/system/help',
          index:60,
        },{
          name:intl.get('SYSTEMINTRO'),
          link:'/spots/system/introduction',
          index:61,
        },{
          name:intl.get('SYSTEMAGREEMENT'),
          link:'/spots/system/agreement',
          index:62,
        }
      ]
    }],

    futures:[{
      name:intl.get('HOME'),
      link:'/',
      type:'home',
      index:0,
      sublength:1,
      child:[]
    },{
      name:intl.get('SHOP'),
      link:'/futures/shop',
      type:'shop',
      index:1,
      sublength:1,
      child:[]
    },{
      name:intl.get('BRAND'),
      link:'/futures/brand',
      type:'brand',
      index:2,
      sublength:1,
      child:[]
    },{
      name:intl.get('PRODUCT'),
      link:'/futures/product',
      type:'product',
      index:3,
      sublength:1,
      child:[]
    },{
      name:intl.get('SYSTEM'),
      link:'/futures/system',
      type:'system',
      index:4,
      sublength:1,
      child:[],
    }]
  };
  return list.hasOwnProperty(linkType) ? list[linkType] : list.index
}

// 展开二级菜单，如果有二级菜单则展开二级菜单反之进行跳转
export function toggleSubMeanu(dispatch,index,link,search,childLength,currentIndex){

  if(childLength === 0){
    router.push(`${link}${search}`)
  }
  let i = index !== currentIndex ? index : -1;

  // let parent = event.target.parentNode;
  // if(parent.nodeName !== 'LI'){
  //   parent = parent.parentNode
  // }
  // let height = parent.style.height;

  dispatch({
    type:'left/toggleSubMeanu',
    payload:i
  })
}

// 选中二级菜单
export function selectSubMeanu(dispatch,index){
  dispatch({
    type:'left/selectSubMeanu',
    payload:index
  })
}
