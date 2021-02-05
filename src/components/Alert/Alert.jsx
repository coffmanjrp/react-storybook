import '../../assets/css/main.css';

export const Alert = ({ children, variant, isDismissible, ...rest }) => {
  const handleDismiss = (e) => {
    e.target.parentElement.remove();
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
            onClick={(e) => handleDismiss(e)}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Alert;
