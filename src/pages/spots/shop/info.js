import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader,Upload, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Albums from 'components/Albums';
import styles from 'styles/shop.less';
import {showAlbums} from 'actions/albums';
import {selectImgs,toggleEditable} from 'actions/shop';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const infoForm = ({dispatch,logo,editable,form: {getFieldDecorator,validateFieldsAndScroll}}) => (
  <Col span={24} className='g-t-wrap'>
    <Col span={24} className='g-t-main'>
      <header className='g-t-header'>
          <span className='g-t-title'>
            {intl.get('SHOPINFO')}
          </span>


        <Button type={editable ? 'primary' : 'danger'} onClick={toggleEditable.bind(null,dispatch)} size="small">
          { editable ? intl.get('EDIT') : intl.get('CANCEL') }
        </Button>
      </header>
      <Col className="g-t-form-wrap">
        <Form>
          <FormItem
            {...formItemLayout}
            label={intl.get('COMPANYNAME')}
            className="g-f-item"
          >
            {getFieldDecorator('company_name', {
              initialValue:'sdsdsds',
              rules: [{required: true, message:intl.get('INPUTCOMPANYNAME')}],
            })(
              <Input disabled={editable} placeholder={intl.get('INPUTCOMPANYNAME')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('SHOPNAME')}
            className="g-f-item"
          >
            {getFieldDecorator('shop_name', {
              rules: [{required: true, message:intl.get('INPUTSHOPNAME')}],
            })(
              <Input disabled={editable} placeholder={intl.get('INPUTSHOPNAME')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('COMPANYTYPE')}
            className="g-f-item"
          >
            {getFieldDecorator('company_type', {
              rules: [{required: true, message:intl.get('SELECTCOMPANYTYPE')}],
            })(
              <Select
                disabled={editable}
                placeholder={intl.get('SELECTCOMPANYTYPE')}
              >
                <Select.Option value="-1" disabled>{intl.get('SELECTCOMPANYTYPE')}</Select.Option>
                <Select.Option value="0">生产商</Select.Option>
                <Select.Option value="1">代理商</Select.Option>
                <Select.Option value="2">服务商</Select.Option>
                <Select.Option value="3">个人</Select.Option>
                <Select.Option value="4">其他</Select.Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('SHOPPRODUCT')}
            className="g-f-item"
          >
            {getFieldDecorator('shop_product', {
              rules: [{required: true, message:intl.get('SELECTSHOPPRODUCT')}],
            })(
              <Checkbox.Group>
                <Row>
                  <Checkbox disabled={editable} value="1">{intl.get('FURNITURE')}</Checkbox>
                  <Checkbox disabled={editable} value="2">{intl.get('MATERIAL')}</Checkbox>
                  <Checkbox disabled={editable} value="3">{intl.get('ORNAMENTS')}</Checkbox>
                  <Checkbox disabled={editable} value="4">{intl.get('SPOTS')}</Checkbox>
                </Row>
              </Checkbox.Group>,
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('ADMINNAME')}
            className="g-f-item"
          >
            {getFieldDecorator('contact', {
              rules: [{required: true, message:intl.get('INPUTADMINNAME')}],
            })(
              <Input disabled={editable} placeholder={intl.get('INPUTADMINNAME')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('ADMINTITLE')}
            className="g-f-item"
          >
            {getFieldDecorator('title', {

            })(
              <Input disabled={editable} placeholder={intl.get('INPUTADMINTITLE')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('SHOPLOGO')}
            extra={intl.get('OPTIMUM')}
            className="g-f-item"
          >
            {getFieldDecorator('shop_logo', {
              rules: [{required: true, message:intl.get('SELECTCOMPANYTYPE')}],
              getValueFromEvent: this.normFile,
            })(
              <Col className={styles.upLogo}>
                <img src={logo}/>
                <span onClick={showAlbums.bind(null,dispatch,true)}>
                  {intl.get('REUPLOAD')}
                </span>
                <Input  type="hidden" value={logo}/>
              </Col>

            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('CONTACTNUM')}
            className="g-f-item"
          >
            {getFieldDecorator('mobile', {
              rules: [{required: true, message:intl.get('INPUTCONTACTNUM')}],
            })(
              <Input disabled={editable} placeholder={intl.get('INPUTCONTACTNUM')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label= {intl.get('EMAIL')}
            className="g-f-item"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: intl.get('ERROREMAIL'),
              }],
            })(
              <Input disabled={editable} placeholder={intl.get('INPUTEMAIL')}/>
            )}
          </FormItem>

        </Form>
        <Albums single={true} callBack={selectImgs} />
      </Col>
    </Col>
  </Col>
);
function mapStateToProps(state){
  const {logo,editable} = state.shop;
  return{
    logo,
    editable
  }
};
const shopInfo = connect(mapStateToProps)(Form.create()(infoForm));
export default shopInfo
