import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Form, Input, Tooltip, Icon, Cascader,Upload, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Albums from 'components/Albums';
import styles from 'styles/shop.less';
import {showAlbums} from 'actions/albums';
import {selectImgs,toggleEditable,handleSubmit} from 'actions/shop';
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
// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
const infoForm = ({dispatch,logo,editable,shopInfo,conpany_types,shop_products,form: {getFieldDecorator,validateFieldsAndScroll}}) => (
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
        <Form onSubmit={handleSubmit.bind(this,dispatch,validateFieldsAndScroll)}>

          {/*公司名称*/}
          <FormItem {...formItemLayout} label={intl.get('COMPANYNAME')} className="g-f-item">
            {getFieldDecorator('company_name', {
              initialValue:shopInfo.company_name,
              rules: [{required: true, message:intl.get('INPUTCOMPANYNAME')}],
            })(<Input disabled={editable} placeholder={intl.get('INPUTCOMPANYNAME')}/>)}
          </FormItem>

          {/*店铺名称*/}
          <FormItem {...formItemLayout} label={intl.get('SHOPNAME')} className="g-f-item">
            {getFieldDecorator('shop_name', {
              initialValue:shopInfo.shop_name,
              rules: [{required: true, message:intl.get('INPUTSHOPNAME')}],
            })(<Input disabled={editable} placeholder={intl.get('INPUTSHOPNAME')}/>)}
          </FormItem>

          {/*公司类型*/}
          <FormItem {...formItemLayout} label={intl.get('COMPANYTYPE')} className="g-f-item">
            {getFieldDecorator('company_type', {
              initialValue: conpany_types[shopInfo.company_type],
              rules: [{required: true, message:intl.get('SELECTCOMPANYTYPE')}],
            })(
              <Select disabled={editable} placeholder={intl.get('SELECTCOMPANYTYPE')}>
                <Select.Option value="-1" disabled>{intl.get('SELECTCOMPANYTYPE')}</Select.Option>
                {conpany_types.map((item,index)=>
                  <Select.Option key={index} value={index}>{item}</Select.Option>
                )}
              </Select>
            )}
          </FormItem>

          {/*主营产品*/}
          <FormItem {...formItemLayout} label={intl.get('SHOPPRODUCT')} className="g-f-item">
            {getFieldDecorator('shop_product', {
              initialValue:shopInfo.category_id,
              rules: [{required: true, message:intl.get('SELECTSHOPPRODUCT')}],
            })(
              <Checkbox.Group>
                <Row>
                  {shop_products.map((item,index)=>
                    <Checkbox disabled={editable} value={index} key={index}>{item}</Checkbox>
                  )}
                </Row>
              </Checkbox.Group>,
            )}
          </FormItem>

          {/*联系人*/}
          <FormItem {...formItemLayout} label={intl.get('ADMINNAME')} className="g-f-item">
            {getFieldDecorator('contact', {
              initialValue:shopInfo.contact,
              rules: [{required: true, message:intl.get('INPUTADMINNAME')}],
            })(<Input disabled={editable} placeholder={intl.get('INPUTADMINNAME')}/>)}
          </FormItem>

          {/*职称*/}
          <FormItem {...formItemLayout} label={intl.get('ADMINTITLE')} className="g-f-item">
            {getFieldDecorator('title', {
              initialValue:shopInfo.title,
            })(<Input disabled={editable} placeholder={intl.get('INPUTADMINTITLE')}/>)}
          </FormItem>

          {/*店铺LOGO*/}
          <FormItem {...formItemLayout} label={intl.get('SHOPLOGO')} extra={intl.get('OPTIMUM')}
            className="g-f-item">
            {getFieldDecorator('shop_logo', {
              initialValue:shopInfo.shop_logo,
              rules: [{required: true, message:intl.get('UPLOADSHOPlOGO')}],
              getValueFromEvent: this.normFile,
            })(
              <Col className={styles.upLogo}>
                <img src={shopInfo.shop_logo}/>
                {
                  !editable &&
                  <span onClick={showAlbums.bind(null,dispatch,true)}>
                    {intl.get('REUPLOAD')}
                  </span>
                }
                <Input name="shop_logo" type="hidden"/>
              </Col>
            )}
          </FormItem>

          {/*联系电话*/}
          <FormItem {...formItemLayout} label={intl.get('CONTACTNUM')} className="g-f-item">
            {getFieldDecorator('mobile', {
              initialValue:shopInfo.mobile,
              rules: [{required: true, message:intl.get('INPUTCONTACTNUM')}],
            })(<Input disabled={editable} placeholder={intl.get('INPUTCONTACTNUM')}/>)}
          </FormItem>

          {/*邮箱*/}
          <FormItem {...formItemLayout} label= {intl.get('EMAIL')} className="g-f-item">
            {getFieldDecorator('email', {
              initialValue:shopInfo.email,
              rules: [{type: 'email', message: intl.get('ERROREMAIL'),
              }],
            })(<Input disabled={editable} placeholder={intl.get('INPUTEMAIL')}/>)}
          </FormItem>

          <FormItem {...formItemLayout} label= "" className="g-f-item">
            <Button type="primary" htmlType="submit" disabled={editable}>
              {intl.get('SAVE')}
            </Button>
          </FormItem>
        </Form>

        <Albums single={true} callBack={selectImgs}/>
      </Col>
    </Col>
  </Col>
);
function mapStateToProps(state){
  const {logo,editable,shopInfo} = state.shop;
  const conpany_types = [intl.get("PRODUCER"),intl.get("AGENT"),intl.get("SERVER"),intl.get("PERSONAGE"),intl.get("OTHER")];
  const shop_products = [intl.get('FURNITURE'),intl.get('MATERIAL'),intl.get('ORNAMENTS'),intl.get('SPOTS')];
  return{
    logo,
    editable,
    shopInfo,
    conpany_types,
    shop_products
  }
}
const shopInfo = connect(mapStateToProps)(Form.create()(infoForm));
export default shopInfo
