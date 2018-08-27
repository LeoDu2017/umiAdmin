import intl from 'react-intl-universal';
import { Modal, Form, Input,Radio } from 'antd';
import { connect } from 'dva';
import { showModelHandler,hideModelHandler,okHandler } from 'actions/common-modal';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const UserEditModal = ({dispatch,children,visible,add,onOk,record,form:{getFieldDecorator,validateFields,resetFields}})=> {
  return (
    <span>
      <span onClick={showModelHandler.bind(null,dispatch)}>
        { children }
      </span>
      <Modal
        title= {add ? `${intl.get('ADD')}${intl.get('ADMIN')}` : `${intl.get('EDIT')}${intl.get('ADMIN')}`}
        visible={visible}
        onOk={okHandler.bind(null,dispatch,validateFields,onOk)}
        onCancel={hideModelHandler.bind(null,dispatch)}
      >
        <Form horizontal="true" onSubmit={okHandler.bind(null,dispatch,validateFields,onOk)}>
          <FormItem
            {...formItemLayout}
            label={intl.get('USERNAME')}
          >
            {
              getFieldDecorator('username', {
                initialValue:record.username,
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('PASSWORD')}
          >
            {
              getFieldDecorator('password', {
                initialValue:record.password,
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('NAME')}
          >
            {
              getFieldDecorator('name', {
                initialValue:record.name,
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('TITLE')}
          >
            {
              getFieldDecorator('title', {
                initialValue:record.title,
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('CONTACT')}
          >
            {
              getFieldDecorator('contactNumber', {
                initialValue:record.contactNumber,
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('ACCOUNTSTATUS')}
          >
            {
              getFieldDecorator('userMode', {
                initialValue:record.userMode,
              })(
                <RadioGroup>
                  <Radio value={1}>{intl.get('INUSE')}</Radio>
                  <Radio value={0}>{intl.get('CLOSE')}</Radio>
                </RadioGroup>
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('AUTHORIZATION')}
          >
            {
              getFieldDecorator('authorization', {
                initialValue:record.authorization,
              })(
                <RadioGroup>
                  <Radio value={1}>{intl.get('INAUTH')}</Radio>
                  <Radio value={0}>{intl.get('OUTAUTH')}</Radio>
                </RadioGroup>
              )
            }
          </FormItem>



        </Form>
      </Modal>
    </span>
  )
};

function mapStateToProps(state){
  const {visible} = state.commonModal;
  return{
    visible
  }
}



//  Form.create()(UserEditModal); {onFieldsChange:FieldsChange}

export default connect(mapStateToProps)(Form.create()(UserEditModal));

