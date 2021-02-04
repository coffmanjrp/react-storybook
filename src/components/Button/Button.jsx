import '../../assets/css/main.css';

const Button = ({
  label,
  variant,
  size,
  isOutlined,
  color,
  isDisabled,
  customBackgroundColor,
  customBorderColor,
  ...rest
}) => {
  return (
    <>
      <button
        className={`btn btn-${variant}${
          isOutlined ? '-outlined' : ''
        } btn-${size} ${isDisabled ? 'disabled' : ''}`}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
