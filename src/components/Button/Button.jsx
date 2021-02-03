import '../../assets/css/main.css';

const Button = ({ variant = 'primary', size = 'md', children, ...rest }) => {
  return (
    <>
      <div className="m-2">
        <button className={`btn btn-${variant} btn-${size}`} {...rest}>
          {children}
        </button>
        <div className="d-inline-block m-1" />
        <button
          className={`btn btn-${variant}-outlined btn-${size} `}
          {...rest}
        >
          {children}
        </button>
      </div>
      <div className="m-2">
        <button className={`btn btn-${variant} btn-sm`} {...rest}>
          {children}
        </button>
        <div className="d-inline-block m-1" />
        <button className={`btn btn-${variant}-outlined btn-sm `} {...rest}>
          {children}
        </button>
      </div>
      <div className="m-2">
        <button className={`btn btn-${variant} btn-lg`} {...rest}>
          {children}
        </button>
        <div className="d-inline-block m-1" />
        <button className={`btn btn-${variant}-outlined btn-lg `} {...rest}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
