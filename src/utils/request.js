import fetch from 'dva/fetch';

function checkStatus(response) {
  const data = response.json()
  console.log(data)
  debugger
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options={}) {

  options.headers={
    'Content-Type':'application/json'
  }

  const response = await fetch(url,options);

  checkStatus(response);
  const data=await response.json();

  return data;

//   const response = await fetch(url, options);
// debugger
//   checkStatus(response);
//
//   const data = await response.json();
//
//   const ret = {
//     data,
//     headers: {},
//   };
//
//   if (response.headers.get('x-total-count')) {
//     ret.headers['x-total-count'] = response.headers.get('x-total-count');
//   }
//
//   return ret;
}

export default request;
