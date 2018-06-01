import {dropdownMenu,open} from 'styles/components.less';
import {renderItems} from 'actions/common';

const DropdownMeanu = ({list,onMouseLeave,toggle}) => (
  <ul className={toggle ? `${dropdownMenu} ${open}` : dropdownMenu} onMouseLeave={onMouseLeave}>
    { renderItems(list) }
  </ul>
);

export default DropdownMeanu
