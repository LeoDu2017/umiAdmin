export default{
  namespace:'brandSelect',
  state:{
    currentStep:0,
    selected:[],
    next:false
  },
  reducers:{
    setCurrentStep(state,{payload:currentStep}){
      return { ...state,currentStep}
    },
    setNext(state,{payload:next}){
      return { ...state,next}
    },
    saveSelected(state,{payload:selected}){
      return { ...state,selected}
    },
  },
  effects:{
    *setSelected({payload:selected},{select,put,call}){
      yield put({type:'setNext',payload: selected.length > 0});
      yield put({type:'saveSelected',payload: selected });
    }
  }
}
