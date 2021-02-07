import '../../assets/css/main.css';

const Badge = ({ variant, isRounded, children, ...rest }) => {
  return (
    <span
      className={`badge bg-${variant}  ${isRounded ? 'rounded-pill' : ''}`}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Badge;
