import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Form,Input,Select,Row,Col,Checkbox,Button,Icon } from 'antd';
import Albums from 'components/Albums';
import styles from 'styles/shop.less';
import {showAlbums} from 'actions/albums';
import {selectImgs,toggleEditable,handleSubmit,FieldsChange} from 'actions/shop';
const FormItem = Form.Item;
const { TextArea } = Input;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

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
const formItemLayout_2 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
};
const formItemLayout_3 = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20, offset: 4 },

  },
};
// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
const infoForm = ({dispatch,editable,shopInfo,originInfo,conpany_types,shop_products,company_countries,form: {getFieldDecorator,validateFieldsAndScroll,resetFields}}) => (
  <Col span={24} className='g-t-wrap'>
    <Col span={24} className='g-t-main'>
      <header className='g-t-header'>
          <span className='g-t-title'>
            {intl.get('SHOPINFO')}
          </span>
          <Button type={editable ? 'primary' : 'danger'} onClick={toggleEditable.bind(this,dispatch,shopInfo,originInfo,validateFieldsAndScroll,resetFields)} size="small">
            <Icon type={editable ? 'edit' : 'rollback'} />
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

          {/*店铺LOGO*/}
          <FormItem {...formItemLayout} label={intl.get('SHOPLOGO')} extra={intl.get('OPTIMUM')}
                    className="g-f-item">
            {getFieldDecorator('shop_logo', {
              initialValue:shopInfo.shop_logo,
              rules: [{required: true, message:intl.get('UPLOADSHOPlOGO')}]
            })(
              <Col className={styles.upLogo}>
                <img alt="LOGO" src={shopInfo.shop_logo ? shopInfo.shop_logo : 'https://api.vtrois.com/image/108x108/f5f5f5/C2C2C2?text=%20EUROOO%20'}/>
                {
                  !editable &&
                  <span onClick={showAlbums.bind(null,dispatch,true)}>
                    {intl.get('REUPLOAD')}
                  </span>
                }
                <Input type="hidden"/>
              </Col>
            )}
          </FormItem>

          {/*主营产品*/}
          <FormItem {...formItemLayout} label={intl.get('SHOPPRODUCT')} className="g-f-item">
            {getFieldDecorator('shop_product', {
              initialValue:shopInfo.shop_product,
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

          {/*国家*/}
          <FormItem {...formItemLayout_2} label={intl.get('ADDRESS')} className="g-f-item g-m-b-12">
            {getFieldDecorator('country_id', {
              initialValue: company_countries[shopInfo.country_id],
              rules: [{required: true, message:intl.get('SELECTCOMPANYCOUNTRY')}],
            })(
              <Select disabled={editable} placeholder={intl.get('SELECTCOMPANYCOUNTRY')}>
                <Select.Option value="-1" disabled>{intl.get('COUNTRY')}</Select.Option>
                {company_countries.map((item,index)=>
                  <Select.Option key={index} value={index}>{item}</Select.Option>
                )}
              </Select>
            )}
          </FormItem>
          {/*地址*/}
          <FormItem {...formItemLayout_3} className="g-f-item">
            {getFieldDecorator('address', {
              initialValue:shopInfo.address,
              rules: [{required: true, message:intl.get('INPUTCOMPANYADDRESS')}],
            })(
              <TextArea rows={3} disabled={editable} placeholder={intl.get('INPUTCOMPANYADDRESS')}/>
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
  const {editable,shopInfo,originInfo} = state.shop;
  const conpany_types = [intl.get("PRODUCER"),intl.get("AGENT"),intl.get("SERVER"),intl.get("PERSONAGE"),intl.get("OTHER")];
  const shop_products = [intl.get('FURNITURE'),intl.get('MATERIAL'),intl.get('ORNAMENTS'),intl.get('SPOTS')];
  const company_countries = [intl.get('BELGIUM'),intl.get('FRANCE'),intl.get('GERMANY'),intl.get('ITALY')];
  return{
    editable,
    shopInfo,
    conpany_types,
    shop_products,
    originInfo,
    company_countries
  }
}
//  {onFieldsChange:FieldsChange}
const shopInfo = connect(mapStateToProps)(Form.create({onFieldsChange:FieldsChange})(infoForm));
export default shopInfo
