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
}
function Task({content, id, check}: TaskProps) {
  const [isChecked, setIsChecked] = useState(check);
  
  const cx = classNames.bind(styles);
  return (
    <Card className={cx('justify-between', { backlog: !isChecked })}>
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} content={content} id={id}/>
      <Button type={"only-icon"}><Trash size={14} /></Button>
    </Card>
  )
}
  
export default Task