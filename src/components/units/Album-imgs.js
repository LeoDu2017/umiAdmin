import {connect} from 'dva';
import {Col,Button,Input} from 'antd';
import styles from 'styles/components.less';
import Svg from 'components/Svg';
import Pic_actions from './Album-actions';
import Controls from './Album-controls';

const Pictures = ({list}) =>(
  <Col className={styles.right}>
    <Pic_actions/>
    <Col className={styles.imgs}>
      <ul>
        {
          list.map((item,index)=>(
            <li>
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
    <Controls/>
  </Col>
);
function mapStateToProps(state){
  const {list} = state.pictures;
  return {
    list
  }
};


export default connect(mapStateToProps)(Pictures)
