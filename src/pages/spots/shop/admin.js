import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Divider,Tag,Col,Button } from 'antd';
import { deleteAdmin,createAdmin } from 'actions/shop';

import UserModal from 'components/AdminWindow';
// dataSource={shopAdmins}
const adminTable = ({dispatch,shopAdmins}) => {
  const columns = [{
    title: intl.get('USERNAME'),
    dataIndex: 'username',
    key: 'username',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: intl.get('NAME'),
    dataIndex: 'name',
    key: 'name',
  }, {
    title: intl.get('TITLE'),
    key: 'title',
    dataIndex: 'title',
    render: titles => (
      <span>
      {titles.map(title => <Tag color="blue" key={title}>{title}</Tag>)}
    </span>
    ),
  },{
    title: intl.get('CONTACT'),
    dataIndex: 'contactNumber',
    key: 'contactNumber',
    render: number => number.replace(/(^\d{3}|\d{4}\B)/g,"$1-")
  },{
    title: intl.get('ACCOUNTSTATUS'),
    dataIndex: 'userMode',
    key: 'userMode',
    render: model => model ? intl.get('INUSE') : intl.get('CLOSE')
  },{
    title: intl.get('AUTHORIZATION'),
    dataIndex: 'authorization',
    key: 'authorization',
    render: auth => auth ? intl.get('INAUTH') : intl.get('OUTAUTH')
  },{
    title: intl.get('ACTION'),
    key: 'action',
    render: (text, record) => (
      <span>
      <a href="javascript:;">{intl.get('RESETPASSWORD')}</a>
      <Divider type="vertical" />
      <a href="javascript:;" onClick={deleteAdmin.bind(null,dispatch,record.id)}>{intl.get('DELETE')}</a>
      <Divider type="vertical" />
      <a href="javascript:;">{intl.get('EDIT')}</a>
    </span>
    ),
  }];
  return (
    <Col span={24} className='g-t-wrap'>
      <Col span={24} className='g-t-main'>
        <header className='g-t-header'>
          <span className='g-t-title'>
            {intl.get('SHOPADMIN')}
          </span>
          <UserModal record={{}} add={false} onOk={createAdmin.bind(null,dispatch)}>
            <Button type='primary' size="small">
              {intl.get('ADD')}
            </Button>
          </UserModal>
        </header>
        <Col className="g-t-form-wrap">
          <Table dataSource={shopAdmins} columns={columns} />
        </Col>
      </Col>
    </Col>
  )
};

function mapStateToProps(state){
  const {shopAdmins} = state.admin;

  return{
    shopAdmins
  }
}

export default connect(mapStateToProps)(adminTable);
