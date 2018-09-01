import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Tag,Col,Button } from 'antd';
const brandList = ({dispatch,brands}) => {
  const columns = [
    {
      title:'品牌编号',
      dataIndex:'serial',
      key:'serial',
      render: text => text
    },{
      title:'品牌图标',
      dataIndex:'logo',
      key:'logo',
      render:(data,record) => <img alt={record.title} src={data}/>
    },{
      title:'品牌名称',
      dataIndex:'title',
      key:'title',
      render: text => <a href="javascript:;">text</a>
    },{
      title:'现货数量',
      dataIndex:'amount',
      key:'amount',
      render:text => text
    },{
      title:'不可以销售地区',
      dataIndex:'area',
      key:'area',
      render: areas => {areas.split(',').map(area => <Tag color="red" key={area}>{area}</Tag>)}
    },{
      title:'品牌类别',
      dataIndex:'type',
      key:'type',
      render: text => text
    },{
      title:'',
    }];
  return (
    <Col span={24} className='g-t-wrap'>
      <Col span={24} className='g-t-main'>
        <header className='g-t-header'>
          <span className='g-t-title'>
            我的品牌
          </span>
          <span>
            <Button.Group size="small">
              <Button type='primary'>
                选择品牌
              </Button>
              <Button type='primary'>
                创建品牌
              </Button>
            </Button.Group>
          </span>


        </header>
        <Col className="g-t-form-wrap">
          <Table dataSource={brands} columns={columns}>

          </Table>
        </Col>
      </Col>
    </Col>
  )
};

function mapStateToProps(state){
  const { brands } = state.brand;
  return {brands}
}

export default connect(mapStateToProps)(brandList);
