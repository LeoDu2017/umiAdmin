import intl from 'react-intl-universal';

const order = () => (
  <div>
    <div className="title">Basic Examples:</div>
    <div>{intl.get('SIMPLE')}</div>
    <div>{intl.get('HELLO', {name:'Tony', where:'Alibaba'})}</div>
  </div>
);
export default order
