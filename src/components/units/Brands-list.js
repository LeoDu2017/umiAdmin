import { List,Card,Checkbox } from 'antd';
import {connect} from 'dva';
import {onCollection} from 'actions/brand';

const brandsList = ({dispatch,list}) => (

    <Checkbox.Group onChange={onCollection.bind(null,dispatch)}>
      <List
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
      />
    </Checkbox.Group>
);
function onChange(changedVaule){
  console.log(changedVaule)
};
function mapStateToProps(state,props){
  let {list} = state.brands;

  return {list}
}

export default connect(mapStateToProps)(brandsList);

// import { List,Card,Checkbox,Form } from 'antd';
// import {connect} from 'dva';
// import {onCollection} from 'actions/brand';
//
// const brandsList = ({dispatch,list,form:{resetFields}}) => (
//   <Form>
//     <Checkbox.Group onChange={onCollection.bind(null,dispatch,resetFields)}>
//       <List
//       style={{'padding':'20px'}}
//       grid={{ gutter: 16, column: 4 }}
//       dataSource={list}
//       renderItem={item => (
//         <List.Item>
//           <Card
//             bodyStyle={{'display':'none'}}
//             extra={<Checkbox value={item.id}/>}
//             cover={<img alt="example" style={{'padding':'10px'}} src={`${item.logo}@110h_216w_1e_1c`} />}
//             title={item.name} />
//         </List.Item>
//       )}
//       />
//     </Checkbox.Group>
//   </Form>);
// function onChange(changedVaule){
//   console.log(changedVaule)
// };
// function mapStateToProps(state,props){
//   let {list} = state.brands;
//
//   return {list}
// }
//
// export default connect(mapStateToProps)(Form.create()(brandsList));
