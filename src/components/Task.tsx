import { useState } from "react";
import Card from "./Card";
import Checkbox from "./Checkbox";
import styles from "./Task.module.css";
import Button from "./Button";
import { Trash } from "lucide-react";
import classNames from 'classnames/bind';

interface TaskProps {
  content: string;
  id: string;
  check: boolean;
  className: string;
  onCheckChange : Function;
  onDelete: Function;
}
function Task({content, id, check, className, onCheckChange, onDelete }: TaskProps) {
  const [isChecked, setIsChecked] = useState(check);
  
  const cx = classNames.bind(styles);

  const handleCheckChange = (event: boolean) => {
    setIsChecked(event);
    onCheckChange(id, event);
  };

  const handleDeleteTask = () => {
    onDelete(id);
  };
  
  return (
    <Card className={cx('justify-between', { backlog: !isChecked }, className)}>
      <Checkbox isChecked={isChecked} setIsChecked={handleCheckChange} content={content} id={id}/>
      <div>
        <Button variant={"only-icon"} onClick={() => handleDeleteTask()}><Trash size={14} /></Button>
      </div>
    </Card>
  )
}
  
export default Task