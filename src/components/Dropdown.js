import {dropdownMenu,open} from './index.less';
import {renderItems} from './actions';

const DropdownMeanu = ({list,onMouseLeave,toggle}) => (
  <ul className={toggle ? `${dropdownMenu} ${open}` : dropdownMenu} onMouseLeave={onMouseLeave}>
    { renderItems(list) }
  </ul>
);

export default DropdownMeanu
