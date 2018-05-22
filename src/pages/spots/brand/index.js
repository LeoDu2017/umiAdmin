import intl from 'react-intl-universal';

const brand = ({price = 123456.78}) => (
  <div>
    <div className="title">Currency Example:</div>
    <div>{intl.get('SALE_PRICE', {price})}</div>
  </div>
);

export default brand
