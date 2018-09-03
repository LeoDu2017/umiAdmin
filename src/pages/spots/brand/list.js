import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Tag,Col,Button,Icon } from 'antd';
const brandList = ({dispatch,brands}) => {
  const columns = [
    {
      title: intl.get('BRANDSERIAL'),
      dataIndex:'serial',
      key:'serial',
      render: text => text
    },{
      title:intl.get('BRANDLOGO'),
      dataIndex:'logo',
      key:'logo',
      render:(data,record) => <img alt={record.title} src={data}/>
    },{
      title:intl.get('BRANDTITLE'),
      dataIndex:'title',
      key:'title',
      render: text => <a href="javascript:;">text</a>
    },{
      title:intl.get('GOOGSMOUNT'),
      dataIndex:'amount',
      key:'amount',
      render:text => text
    },{
      title:intl.get('NOTALLOWAREA'),
      dataIndex:'area',
      key:'area',
      render: areas => {areas.split(',').map(area => <Tag color="red" key={area}>{area}</Tag>)}
    },{
      title:intl.get('BRANDTYPE'),
      dataIndex:'type',
      key:'type',
      render: text => text
    },{
      title:intl.get('ACTION'),
    }];
  return (
    <Col span={24} className='g-t-wrap'>
      <Col span={24} className='g-t-main'>
        <header className='g-t-header'>
          <span className='g-t-title'>
            {intl.get('MYBRANS')}
          </span>
          <span>
            <Button.Group size="small">
              <Button type='primary'>
                <Icon type="check" />{intl.get('SELECT')}
              </Button>
              <Button type='primary'>
                <Icon type="plus" />{intl.get('CREATE')}
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
