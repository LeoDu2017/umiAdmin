import { connect } from 'dva';
import {layout,main } from 'styles/layouts.less';
import Header from './header';
import LeftSide from './left';
import RightSide from './right';

const MainLayout = ({ children,location,isLogin}) => (
    <div className={layout}>
      {/*当路由不为'/login' 或 登录状态为 true 的时候 显现侧边导航 */}
      {
        (isLogin || location.pathname !== '/login')  && <LeftSide location={location}/>
      }

        <RightSide>
          {/*当路由不为'/login' 或 登录状态为 true 的时候 显现顶部状态栏 */}
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
  //获取是否登录状态值 true/false
  const {isLogin}  = state.login;
  //获取当前locale
  const { currentLocale } = state.lang;

  return {
    loading: state.loading.models.app,
    isLogin,
    currentLocale
  }
}

export default connect(mapStateToProps)(MainLayout);
