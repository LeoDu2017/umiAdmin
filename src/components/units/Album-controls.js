import intl from 'react-intl-universal';
import {Col,Button} from 'antd';
import styles from 'styles/components.less';

const Controls = ()=>(
  <Col className={styles.ctrls}>
    <Button
      className={styles.premaryBtn}> {intl.get('USESELECTED')} </Button>
    <Col className={styles.pages}>
      <Button
        icon="double-left"
        disabled="true"
        className={styles.previous}> </Button>
      <Button
        className={`${styles.page} ${styles.current}`}>1</Button>
      <Button
        className={styles.page}>2</Button>
      <Button
        icon="double-right" className={styles.next}> </Button>
    </Col>
  </Col>
);

export default Controls;
