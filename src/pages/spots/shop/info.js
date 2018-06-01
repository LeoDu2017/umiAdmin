import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader,Upload, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Albums from 'components/Albums';
import styles from './index.less';
import {setDispaly} from 'actions/albums';
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

const infoForm = ({dispatch,form: {getFieldDecorator,validateFieldsAndScroll}}) => (
  <Col span={24} className='g-t-wrap'>
    <Col span={24} className='g-t-main'>
      <header className='g-t-header'>
          <span className='g-t-title'>
            {intl.get('SHOPINFO')}
          </span>
        <Button type="primary" size="small">
          {intl.get('EDIT')}
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
              rules: [{required: true, message:intl.get('INPUTCOMPANYNAME')}],
            })(
              <Input placeholder={intl.get('INPUTCOMPANYNAME')}/>
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
              <Input placeholder={intl.get('INPUTSHOPNAME')}/>
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
                  <Checkbox value="1">{intl.get('FURNITURE')}</Checkbox>
                  <Checkbox value="2">{intl.get('MATERIAL')}</Checkbox>
                  <Checkbox value="3">{intl.get('ORNAMENTS')}</Checkbox>
                  <Checkbox value="4">{intl.get('SPOTS')}</Checkbox>
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
              <Input placeholder={intl.get('INPUTADMINNAME')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('ADMINTITLE')}
            className="g-f-item"
          >
            {getFieldDecorator('title', {

            })(
              <Input placeholder={intl.get('INPUTADMINTITLE')}/>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="店铺LOGO"
            extra="longgggggggggggggggggggggggggggggggggg"
            className="g-f-item"
          >
            {getFieldDecorator('shop_logo', {
              rules: [{required: true, message:intl.get('SELECTCOMPANYTYPE')}],
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Col className={styles.upLogo}>
                <img src={require('assets/timg.jpg')}/>
                <span onClick={setDispaly.bind(null,dispatch,true)}>
                  重新上传
                </span>
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
              <Input placeholder={intl.get('INPUTCONTACTNUM')}/>
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
              <Input placeholder={intl.get('INPUTEMAIL')}/>
            )}
          </FormItem>

        </Form>
        <Albums/>
      </Col>
    </Col>
  </Col>
);
function mapStateToProps(state){

};
const shopInfo = connect(mapStateToProps)(Form.create()(infoForm));
export default shopInfo
