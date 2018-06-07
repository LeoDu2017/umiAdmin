import {Col,Modal} from 'antd';
import {connect} from 'dva';
import styles from 'styles/components.less';


import {Header,Pictures,Pic_actions,Controls,Tree} from './units';

const albums = ({display,treeLength,dispatch,currentTree,tree,total,openAll,actions,currentEditTree}) =>(
  <Modal
    visible={ display }
    closable={false}
    footer={null}
    width="1024px"
    height="692px"
    className={styles.albums}>
    <Header dispatch={dispatch} />
    <Col className={styles.main}>
      <Tree/>
      <Col className={styles.right}>
        <Pic_actions/>
        <Pictures/>
        <Controls/>
      </Col>
    </Col>
  </Modal>
);

function mapStateToProps(state){
  const {display} = state.albums;
  return{
    loading:state.albums.loading,
    display,
  }
}

export default connect(mapStateToProps)(albums);
