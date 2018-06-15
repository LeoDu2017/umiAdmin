export function getPictures(dispatch,page){
  dispatch({
    type:'pictures/getPictures',
    payload:{page}
  })
}
