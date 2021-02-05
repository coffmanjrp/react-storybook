import '../../assets/css/main.css';

const Button = ({
  children,
  variant,
  size,
  isOutlined,
  color,
  isDisabled,
  isFullWidth,
  isActive,
  ...rest
}) => {
  return (
    <>
      <button
        className={`btn btn-${variant}${
          isOutlined ? '-outlined' : ''
        } btn-${size} ${isFullWidth ? 'btn-block' : ''} ${
          isDisabled ? 'disabled' : ''
        } ${isActive ? 'active' : ''}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
