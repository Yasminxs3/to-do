import styles from "./Input.module.css";

function Input() {
  return (
    <input className={styles.input} placeholder="Adicione uma nova tarefa" />
  );
}

export default Input;
