import util from './util'

const system = () => (
  <div>
    <div className="title">Message Not in Component Example:</div>
    <div>{util.getMessage()}</div>
  </div>
);

export default system
