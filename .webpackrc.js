const path = require('path');

export default{
  theme: {
    "@primary-color": "#424f63",
    "@info-color":"#F8AC59",
    "@link-color": "#dc6aac",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2"
  },
  alias: {
    models: path.resolve(__dirname, 'src/models/'),
    actions: path.resolve(__dirname, 'src/actions/'),
    utils:path.resolve(__dirname, 'src/utils/'),
    locale:path.resolve(__dirname, 'src/locale/'),
    components:path.resolve(__dirname, 'src/components/'),
    services:path.resolve(__dirname, 'src/services/'),
  }
}
