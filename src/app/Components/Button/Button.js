import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Assuming you have a CSS file for custom styles

const Button = ({
  autoInsertSpace ,
  block ,
  classNames = {},
  danger ,
  disabled ,
  ghost ,
  href = '',
  htmlType = '',
  icon ,
  iconPosition = '',
  loading ,
  shape = '',
  size = '',
  styles = {},
  target = '',
  type = '',
  onClick,
  children,
  ...restProps
}) => {
  const baseClass = 'btn';
  const classes = [
    baseClass,
    `${baseClass}--${type}`,
    `${baseClass}--${size}`,
    `${baseClass}--${shape}`,
    danger ? `${baseClass}--danger` : '',
    ghost ? `${baseClass}--ghost` : '',
    block ? `${baseClass}--block` : '',
    classNames[baseClass] || ''
  ].join(' ');

  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="btn__icon">{icon}</span>}
      <span className="btn__content">{children}</span>
      {icon && iconPosition === 'end' && <span className="btn__icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classes}
        style={styles}
        onClick={onClick}
        {...restProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={htmlType}
      className={classes}
      style={styles}
      disabled={disabled || loading}
      onClick={onClick}
      {...restProps}
    >
      {loading ? <span className="btn__loading">Loading...</span> : content}
    </button>
  );
};

Button.propTypes = {
  autoInsertSpace: PropTypes.bool,
  block: PropTypes.bool,
  classNames: PropTypes.object,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  styles: PropTypes.object,
  target: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'dashed', 'link', 'text', 'default']),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
