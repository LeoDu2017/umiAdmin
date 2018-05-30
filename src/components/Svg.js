const Svg = ({className,type}) => (
  <svg className={className} aria-hidden="true" style={{width:'1em',height:'1em',verticalAlign:'-0.15em',fill:'currentColor',overflow:'hidden'}}>
    <use xlinkHref={`#icon-${type}`}> </use>
  </svg>
);

export default Svg
