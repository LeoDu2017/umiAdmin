import {connect} from 'dva';
import {Col,Button,Input} from 'antd';
import styles from 'styles/components.less';
import Svg from 'components/Svg';
import Pic_actions from './Album-actions';
import Controls from './Album-controls';

const Pictures = ({dispatch,list,page,total}) =>(
  <Col className={styles.right}>
    <Pic_actions/>
    <Col className={styles.imgs}>
      <ul>
        {
          list.map((item,index)=>(
            <li key={item.id}>
              <img src={item.file}/>
              <Col className={styles.selected}><i></i></Col>
              <Col className={styles.edit}>
                <span><Svg className={styles.icon} type="pencil"> </Svg></span>
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
            </li>
          ))
        }
      </ul>
    </Col>
    <Controls current={page} total={total} dispatch={dispatch} />
  </Col>
);
function mapStateToProps(state){
  const {list,page,total} = state.pictures;
  return {
    list,
    page,
    total
  }
};


export default connect(mapStateToProps)(Pictures)
