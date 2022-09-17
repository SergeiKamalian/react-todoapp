import { FC } from "react";
import { IToDoInfoProps } from "../../../module";

const ToDoInfo: FC<IToDoInfoProps> = ({ todoList, setTodoList, setActiveCategory, activeCategory }) => {

    const clearCompleted = () => {
        const newList = todoList.filter(todo => !todo.completed)
        setTodoList(newList)
    }

    const setActiveCat = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setActiveCategory(e.currentTarget?.textContent!)
    }

    const categories = ['All', 'Active', 'Completed']

    return (
        <div className="ToDoInfo">
            <span className="itemsLength">{todoList.length} items left</span>
            <ul>
                {categories.map((category) => (
                    <li onClick={setActiveCat} 
                    key={category} 
                    style={category === activeCategory ? { color: '#3F7EFD'} : {}} >{category}</li>
                ))}
            </ul>
            <span className="clear" onClick={clearCompleted}>Clear completed</span>
        </div>
    )
}
export default ToDoInfo;
