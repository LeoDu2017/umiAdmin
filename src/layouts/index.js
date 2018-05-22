import { connect } from 'dva';
import {layout,main } from './index.less';
import Header from './header';
import LeftSide from './left';
import RightSide from './right';
const MainLayout = ({ children,location,isLogin}) => (
    <div className={layout}>
      {
        (isLogin || location.pathname !== '/login')  && <LeftSide location={location}/>
      }

        <RightSide>
          {
            (isLogin || location.pathname !== '/login') && <Header/>
          }
          <div className={main}>
            {children}
          </div>
        </RightSide>
    </div>
);

function mapStateToProps(state) {
  const {isLogin}  = state.main;
  const { currentLocale } = state.lang;

  return {
    loading: state.loading.models.main,
    isLogin,
    currentLocale
  }
}

export default connect(mapStateToProps)(MainLayout);
