import intl from 'react-intl-universal';
import {Col,Modal,Button,Input} from 'antd';
import {connect} from 'dva';
import styles from 'styles/components.less';
import {
  selectClassify,
  toggleOpen,
  addSubTree,
  editCurrentTree,
  deleteCurrentTree,
  stop,
  saveEditTree,
  showAlbums,
  saveSubTree
} from 'actions/albums';
import Svg from 'components/Svg';
import Randeritems from './Randeritems';
const albums = ({display,treeLength,dispatch,currentTree,tree,total,openAll,actions,currentEditTree}) =>(
  <Modal
    visible={ display }
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
        <span>{intl.get("ALBUMS")}</span>
        <span onClick={showAlbums.bind(null,dispatch,false)}>
          <Svg className={styles.icon} type="close"> </Svg>
        </span>
      </header>
      <Col className={styles.main}>
        <Col className={styles.left}>
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
          <Col className={styles.tree}>
            <dl>
              <dt id="-1"
                  className={currentTree === '-1' ? styles.selected : ''}
                  onClick={selectClassify.bind(null,'-1',dispatch)}>
                <span onClick={toggleOpen.bind(null,'-1',dispatch)}>
                  <Svg className={styles.icon}
                       type={ openAll ? 'folder-open' : 'folder-close'}> </Svg>
                </span>
                <span className={styles.title}>
                  <em>{intl.get('ALL')}</em>(<em>{total}</em>)
                </span>
              </dt>
              <Randeritems
                tree={tree}
                treeLength={treeLength}
                selectClassify={selectClassify}
                dispatch={dispatch}
                toggleOpen={toggleOpen}
                currentEditTree={currentEditTree}
                styles={styles}
                stop={stop}
                saveSubTree={saveSubTree}
                saveEditTree={saveEditTree}
                currentTree={currentTree}
                style={openAll ? {'height':`${treeLength*28}px`}:{'height':"0"}}
              />
            </dl>
          </Col>
        </Col>
        <Col className={styles.right}>
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
          <Col className={styles.imgs}>
            <ul>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
              <li>
                <img src="http://img.supvip.cn/4d/a2/8046600/2018-05/5b0e3a634b1f8.jpg@!w640"/>
                <Col className={styles.selected}><i></i></Col>
                <Col className={styles.edit}>
                  <span><Svg className={styles.icon} type="pencil"> </Svg></span>
                  <p>TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg</p>
                  <Col className={styles.nameEdit}>
                    <Input
                      type="text"
                      defaultValue="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
            </ul>
          </Col>
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
        </Col>
      </Col>
    </Col>

  </Modal>
);

function mapStateToProps(state){
  const {display,tree,total,currentTree,refresh,openAll,actions,currentEditTree,treeLength} = state.albums;
  return{
    loading:state.albums.loading,
    display,
    tree,
    total,
    currentTree,
    refresh,
    openAll,
    actions,
    currentEditTree,
    treeLength
  }
}

export default connect(mapStateToProps)(albums);
