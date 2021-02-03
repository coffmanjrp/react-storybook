import '../../assets/css/main.css';

const Input = ({ size = 'medium', ...rest }) => {
  return (
    <>
      <input className={`btn ${size}`} {...rest} />
    </>
  );
};

export default Input;
