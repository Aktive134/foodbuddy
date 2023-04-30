/* eslint-disable react/prop-types */
function Button(props) {
  const { href, children, className, style } = props;
  const buttonStyle = {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '1.6rem 3.2rem',
    borderRadius: '9px',
    fontSize: '2rem',
    transition: "all 0.3s",
    ...style,
  };
  return (
    <a href={href} className={className} style={buttonStyle}>
      {children}
    </a>
  );
}

export default Button;
