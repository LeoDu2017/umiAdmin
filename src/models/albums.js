// import intl from 'react-intl-universal';
// import {getTree,storeSubTree,updateTreeName,getSubTree} from 'services/albums';
// import { message } from 'antd';

const albums = {
  namespace:'albums',
  state:{
    display:false
  },
  reducers:{
    setDisplay(state,{payload:display}){
      return{ ...state,display}
    }
  },
  effects:{ },
  subscriptions:{}
};
export default albums;
