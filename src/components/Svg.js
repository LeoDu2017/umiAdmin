const Svg = ({className,type}) => (
  <svg className={className} aria-hidden="true" style={{width:'1em',height:'1em',verticalAlign:'-0.2em',fill:'currentColor',overflow:'hidden'}}>
    <use xlinkHref={`#icon-${type}`}> </use>
  </svg>
);

export default Svg
