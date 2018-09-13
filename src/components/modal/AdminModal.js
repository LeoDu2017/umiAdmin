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



const UserEditModal = ({dispatch,children,visible,id,add,onOk,record,form:{getFieldDecorator,validateFields,resetFields}})=> (
    <span>
      <span onClick={showModelHandler.bind(null,dispatch,id)}>
        { children }
      </span>
      <Modal
        title= {add ? `${intl.get('ADD')}${intl.get('ADMIN')}` : `${intl.get('EDIT')}${intl.get('ADMIN')}`}
        visible={visible[id]}
        onOk={okHandler.bind(null,dispatch,validateFields,onOk,id)}
        onCancel={hideModelHandler.bind(null,dispatch,resetFields,id)}
      >
        <Form horizontal="true" onSubmit={okHandler.bind(null,dispatch,validateFields,onOk)}>
          <FormItem
            {...formItemLayout}
            label={intl.get('USERNAME')}
            style={add ? {display:'block'} : {display:'none'}}
          >
            {
              getFieldDecorator('username', {
                initialValue:record.username,
                rules: [{required: true, message:intl.get('INPUTUSERNAME')}],
              })(<Input placeholder={intl.get('INPUTUSERNAME')} />)
            }
          </FormItem>
          {
            add && <FormItem
              {...formItemLayout}
              label={intl.get('PASSWORD')}
              style={add ? {display:'block'} : {display:'none'}}
            >
              {
                getFieldDecorator('password', {
                  initialValue:record.password,
                  rules: [{required: true, message:intl.get('INPUTUPASSWORD')}],
                })(<Input placeholder={intl.get('INPUTUPASSWORD')} />)
              }
            </FormItem>
          }
          <FormItem
            {...formItemLayout}
            label={intl.get('NAME')}
          >
            {
              getFieldDecorator('name', {
                initialValue:record.name,
                rules: [{required: true, message:intl.get('INPUTNAME')}],
              })(<Input placeholder={intl.get('INPUTNAME')} />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('TITLE')}
          >
            {
              getFieldDecorator('title', {
                initialValue:record.title,
              })(<Input placeholder={intl.get('INPUTADMINTITLE')} />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={intl.get('CONTACT')}
          >
            {
              getFieldDecorator('contactNumber', {
                initialValue:record.contactNumber,
                rules: [{required: true, message:intl.get('INPUTCONTACT')}],
              })(<Input placeholder={intl.get('INPUTCONTACT')}/>)
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
              getFieldDecorator('permissions', {
                initialValue:record.permissions,
                rules: [{required: true, message:intl.get('SELECTAUTHORIZATION')}],
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
  );

function mapStateToProps(state,props){
  const {visible} = state.commonModal;
  const {id} = props;
  return{
    visible
  }
}

export default connect(mapStateToProps)(Form.create()(UserEditModal));

