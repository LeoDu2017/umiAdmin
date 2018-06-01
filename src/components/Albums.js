import {Col,Icon,Modal,Button,Input} from 'antd';
import {connect} from 'dva';
import styles from './index.less';
import {selectClassify,toggleOpen,addSubTree,editCurrentTree,deleteCurrentTree,stop,saveEditTree,showAlbums} from 'actions/albums';
import Svg from 'components/Svg';

const albums = ({display,dispatch,currentTree,tree,total,openAll,actions,currentEditTree}) =>(
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
        <span>我的图库</span>
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
                <li onClick={addSubTree.bind(null,currentTree,dispatch)}>
                  <Svg className={styles.icon} type="add"/>
                  添加
                </li>
              }
              {
                actions.showEdit &&
                <li onClick={editCurrentTree.bind(null,currentTree,dispatch)}>
                  <Svg className={styles.icon} type="pencil"/>
                  重命名
                </li>
              }
              {
                actions.showDelete &&
                <li onClick={deleteCurrentTree.bind(null,currentTree,dispatch)}>
                  <Svg className={styles.icon} type="delete"/>
                  删除
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
                  <em>所有图片</em>(<em>{total}</em>)
                </span>
              </dt>
              {
                <dd style={openAll ? {'height':`${tree.length*28}px`}:{'height':"0"}}>
                  {
                    tree.map((item,index) => (
                      <dl key={item.id} style={{'top':`${index*25}%`,'zIndex':`${-index+100}`}}>
                        <dt onClick={selectClassify.bind(null,item.id,dispatch)}
                            className={currentTree === item.id ? styles.selected : ''}
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
                                onClick={stop}
                                defaultValue={item.name}/>
                              <Button
                                onClick={saveEditTree}
                                className={item.id === currentEditTree ? `${styles.btn} ${styles.show}` : styles.btn}>
                                保存
                              </Button>
                            </Col>
                          }
                        </dt>
                        <dd> </dd>
                      </dl>
                    ))
                  }
                </dd>
              }
            </dl>
          </Col>
        </Col>
        <Col className={styles.right}>
          <Col className={styles.actions}>
            <Col className={styles._left}>
              <Button className={styles.upBtn}> 上传图片 </Button>
              <Button className={styles.premaryBtn}> 移动图片到 </Button>
              <Button className={styles.premaryBtn}> 移动分类到 </Button>
              <Button type="danger"> 删除所选图片 </Button>
            </Col>
            <Col className={styles._right}>
              <Input className={styles.input} type="text" placeholder="请输入图片名称"/>
              <Button className={`${styles.premaryBtn} ${styles.border}`}> 搜索 </Button>
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
                        value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
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
                      value="TB2CT3kdBUSMeJjSszeXXcKgpXa_!!3293494167.jpg"
                      name="rename"
                      className={styles.fileName}/>
                    <Button className={styles.renameImg}>确定</Button>
                  </Col>
                </Col>
              </li>
            </ul>
          </Col>
          <Col className={styles.ctrls}>
            <Button className={styles.premaryBtn}> 使用选中的图片 </Button>
            <Col className={styles.pages}>
              <Button icon="double-left" disabled="true"  className={styles.previous}></Button>
              <Button className={`${styles.page} ${styles.current}`}>1</Button>
              <Button className={styles.page}>2</Button>
              <Button className={styles.page}>3</Button>
              <Button className={styles.page}>4</Button>
              <Button className={styles.page}>5</Button>
              <Button className={styles.page}>6</Button>
              <Button icon="double-right" className={styles.next}></Button>
            </Col>
          </Col>
        </Col>
      </Col>
    </Col>
  </Modal>
);

function mapStateToProps(state){
  const {display,tree,total,currentTree,refresh,openAll,actions,currentEditTree} = state.albums;
  return{
    loading:state.albums.loading,
    display,
    tree,
    total,
    currentTree,
    refresh,
    openAll,
    actions,
    currentEditTree
  }
}

export default connect(mapStateToProps)(albums);
