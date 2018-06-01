import intl from 'react-intl-universal';
import { connect } from 'dva';
import styles,{left_side,logo,main,meanu,active,icon,btnicon,text,_toggleBtn,submeanu,subitem,sublink,subtext} from 'styles/layouts.less';
import Link from 'umi/link';
import { Button, Col, Menu} from 'antd';
import Logo from 'assets/login-logo_casaitaliana.png';
import Svg from 'components/Svg';
import {handleToggle,getList,toggleSubMeanu,selectSubMeanu} from 'actions/layout';

const LeftSide = ({min,location,currentIndex,subIndex,dispatch,list,open}) =>(
  <Col className= { min ? `${left_side} ${styles.min}` : left_side }>
    <Button className={_toggleBtn} onClick={handleToggle.bind(null,dispatch,!min)}>
      <Svg type="bars" className={ btnicon }> </Svg>
    </Button>

    <Col className={main}>
      <img src={Logo} className={logo} alt="Eurooo Logo"/>
      <Menu className={meanu} selectedKeys={[location.pathname]}>
        {
          list.length > 0 && list.map(item => (
            <Menu.Item
              className={currentIndex === item.index ? `${styles.item} ${active}` : styles.item}
              key={item.link}
              style={(currentIndex === item.index && !min && open) ? {height:`${(item.child.length+1)*40}px`}:{height:'40px'}}>

              <Col className={styles.link} onClick={toggleSubMeanu.bind(this,dispatch,item.index,item.link,location,location.search,item.child.length,currentIndex)}>
                <Svg className={icon} type={item.type}> </Svg>
                <span className={text}>
                  { item.name }
                </span>
                {
                  item.child.length > 0 && <Svg type={ currentIndex === item.index && open ? "minus" : "add"}
                                                className={styles.togglefold}> </Svg>
                }
              </Col>

              {
                item.child.length > 0 &&
                <Menu className={submeanu} onClick={toggleSubMeanu.bind(this,dispatch,item.index,item.link,location.search,item.child.length)}>
                  {
                    item.child.map(
                      i => (
                        <Menu.Item
                          className={subIndex === i.index ? `${subitem} ${active}` : subitem}
                          onClick={selectSubMeanu.bind(this,dispatch,i.index)}
                          key={i.link}>
                          <Link className={sublink} to={`${i.link}${location.search}`}>
                             <span className={subtext}>
                                { i.name }
                             </span>
                          </Link>
                        </Menu.Item>
                      )
                    )
                  }
                </Menu>
              }
            </Menu.Item>
          ))
        }
      </Menu>
    </Col>
  </Col>
);


function mapStateToProps (state,props){

  let arr = props.location.pathname.split('/');
  let type = arr[1] ? arr[1] : 'index';

  const {currentIndex,min,list,linkType,subIndex,open} = state.left;
  let homeName = intl.get('HOME');

  if(list.length === 0 || list[0].name !== homeName || type != linkType){
    let data = getList(type);
    list.length > 0 && void(data[currentIndex].sublength = list[currentIndex].sublength);
    state.left.list = data;
    state.left.linkType = type;
  }

  return {
    loading:state.loading.models.left,
    currentIndex,
    list: getList(type),
    min,
    subIndex,
    open
  }
}
export default connect(mapStateToProps)(LeftSide)
