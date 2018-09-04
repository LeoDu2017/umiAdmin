import _ from "lodash"
import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Tag,Col,Button,Icon,Divider } from 'antd';





const brandList = ({dispatch,brands,notAllowCountries}) => {
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
      width:70,
      align:'center',
      render:(data,record) => <img alt={record.title} src={data}/>
    },{
      title:intl.get('BRANDTITLE'),
      dataIndex:'title',
      key:'title',
      align:'center',
      render: text => <a href="javascript:;">{text}</a>
    },{
      title:intl.get('GOOGSMOUNT'),
      dataIndex:'amount',
      key:'amount',
      align:'center',
      render:text => text
    },{
      title:intl.get('NOTALLOWAREA'),
      dataIndex:'area',
      key:'area',
      width:150,
      render: areas => (
        <span>
          {areas.split(',').map( id => <Tag color="red" key={id}>{
              _.find(notAllowCountries, { 'id': id }) &&
              notAllowCountries[_.findIndex(notAllowCountries, { 'id': id })].name
            }</Tag>)}
        </span>
      )
    },{
      title:intl.get('BRANDTYPE'),
      dataIndex:'type',
      key:'type',
      align:'center',
      render: boolean => boolean ? '系统' : '商家自增'
    },{
      title:intl.get('ACTION'),
      key: 'action',
      align:'center',
      render:(text,record) => (
        <span>
          <a href="javascript:;"> 查看 </a>
          <Divider type="vertical"/>
          <a href="javascript:;"> 删除 </a>
          <Divider type="vertical"/>
          <a href="javascript:;"> 编辑禁销国家 </a>
        </span>
      )
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
  const notAllowCountries = [
    {id: '21',name: intl.get('BELGIUM')},
    {id: '69',name:'Franch Metropolitan'},
    {id: '68',name: intl.get('FRANCE')},
    {id: '75',name: intl.get('GERMANY')},
    {id: '99',name: intl.get('ITALY')},
    {id: '166',name: intl.get('PORTUGAL')},
    {id: '192',name: intl.get('SPAIN')},
    {id: '197',name: intl.get('SWEDEN')},
    {id: '198',name: intl.get('SWITZERLAND')},
    {id: '199',name: intl.get('SYRIA')},
    {id: '200',name: intl.get('TAJIKISTAN')},
    {id: '201',name: intl.get('TANZANIA')},
    {id: '203',name: intl.get('THAILAND')},
    {id: '215',name: intl.get('UAE')},
    {id: '216',name: intl.get('UK')},
  ];
  return {brands,notAllowCountries}
}

export default connect(mapStateToProps)(brandList);
