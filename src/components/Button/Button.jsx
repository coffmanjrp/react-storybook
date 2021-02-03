import '../../assets/css/main.css';

const Button = ({ variant = 'primary', children, ...rest }) => {
  return (
    <>
      <button className={`btn btn-${variant}`} {...rest}>
        {children}
      </button>
      <button className={`btn btn-${variant}-outlined ms-1`} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
