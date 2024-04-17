import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={styles.input} placeholder="Adicione uma nova tarefa" {...props}/>
  );
}

export default Input;
