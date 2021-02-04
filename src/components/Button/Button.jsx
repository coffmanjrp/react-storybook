import '../../assets/css/main.css';

const Button = ({
  label,
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
        {label}
      </button>
    </>
  );
};

export default Button;
