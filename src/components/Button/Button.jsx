import '../../assets/css/main.css';

const Button = ({ variant = 'primary', size = 'md', children, ...rest }) => {
  return (
    <>
      <button className={`btn btn-${variant} btn-${size}`} {...rest}>
        {children}
      </button>
      <div className="d-inline-block m-1" />
      <button className={`btn btn-${variant}-outlined btn-${size} `} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
