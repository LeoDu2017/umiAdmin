import intl from 'react-intl-universal';
import {Col,Button,Input} from 'antd';
import styles from 'styles/components.less';

const Pic_actions = () =>(
  <Col className={styles.actions}>
    <Col className={styles._left}>
      <Button className={styles.upBtn}> {intl.get('UPLOAD')} </Button>
      <Button className={styles.premaryBtn}> {intl.get('MOVEIMG')} </Button>
      <Button className={styles.premaryBtn}> {intl.get('MOVECLASS')} </Button>
      <Button type="danger" className={styles.deleteBtn}> {intl.get('DELETESELECTED')} </Button>
    </Col>
    <Col className={styles._right}>
      <Input
        className={styles.input}
        type="text"
        value=""
        placeholder={intl.get('SERCHHOLDER')}/>
      <Button
        className={`${styles.premaryBtn} ${styles.border}`}> {intl.get('SEARCH')} </Button>
    </Col>
  </Col>
);

export default Pic_actions;
