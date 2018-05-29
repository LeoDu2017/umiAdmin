import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader,Upload, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
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

const infoForm = ({form: {getFieldDecorator,validateFieldsAndScroll,}}) => (
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
            label={intl.get('ADMINTITLE')}
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
          >
            {getFieldDecorator('shop_logo', {
              rules: [{required: true, message:intl.get('SELECTCOMPANYTYPE')}],
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={intl.get('CONTACTNUM')}
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
      </Col>
    </Col>
  </Col>
);

const shopInfo = Form.create()(infoForm);
export default shopInfo
