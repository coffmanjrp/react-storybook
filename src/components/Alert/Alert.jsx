import '../../assets/css/main.css';

export const Alert = ({ children, variant, isDismissible, ...rest }) => {
  const handleDismiss = (msg) => {
    console.log(msg);
  };

  return (
    <>
      <div
        className={`alert alert-${variant} ${
          isDismissible ? 'alert-dismissible fade show' : ''
        }`}
        role="alert"
        {...rest}
      >
        {children}
        {isDismissible ? (
          <button
            type="button"
            className="btn-close"
            onClick={() => handleDismiss('Dismissed!')}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Alert;
