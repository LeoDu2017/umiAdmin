import { List,Card,Checkbox,Form } from 'antd';
import { Component } from 'react';
import { connect } from 'dva';

class brandsList extends Component{
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
    const { form:{getFieldDecorator},list } = this.props;
    return(
      <div>
        <Form>
          <Form.Item>
            {
              getFieldDecorator('userMode')(<Checkbox.Group onChange={onChange}>
                <List
                  style={{'padding':'20px'}}
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={ list }
                  renderItem={ item => (
                    <List.Item>
                      <Card
                        bodyStyle={{'display':'none'}}
                        extra={<Checkbox value={item.id}/>}
                        cover={<img alt="example" style={{'padding':'10px'}} src={`${item.logo}@110h_216w_1e_1c`} />}
                        title={item.name}/>
                    </List.Item>
                  )}/>
              </Checkbox.Group>)
            }
          </Form.Item>
        </Form>
      </div>
    )
  }
}
function onChange(changedVaule){
  console.log(changedVaule)
}
function mapStateToProps(state,props){
  let {list} = state.brands;
  return {list}
}

export default connect(mapStateToProps)(Form.create()(brandsList));
