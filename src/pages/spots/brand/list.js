import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Tag,Col,Button,Icon } from 'antd';

const notAllowCountries = [
  {id: '21',name: intl.get('BELGIUM')},
  {id: '68',name: intl.get('FRANCE')},
  {id: '69',name: 'Franch Metropolitan'},
  {id: '75',name: intl.get('GERMANY')},
  {id: '99',name: intl.get('ITALY')},
  {id: '166',name: intl.get('PORTUGAL')},
  {id: '192',name: intl.get('SPAIN')},
  {id: '197',name: intl.get('SWEDEN')},
  {id: '198',name: intl.get('SWITZERLAND')},
  {id: '199',name: intl.get('SYRIA')},
  {id: '200',name: intl.get('TAJIKISTAN')},
  {id: '201',name: 'Tanzania'},
  {id: '203',name: 'Thailand'},
  {id: '215',name: 'United Arab Emirates'},
  {id: '216',name: 'United Kingdom'}
];



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
      render: text => <a href="javascript:;">{text}</a>
    },{
      title:intl.get('GOOGSMOUNT'),
      dataIndex:'amount',
      key:'amount',
      render:text => text
    },{
      title:intl.get('NOTALLOWAREA'),
      dataIndex:'area',
      key:'area',
      render: areas => (
        <span>
          {areas.split(',').map(area => <Tag color="red" key={area}>{area}</Tag>)}
        </span>
      )
    },{
      title:intl.get('BRANDTYPE'),
      dataIndex:'type',
      key:'type',
      render: boolean => boolean ? '系统' : '商家自增'
    },{
      title:intl.get('ACTION'),
      key: 'action',

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
