import { ChangeEvent, FormEvent, useState } from "react";
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

interface Task { content: string, check: boolean, id: string }
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    console.log(newTaskText)

    setTasks([...tasks, {content: newTaskText, check: false, id: generateRandomId()}]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function generateRandomId() {
    return Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
  }

  const handleTaskCheckChange = (taskId: string, newChecked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, check: newChecked } : task))
    );
  };

  const concluded = `${tasks.filter((task) => task.check).length} de ${tasks.length}`;

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <form onSubmit={handleCreateNewTask} className={classNames(styles.centralize)}>
            <Input placeholder="Deixe um comentário"
              value={newTaskText}
              name="task"
              onChange={handleNewTaskChange} />
            <Button>Criar <CirclePlus size={15} /></Button>
          </form>
          <div>
            <header className={styles.taskHeader}>
              <span className="blue font-14">
                Tarefa criadas
                <Badge value={tasks.length.toString()}/>
              </span>
              <span className="purple font-14">
                Concluídas
                <Badge value={concluded}/>
              </span>
            </header>
            {tasks.length ? (
              <div >
                {
                  tasks.map((task) => {
                    return <Task content={task.content} id={task.id} check={task.check} className="mb-4" onCheckChange={handleTaskCheckChange}/>
                  })
                }
              </div>
            ) : <Empty />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
