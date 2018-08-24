import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Divider,Tag,Col } from 'antd';
// dataSource={shopAdmins}
const adminTable = ({shopAdmins,columns}) => (
  <Col span={24} className='g-t-wrap'>
    <Col span={24} className='g-t-main'>
      <header className='g-t-header'>
          <span className='g-t-title'>
            {intl.get('SHOPADMIN')}
          </span>
      </header>
      <Col className="g-t-form-wrap">
        <Table dataSource={shopAdmins} columns={columns} />
      </Col>
    </Col>
  </Col>
);

function mapStateToProps(state){
  const {shopAdmins} = state.admin;

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
    ),
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
    ),
  }];

  return{
    shopAdmins,
    columns
  }
}

export default connect(mapStateToProps)(adminTable);
