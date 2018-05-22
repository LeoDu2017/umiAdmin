const Svg = ({className,type}) => (
  <svg className={className} aria-hidden="true">
    <use xlinkHref={`#icon-${type}`}> </use>
  </svg>
);

export default Svg
