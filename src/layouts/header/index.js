import { connect } from 'dva';
import {header,open,toggleBtn,avatar} from '../../styles/layouts.less';
import intl from 'react-intl-universal';
import { handletoggleOpen,handleMouseLeave} from 'actions/layout';
import DropdownMeanu from 'components/Dropdown';


const Header = ({dispatch,currentIndex,languages,options}) => (
      <ul className={header}>
        <li onClick={handletoggleOpen.bind(null,dispatch,1, currentIndex)} className= {currentIndex === 1 ? open : ''}>
          <a className={toggleBtn}>
            { intl.get('LANG') }
          </a>
          <DropdownMeanu
            list={languages}
            toggle={currentIndex === 1 ? true : false}
            onMouseLeave={handleMouseLeave.bind(null,dispatch)}>
          </DropdownMeanu>
        </li>
        <li onClick={handletoggleOpen.bind(null,dispatch,2, currentIndex)} className= {currentIndex === 2 ? open : ''}>
          <a className={toggleBtn}>
            <img className={avatar} src={require('../../assets/user-avatar.png')} alt="" />
            Username
          </a>
          <DropdownMeanu
            list={options}
            toggle={currentIndex === 2 ? true : false}
            onMouseLeave={handleMouseLeave.bind(null,dispatch)}>
          </DropdownMeanu>
        </li>
      </ul>
    );


function mapStateToProps(state) {
  const { currentIndex} = state.header;
  const { languages } = state.lang;
  const options = [
    {
      name: intl.get('PWD'),
      type:'xiugaimima'
    },
    {
      name:intl.get('INO'),
      type:'zhanghu'
    },
    {
      name:intl.get('OUT'),
      type:'tuichu'
    }
  ];

  return {
    loading: state.loading.models.header,
    currentIndex,
    languages,
    options
  }
}

export default connect(mapStateToProps)(Header);
