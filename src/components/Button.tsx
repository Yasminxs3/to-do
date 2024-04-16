import styles from "./Button.module.css";
import { CirclePlus } from "lucide-react";
import classNames from 'classnames/bind';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'primary' | 'only-icon';
}

function Button({children, className, type = 'primary'}: ButtonProps) {
  const cx = classNames.bind(styles);
  return (
    <button  className={cx('button', type )}>
      {children}
    </button>
  );
}

export default Button;
