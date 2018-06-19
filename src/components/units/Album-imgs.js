import {connect} from 'dva';
import {Col,Button,Input} from 'antd';
import styles from 'styles/components.less';
import Svg from 'components/Svg';
import Pic_actions from './Album-actions';
import Controls from './Album-controls';
import {selectImgs,removeSelected} from 'actions/albums';
import {remove} from "../../services/users";
const Pictures = ({dispatch,list,page,total,selected,length}) =>(
  <Col className={styles.right}>
    <Pic_actions/>
    <Col className={styles.imgs}>
      <ul>
        {
          list.map((item,index)=>(
            <li key={item.id} onClick={selectImgs.bind(null,dispatch,item.id,!0)}>
              <img src={item.file}/>
              <Col className={styles.edit}>
                <span><Svg className={styles.icon} type="pencil"></Svg></span>
                <p>{item.name}</p>
                <Col className={styles.nameEdit}>
                  <Input
                    type="text"
                    defaultValue={item.name}
                    name="rename"
                    className={styles.fileName}/>
                  <Button className={styles.renameImg}>确定</Button>
                </Col>
              </Col>
              {
                selected.includes(item.id) &&
                <Col className={styles.mask}>
                  <span className={styles.selected}>
                    <Svg type="correct"> </Svg>
                  </span>
                  <span className={styles.close} onClick={removeSelected.bind(null,dispatch,item.id)}>
                    <Svg type="close"> </Svg>
                  </span>
                </Col>
              }
            </li>
          ))
        }
      </ul>
    </Col>
    <Controls current={page} total={total} dispatch={dispatch} length={length} />
  </Col>
);
function mapStateToProps(state){
  const {list,page,total,selected} = state.pictures;
  const length = selected.length;
  return {
    list,
    page,
    total,
    selected,
    length
  }
};


export default connect(mapStateToProps)(Pictures)
