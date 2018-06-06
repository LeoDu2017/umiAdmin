import {Col,Button,Input} from 'antd';
import intl from 'react-intl-universal';
import Svg from 'components/Svg';

const Randeritems = ({style,tree,subClass,treeLength,currentTree,selectClassify,dispatch,toggleOpen,currentEditTree,styles,stop,saveSubTree,saveEditTree}) =>
  {
    let i = 0;
    return <dd style={style}>
      {
        tree.map((item,index) => {
            let dl =  <dl key={item.id} style={{'top':`${i/treeLength * 100}%`,'zIndex':`${-i+100}`}}>
              <dt onClick={selectClassify.bind(null,item.id,dispatch) }
                  className={currentTree === item.id ? `${styles.selected} ${subClass}` : subClass }
                  id={item.id}>
                  <span onClick={toggleOpen.bind(null,item.id,dispatch)}>
                    <Svg className={styles.icon}
                         type={ item.open ? 'folder-open' : 'folder-close'}>
                    </Svg>
                  </span>
                  <span className={item.id === currentEditTree ? `${styles.title} ${styles.hide}` : styles.title}>
                    <em>{item.name}</em>
                    (<em>{item.picNum}</em>)
                  </span>
                  {
                    item.id !=='0' &&
                    <Col className={styles.editBox}>
                      <Input
                        type="text"
                        className={item.id === currentEditTree ? `${styles.ipt} ${styles.show}` : styles.ipt}
                        name="rename"
                        onClick={stop}
                        defaultValue={item.name}/>

                      {
                        item.add ? <Button
                          onClick={saveSubTree.bind(this,dispatch,item.parent_id)}
                          className={item.id === currentEditTree ? `${styles.btn} ${styles.show}` : styles.btn}>
                          {intl.get("ADD")}
                        </Button> : <Button
                          onClick={saveEditTree.bind(this,dispatch,item.id)}
                          className={item.id === currentEditTree ? `${styles.btn} ${styles.show}` : styles.btn}>
                          {intl.get("SAVE")}
                        </Button>
                      }
                    </Col>
                  }
              </dt>
              {
                item.subFolder.length > 0
                && <Randeritems
                  tree={item.subFolder}
                  selectClassify={selectClassify}
                  dispatch={dispatch}
                  toggleOpen={toggleOpen}
                  currentEditTree={currentEditTree}
                  styles={styles}
                  stop={stop}
                  saveSubTree={saveSubTree}
                  saveEditTree={saveEditTree}
                  currentTree={currentTree}
                  style={{'height':`${item.subFolder.length*28}px`}}
                  subClass = 'subitem'
                  treeLength = {item.subFolder.length}
                />
              }
            </dl>;
          let length = item.subFolder.length + 1;
          i += length;
          return dl
          }
        )
      }
    </dd>
  }
;

export default Randeritems
