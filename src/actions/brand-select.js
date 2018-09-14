export function nextStepHandler(dispatch,currentStep){
  dispatch({
    type:'brandSelect/setCurrentStep',
    payload:currentStep
  });
}
export function pageChangeHandler(dispatch,page){
  dispatch({
    type:'brands/setCurrent',
    payload:page
  });
  dispatch({
    type:'brands/fetchBrandsList',
    payload:{ page }
  })
}
export function selectBrandHandler(dispatch,selected){
  dispatch({
    type:'brandSelect/setSelected',
    payload:selected
  });
}
