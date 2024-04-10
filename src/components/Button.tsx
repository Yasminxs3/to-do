import styles from "./Button.module.css";
import { CirclePlus } from "lucide-react";

function Button() {
  return (
    <button className={styles.button}>
      Criar <CirclePlus size={15} />
    </button>
  );
}

export default Button;
