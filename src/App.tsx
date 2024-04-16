import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import "./global.css";
import { Header } from "./components/Header";
import Input from "./components/Input";
import classNames from "classnames";
import Button from "./components/Button";
import Badge from "./components/Badge";
import Empty from "./components/Empty";
import Task from "./components/Task";
import { CirclePlus } from "lucide-react";

function App() {
  const tasks = [
    {
      id: '1',
      content: "minha tarefa",
      check: true,
    }
  ]
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={classNames(styles.centralize)}>
            <Input />
            <Button>Criar <CirclePlus size={15} /></Button>
          </div>
          <div>
            <header className={styles.taskHeader}>
              <span className="blue font-14">
                Tarefa criadas
                <Badge />
              </span>
              <span className="purple font-14">
                Concluídas
                <Badge />
              </span>
            </header>
            {
              tasks.map((task) => {
                return <Task content={task.content} id={task.id} check={task.check} />
              })
            }
            <Empty />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
