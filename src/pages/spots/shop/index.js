import intl from 'react-intl-universal';

const shop = () => (
  <div>
    <div className="title">Html Examples:</div>
    <div>{intl.getHTML('TIP')}</div>
    <div>{intl.getHTML('TIP_VAR', {message: 'HTML with variables'})}</div>
    <div>{intl.getHTML('TIP_VAR', {message: '<script>alert("ReactIntlUniversal prevents from xss attack")</script>'})}</div>
  </div>
);

export default shop
