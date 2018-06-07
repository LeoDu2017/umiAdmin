export function showAlbums(dispatch,boolenValue){
  const dispaly = boolenValue;
  dispatch({
    type:'albums/setDisplay',
    payload:dispaly
  })
}
