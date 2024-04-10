import styles from "./Empty.module.css";
import { NotepadText } from "lucide-react";

function Empty() {
  return (
    <div className={styles.empty}>
      <NotepadText size="56" stroke-width="1" className={styles.icon} />
      <span className="font-bold font-16">
        Você ainda não tem tarefas cadastradas
      </span>
      <span className="font-thin font-16">
        Crie Tarefas e organize seus itens a fazer
      </span>
    </div>
  );
}

export default Empty;
