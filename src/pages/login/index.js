import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Col,Button,Icon,Modal} from 'antd';
import styles from '../../styles/login.less';
import { handleClick,handleMouseLeave} from 'actions/loginpage';
import WrappedNormalLoginForm from './loginForm';
import Svg from 'components/Svg';
import DropdownMeanu from 'components/Dropdown';

const login = ({loading,dispatch,currentIndex,copyRight,languages}) => (

  <Col className={styles.main}>
    <Col className={styles.header}>
      <Col className={styles.left}>
        <img src={require('../../assets/euroooLogo.png')}/>
      </Col>
      <Col className={styles.right}>
        <Button
          onClick={handleClick.bind(null,1,dispatch)}
          className={currentIndex === 1 ? `${styles.btn} ${styles.active}` : styles.btn}>
          {intl.get('LOGIN')}
          <Modal
            visible={ currentIndex === 1 }
            onCancel={handleClick.bind(null,0,dispatch)}
            wrapClassName={styles.vertical_center_modal}
            closable={false}
            footer={null}
            width="400px"
          >
            <WrappedNormalLoginForm>  </WrappedNormalLoginForm>

          </Modal>
        </Button>
        <Button
          onClick={handleClick.bind(null,2,dispatch)}
          className={currentIndex === 2 ? `${styles.btn} ${styles.active}` : styles.btn}>
          {intl.get('SIGNIN')}
          <Modal
            title={intl.get('SIGNIN')}
            visible={ currentIndex === 2 }
            okText={intl.get('SIGNIN')}

            cancelText={intl.get('CANCEL')}
            onCancel={handleClick.bind(null,0,dispatch)}
            wrapClassName={styles.vertical_center_modal}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Button>
        <Col className={styles.lang_box}>
          <Button
            onClick={handleClick.bind(null,3,dispatch)}
            className={currentIndex === 3 ? `${styles.title} ${styles.active}` : styles.title}>
            {intl.get('LANG')}
            <Svg type="triangulum" className={styles.icon}> </Svg>
          </Button>
          <DropdownMeanu
            list={languages}
            toggle={currentIndex === 3 ? true : false}
            onMouseLeave={handleMouseLeave.bind(null,dispatch)}>
          </DropdownMeanu>
        </Col>


      </Col>
    </Col>
    <Col className={styles.abstract}>
      <Col className={styles._left}>
        <img src={require('../../assets/about.png')}/>
      </Col>
      <Col className={styles._right}>
        <header>
          {intl.get('ABOUT')}
        </header>
        <article>
          {intl.getHTML('ABSTRACT')}
        </article>
        <a href="https://eurooo.com/" target="_blank">
          <Button className={styles.detailBtn}>
            {intl.get('DETAILS')}
          </Button>
        </a>

      </Col>
    </Col>
    <Col className={styles.advantage}>
      <Col className={styles.main}>
        <h1>{intl.get('ADVANTAGE')}</h1>
        <ul>
          <li>
            <img className={styles.album} src={require('../../assets/a_img.jpg')}/>
            <img className={styles.icon} src={require('../../assets/a_icon_img.jpg')}/>
            <h2>{intl.get('PLATE')}</h2>
            <article>
              {intl.get('SERVICE')}
            </article>
          </li>
          <li>
            <img className={styles.album} src={require('../../assets/b_img.jpg')}/>
            <img className={styles.icon} src={require('../../assets/b_icon_img.jpg')}/>
            <h2>{intl.get('TRANSPORTATION')}</h2>
            <article>
              {intl.get('LOGISTICS')}
            </article>
          </li>
          <li>
            <img className={styles.album} src={require('../../assets/c_img.jpg')}/>
            <img className={styles.icon} src={require('../../assets/c_icon_img.jpg')}/>
            <h2>{intl.get('AFTERSALE')}</h2>
            <article>
              {intl.get('DEAL')}
            </article>
          </li>
        </ul>
      </Col>
    </Col>
    <Col className={styles.map}>
      <Col className={styles.main}>
        <Col className={styles.left}>
          <img src={require('../../assets/map.jpg')}/>
        </Col>
        <Col className={styles.right}>
          <dl>
            <dt>EUROOO SRL</dt>
            <dd>
              <Col className={styles._left}>
                <Icon type="dizhi"/>
              </Col>
              <Col className={styles._right}>
                Via Einaudi 4-20068, Peschiera Borromeo (MI)-Italy
              </Col>
            </dd>
            <dd>
              <Col className={styles._left}>
                <Icon type="xinfeng"/>
              </Col>
              <Col className={styles._right}>
                info@italyclassico.it（internation）<br/>
                info@italyclassico.com（china）
              </Col>
            </dd>
            <dd>
              <Col className={styles._left}>
                <Icon type="dianhua"/>
              </Col>
              <Col className={styles._right}>
                Monday - Friday 08:00 - 17:00 (UTC+01:00)<br/>
                Tel : 800 629 899 +39 02 9127 0932<br/>
                Fax：+39 02 9132 0424
              </Col>
            </dd>
          </dl>
        </Col>
      </Col>
      <Col className={styles.bottom}>
        <ul>
          <li>{copyRight} © Eurooo</li>
          <li>P.IVA 09697820968</li>
          <li>Privacy Policy</li>
        </ul>
      </Col>
    </Col>
  </Col>
);
 function mapStateToProps(state) {
   const { currentIndex} = state.login;
   const { currentLocale,languages } = state.lang;

   let systemDate = new Date();
   let copyRight = systemDate.getFullYear();

   return {
     loading: state.loading.models.login,
     currentIndex,
     currentLocale,
     copyRight,
     languages
   }
 }

export default connect(mapStateToProps)(login);
