import styles from '../index.less';

const RightSide = (props) => (
  <div className={styles.right_side}>
    { props.children }
  </div>
);

export default RightSide
