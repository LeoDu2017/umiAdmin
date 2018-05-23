// 打开菜单
export function handleClick(index,dispatch,event){
  event.stopPropagation();
  dispatch({
    type:'login/change',
    payload:index
  })
}
// 鼠标离开菜单进行隐藏菜单
export function handleMouseLeave(dispatch){
  dispatch({
    type:'login/change',
    payload:0
  })
}
// 登录框点击确定
export function handleSubmit(dispatch,validateFieldsAndScroll,event){
  event.preventDefault();

  validateFieldsAndScroll((errors, values) => {
    if (errors) {
      return
    }
    dispatch({ type: 'login/login', payload: values })

  })
}


