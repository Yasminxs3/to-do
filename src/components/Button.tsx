import styles from "./Button.module.css";
import classNames from 'classnames/bind';
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'only-icon';
}

function Button({children, className, variant = 'primary', ...props}: ButtonProps) {
  const cx = classNames.bind(styles);
  return (
    <button className={cx('button', variant, className )} {...props}>
      {children}
    </button>
  );
}

export default Button;
