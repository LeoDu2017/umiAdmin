const header = {
  namespace:'header',
  state:{
    currentIndex: -1,
    currentLocale:'',
  },
  reducers:{
    select(state,{payload:currentIndex}){
      return { ...state,currentIndex}
    }
  },
  effects:{

  },
  subscriptions:{

  }
};

export default header
