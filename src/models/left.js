import { getList } from 'actions/layout';

const left = {
  namespace:'left',
  state:{
    min: false,
    list: [],
    currentIndex: 0,
    subIndex: 0,
    linkType: 'index',
    lang: ''
  },
  reducers:{
    toggle(state,{payload:min}){
      return { ...state,min}
    },
    save(state,{payload:list}){
      return { ...state,list}
    },
    linkChange(state,{payload:linkType}){
      return { ...state,linkType}
    },
    select(state,{payload:currentIndex}){
      return { ...state,currentIndex}
    },
    toggleSubMeanu(state,{payload:index}){
      let currentlist = state.list;
      let sublist = currentlist[index].child;
      let sublength = sublist.length + 1;

      currentlist.forEach((value,i) => {
        if( i === index){
          value.sublength = sublength
        }else{
          value.sublength = 1
        }

      });
      return {...state,list:currentlist,currentIndex:index}
    },
    setLang(state,{payload:lang}){
      return { ...state,lang}
    },
    selectSubMeanu(state,{payload:subIndex}){
      return { ...state,subIndex}
    }
  },
  subscriptions:{
    setup({ dispatch,history}){
      return history.listen(({ pathname, query }) => {

        let arr = pathname.split('/');
        let linkType = arr[1] ? arr[1] : 'index';
        let subLink = arr[2];
        if(linkType === left.state.linkType){
          return
        }


        // dispatch({
        //   type:'linkChange',
        //   payload:linkType
        // });
        // let list = getList(linkType);
        // dispatch({
        //   type:'save',
        //   payload:list
        // })
      });
    }
  }
};
export default left
