// import { getList } from 'actions/layout';

const left = {
  namespace:'left',
  state:{
    min: false,
    list:[],
    linklist: {
      index:['home'],
      spots:['home','shop','brand','product','order','capital','system'],
      futures:['home','shop','brand','product','system']
    },
    currentIndex: 0,
    subIndex: 0,
    linkIndex: 0,
    linkType: 'index',
    open:false,
    lang: ''
  },
  reducers:{
    toggle(state,{payload:min}){
      return { ...state,min}
    },
    save(state,{payload:list}){
      return { ...state,list}
    },
    setLinkindex(state,{payload:linkIndex}){
      return {...state,linkIndex}
    },
    setOpen(state,{payload:open}){
      return {...state,open}
    },
    linkChange(state,{payload:linkType}){
      return { ...state,linkType}
    },
    select(state,{payload:currentIndex}){
      return { ...state,currentIndex}
    },
    toggleSubMeanu(state,{payload:index}){

      if(index === -1){
        const link = state.linkIndex;
        const current = state.currentIndex;
        if(link === current){
          return {...state,open:!state.open}
        }else{
          return {...state,currentIndex:link,open:false}
        }
      }
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
      return {...state,list:currentlist,currentIndex:index,open:true}
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


        if(subLink){
          let link = subLink.toString();
          const linkIndex = left.state.linklist[linkType].indexOf(link);
          dispatch({
            type:'setLinkindex',
            payload:linkIndex
          })
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
