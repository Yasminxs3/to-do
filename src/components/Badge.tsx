import styles from "./Badge.module.css";

interface BadgeProps{
  value: string;
}

function Badge({ value }: BadgeProps) {
    return (
      <span className={styles.badge}>{value}</span>
    )
}
  
export default Badge