import { FC } from "react"
import { IToDoItemProps } from "../../../module"
import Button from "../../Button/Button"

const ToDoItem: FC<IToDoItemProps> = ({ todo, setTodoList, todoList }) => {

    const setCompleted = () => {
        todo.completed = !todo.completed
        const updateList = [...todoList]
        updateList[todoList.findIndex(todoEl => todoEl.id === todo.id)] = todo
        setTodoList(updateList)
    }

    return (
        <div className="ToDoItem" style={(todo.completed) ? { opacity: '0.5' } : {}} >
            <Button completed={todo.completed} btnFunc={setCompleted} />
            <span style={(todo.completed) ? { textDecoration: 'line-through' } : {}} >{todo.title}</span>
        </div>
    )
}

export default ToDoItem