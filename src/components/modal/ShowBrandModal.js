import { Form,Modal,Row,Input } from 'antd';
import { connect } from 'dva';
import { showModelHandler,hideModelHandler,okHandler } from 'actions/common-modal';
import {getCountry} from "public/country/country";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const ShowBrandModal = ({dispatch,children,id,visible,content,country}) => (<span>
      <span onClick={showModelHandler.bind(null,dispatch,id)}>
        { children }
      </span>
      <Modal
        title="查看品牌"
        visible={visible[id]}
        onOk={okHandler.bind(null,dispatch,null,null,id)}
        onCancel={hideModelHandler.bind(null,dispatch,null,id)}
      >
        <Form>
          <FormItem {...formItemLayout} label='品牌名称' className="g-f-item">
            <Input disabled={true} value={content.title}/>
          </FormItem>
          <FormItem {...formItemLayout} label='品牌logo' className="g-f-item">
            <img src={content.logo}/>
          </FormItem>
          <FormItem {...formItemLayout} label='品牌状态' className="g-f-item">
            <Input disabled={true} value={content.title}/>
          </FormItem>
          <FormItem {...formItemLayout} label='品牌国家' className="g-f-item">
            <Input disabled={true} value={country}/>
          </FormItem>
        </Form>
      </Modal>
</span>);

function mapStateToProps(state,props){
  const {visible} = state.commonModal;
  const {content} = props;

  return{
    visible
  }
}
export default connect(mapStateToProps)(ShowBrandModal);
