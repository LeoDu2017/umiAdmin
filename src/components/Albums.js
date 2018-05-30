import {Col,Icon,Modal,Button,Input} from 'antd';
import {connect} from 'dva';
import styles from './index.less';
import Svg from 'components/Svg';

const albums = ({albumsNodes,total}) =>(
  <Modal
    visible={ true }
    // onCancel={}
    // wrapClassName={styles.vertical_center_modal}
    closable={false}
    footer={null}
    width="1024px"
    height="692px"
    className={styles.albums}
  >
    <Col>
      <header>
        <span>我的图库</span>
        <Svg className={styles.icon} type="close"> </Svg>
      </header>
      <Col className={styles.main}>
        <Col className={styles.left}>
          <Col className={styles.actions}>
          </Col>
          <Col className={styles.tree}>
            <dl>
              <dt data-id="-1" data-add="1" data-rename="0" data-del="0" className={styles.selected}>
                <Svg className={styles.icon} type="folder-open"> </Svg>
                <span className={styles.title}>
                  <em>所有图片</em>(<em>{total}</em>)
                </span>
              </dt>
              <dd>
                <dl>
                  <dt data-id="0" data-add="0" data-rename="0" data-del="0" className="">
                    <Svg className={styles.icon} type="folder-close"> </Svg>
                    <span className={styles.title}>
                      <em>未分类</em>
                      (<em>0</em>)
                    </span>
                  </dt>
                </dl>
                <dl>
                  <dt data-id="2148384" data-add="1" data-rename="1" data-del="1" className="">
                    <Svg className={styles.icon} type="folder-close"> </Svg>
                    <span className={styles.title}>
                      <em>酥梨</em>
                      (<em>30</em>)
                    </span>
                    <input type="text" className={styles.ipt} value="酥梨"/>
                    <i className="icon-loading j-loading"> </i>
                  </dt>
                  <dd> </dd>
                </dl>
              </dd>
            </dl>
          </Col>
        </Col>
        <Col className={styles.right}>
          <Col className={styles.actions}>
            <Col>
              <Button className={styles.upBtn}> 上传图片 </Button>
              <Button className={styles.premaryBtn}> 移动图片到 </Button>
              <Button className={styles.premaryBtn}> 移动分类到 </Button>
              <Button type="danger"> 删除所选图片 </Button>
            </Col>
            <Col>
              <Input className={styles.input} type="text" placeholder="请输入图片名称"/>
              <Button className={`${styles.premaryBtn} ${styles.border}`}> 搜索 </Button>
            </Col>



          </Col>
          <Col className={styles.imgs}>
2222
          </Col>
          <Col className={styles.ctrls}>
3333
          </Col>
        </Col>
      </Col>
    </Col>
  </Modal>
);

function mapStateToProps(state){
  const {albumsNodes} = state.albums;
  const total = 100;
  return{
    loading:state.albums.loading,
    albumsNodes,
    total
  }
}

export default connect(mapStateToProps)(albums);
