import {connect} from 'dva';
import {Component} from 'react';
import {Checkbox,Form,Button} from 'antd';
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const formItemLayout = {
  // labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

class AlertProp extends Component {
  constructor(props){
    super(props)
  };
  componentDidMount(){
    this.props.onRef(this)
  };
  onReset = () => {
    const {form:{resetFields}} = this.props;
    resetFields()
  };
  render(){
    const {getFieldDecorator} = this.props.form;
    return(
      <div>
        <Form>
          {/*<CheckboxGroup options={plainOptions} onChange={onChange} />*/}
          {/*<br /><br />*/}
          {/*<CheckboxGroup options={options} onChange={onChange} />*/}
          {/*<br /><br />*/}
          {/*<CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />*/}
          {/*<br /><br />*/}
          {/*<Button onClick={this.onReset}>重置</Button>*/}
          <FormItem {...formItemLayout}>
            {
              getFieldDecorator('userMode')(<CheckboxGroup options={options} onChange={onChange} />)
            }
          </FormItem>
        </Form>
      </div>
    )
  }
}
function mapStateToProps(props) {
  return{}
}
export default connect(mapStateToProps)(Form.create()(AlertProp))
