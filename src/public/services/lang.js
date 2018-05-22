import request from 'utils/request';


export function fetch({ lang }) {
  return request(`/api/langs?type=${lang}`);
}

