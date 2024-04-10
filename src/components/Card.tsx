import classNames from "classnames";
import styles from "./Card.module.css";

interface CardProps {
    children?: React.ReactNode;
    className?: string;
}

function Card({children, className}: CardProps) {
    return (
      <div className={classNames(styles.card, className)}>  
        {children}
      </div>
    )
}
  
export default Card