import { Pagination,List,Card,Checkbox,Form } from 'antd';
import { Component } from 'react';
import { connect } from 'dva';
import { pageChangeHandler } from 'actions/common-modal';

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
    const { dispatch,form:{getFieldDecorator},list,total,current } = this.props;
    return(
      <div>
        <Form>
          <Form.Item style={{'marginBottom':'0'}}>
            {
              getFieldDecorator('userMode')(<Checkbox.Group onChange={onChange}>
                <List
                  style={{'padding':'20px','paddingBottom':'0'}}
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
                  )}>
                  <Pagination
                    style={{'margin':'0','float':'right'}}
                    total={total}
                    current={current}
                    pageSize={12}
                    onChange={pageChangeHandler.bind(null,dispatch)}/>
                </List>
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
  let {list,total,current} = state.brands;
  return {list,total,current}
}

export default connect(mapStateToProps)(Form.create()(brandsList));
