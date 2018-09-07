import { List,Card,Checkbox } from 'antd';
import {connect} from 'dva';

const brandsList = ({dispatch,list}) => (<List
  style={{'padding':'20px'}}
  grid={{ gutter: 16, column: 4 }}
  dataSource={list}
  renderItem={item => (
    <List.Item>
      <Card
        bodyStyle={{'display':'none'}}
        extra={<Checkbox value={item.id}/>}
        cover={<img alt="example" style={{'padding':'10px'}} src={`${item.logo}@110h_216w_1e_1c`} />}
        title={item.name} />
    </List.Item>
  )}
/>);

function mapStateToProps(state){
  let {list} = state.brands;

  return {list}
}

export default connect(mapStateToProps)(brandsList);
