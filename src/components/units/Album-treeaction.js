import intl from 'react-intl-universal';
import {Col} from 'antd';
import styles from 'styles/components.less';
import {addSubTree,editCurrentTree,deleteCurrentTree} from 'actions/trees';
import Svg from 'components/Svg';

const Tree_actions = ({actions,currentTree,tree,treeLength,dispatch}) => (
  <Col className={styles.actions}>
    <ul>
      {
        actions.showAdd &&
        <li onClick={addSubTree.bind(null,currentTree,tree,treeLength,dispatch)}>
          <Svg className={styles.icon} type="add"/>
          {intl.get("ADD")}
        </li>
      }
      {
        actions.showEdit &&
        <li onClick={editCurrentTree.bind(null,currentTree,dispatch)}>
          <Svg className={styles.icon} type="pencil"/>
          {intl.get('RENAME')}
        </li>
      }
      {
        actions.showDelete &&
        <li onClick={deleteCurrentTree.bind(null,currentTree,dispatch)}>
          <Svg className={styles.icon} type="delete"/>
          {intl.get('DELETE')}
        </li>
      }
    </ul>
  </Col>
);

export default Tree_actions;
