import Card from "./Card";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
    content: string;
    id: string;
    isChecked: boolean;
    setIsChecked: Function;
}
function Checkbox({content, id, isChecked = false, setIsChecked }: CheckboxProps) {

    const handleChange = (event: { target: { checked: any; }; }) => {
        const newValue = event.target.checked;
        setIsChecked(newValue);
    };

    return (
        <div className={styles.checkbox}>
            <input type="checkbox" id={id} checked={isChecked} onChange={handleChange}/>
            <label htmlFor={id}>{content}</label>
        </div>
    )
}
  
export default Checkbox