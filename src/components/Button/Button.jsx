import '../../assets/css/main.css';

const Button = ({ variant = 'primary', children, ...rest }) => {
  return (
    <>
      <button className={`btn btn-${variant}`} {...rest}>
        {children}
      </button>
      <div className="d-inline-block m-1" />
      <button className={`btn btn-${variant}-outlined `} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
