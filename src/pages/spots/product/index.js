import intl from 'react-intl-universal';

const product = ({start = new Date(),end = new Date(),expires = new Date()}) => (
  <div>
    <div className="title">Date Examples:</div>
    <div>{intl.get('SALE_START', {start})}</div>
    <div>{intl.get('SALE_END', {end})}</div>
    <div>{intl.get('COUPON', {expires})}</div>
  </div>
);

export default product
