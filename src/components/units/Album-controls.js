import intl from 'react-intl-universal';
import {Col,Button,Pagination} from 'antd';
import styles from 'styles/components.less';
import {getPictures} from 'actions/pictures';
const Controls = ({dispatch,current,total,length})=>(
  <Col className={styles.ctrls}>
    <Button
      className={styles.premaryBtn}> {intl.get('USESELECTED')} ({length}) </Button>
    <Pagination
      className={styles.pages}
      total={total}
      current={current}
      onChange={ getPictures.bind(null,dispatch) }
    />
  </Col>
);
export default Controls;
