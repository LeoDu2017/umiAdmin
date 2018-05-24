import {connect} from 'dva';
import {Button, Icon, Form, Input,Checkbox} from 'antd';
import styles from './login.less';
import {handleSubmit} from 'actions/loginpage';

const FormItem = Form.Item

const Login = ({
                 loading,
                 dispatch,
                 loginfail,
                 form: {
                   getFieldDecorator,
                   validateFieldsAndScroll,
                 },
               }) => (
                        <Form onSubmit={handleSubmit.bind(this,dispatch,validateFieldsAndScroll)} className={styles.login_form}>
                          <h1 className={styles.header}>EUROOO ADMIN</h1>
                          <FormItem>
                            {getFieldDecorator('username', {
                              rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                          </FormItem>
                          <FormItem>
                            {getFieldDecorator('password', {
                              rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                          </FormItem>
                          <FormItem>
                            {getFieldDecorator('remember', {
                              valuePropName: 'checked',
                              initialValue: true,
                            })(
                              <Checkbox>Remember me</Checkbox>
                            )}
                            <a className={styles.login_form_forgot} href="">Forgot password</a>
                            {/*loading={loading.effects.login}*/}
                            <Button  type="primary" htmlType="submit" className={styles.login_form_button}>
                              Log in
                            </Button>
                            Or <a href="">register now!</a>
                          </FormItem>
                          {
                            loginfail && <p>用户名或密码错误</p>
                          }
                        </Form>
);

function mapStateToProps(state) {
  const { loginfail} = state.login;


  return {
    loading: state.loading.models.login,
    loginfail
  }
}
export default connect(mapStateToProps)(Form.create()(Login))
