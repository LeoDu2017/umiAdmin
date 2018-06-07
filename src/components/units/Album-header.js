import intl from 'react-intl-universal';
import Svg from 'components/Svg';
import styles from 'styles/components.less';
import { showAlbums } from 'actions/albums';
const Header = ({dispatch}) => (
  <header>
    <span>{intl.get("ALBUMS")}</span>
    <span onClick={showAlbums.bind(null,dispatch,false)}>
      <Svg className={styles.icon} type="close"> </Svg>
    </span>
  </header>
);

export default Header
