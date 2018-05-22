import intl from 'react-intl-universal';


const lang = {
  namespace:'lang',
  state:{
    languages:[
      {
        name:'汉语',
        value: "zh-CN",
        type:'zhongguo',
        selected: false
      },
      {
        name:'English',
        value: "en-US",
        type:'yingguo',
        selected: false
      },
      {
        name:'Français',
        value: "fr-FR",
        type:'faguo',
        selected: false
      },
      {
        name:'Italiano',
        value: "it-IT",
        type:'yidali',
        selected: false
      }
    ],
    currentLocale:'',
  },
  reducers:{
    choose(state,{payload:data}){
      data.languages.forEach(v => {
        v.selected = v.value === data.lang ? !0 : !1;
      });
      return { ...state,languages:data.languages}
    },
    initLang(state,{payload:lang}){
      let locales = lang.locale;
      let currentLocale = lang.type;
      intl.init({
        currentLocale,
        locales: {
          [currentLocale]: locales
        }
      });
      return { ...state,currentLocale}
    },
  },
  effects:{
    *lang({ payload:{ lang } }, { call, put,select }){
      let data = require(`locale/${lang}`);
      const languages = yield select(({lang}) => lang.languages);
      yield put({
        type:'choose',
        payload:{languages,lang}
      });
      yield put({
        type:'left/setLang',
        payload:lang
      });
      yield put({
        type:'initLang',
        payload: data.default
      })
    },
  }
};

export default lang
