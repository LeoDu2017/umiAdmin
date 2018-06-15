import intl from 'react-intl-universal';
import {Col,Button,Pagination} from 'antd';
import styles from 'styles/components.less';
import {getPictures} from 'actions/pictures';

const Controls = ({dispatch,current,total})=>(
  <Col className={styles.ctrls}>

    <Button
      className={styles.premaryBtn}> {intl.get('USESELECTED')} </Button>
    <Pagination
      className="ant-table-pagination"
      total={total}
      current={current}
      onChange={ getPictures.bind(null,dispatch) }
    />
    {/*<Col className={styles.pages}>*/}
      {/*<Button*/}
        {/*icon="double-left"*/}
        {/*disabled="true"*/}
        {/*className={styles.previous}> </Button>*/}
      {/*<Button*/}
        {/*className={`${styles.page} ${styles.current}`}>1</Button>*/}
      {/*<Button*/}
        {/*className={styles.page}>2</Button>*/}
      {/*<Button*/}
        {/*icon="double-right" className={styles.next}> </Button>*/}
    {/*</Col>*/}
  </Col>
);

export default Controls;
