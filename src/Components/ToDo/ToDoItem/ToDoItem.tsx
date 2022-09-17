import { FC, useRef, useState } from "react"
import { IToDoItemProps } from "../../../module"
import Button from "../../Button/Button"
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { AiFillSave } from 'react-icons/ai';
import { checkEmpty } from "../../../Functions/Functions";


const ToDoItem: FC<IToDoItemProps> = ({ todo, setTodoList, todoList }) => {

    const [settingsOpen, setSettingsOpen] = useState(false)
    const [newInputValue, setNewInputValue] = useState(todo.title)
    const newValueInputRef = useRef<HTMLInputElement>(null)
    const newValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewInputValue(e.target.value)
    }

    const setCompleted = () => {
        todo.completed = !todo.completed
        const updateList = [...todoList]
        updateList[todoList.findIndex(todoEl => todoEl.id === todo.id)] = todo
        setTodoList(updateList)
    }

    const saveNewTodo = () => {
        todo.title = newInputValue
        const updateList = [...todoList]
        if (checkEmpty(newInputValue)) {
            updateList[todoList.findIndex(todoEl => todoEl.id === todo.id)] = todo
            setTodoList(updateList);
            setSettingsOpen(!settingsOpen)
        }
    }

    const removeTodo = () => {
        setTodoList(todoList.filter(todoEl => todoEl.id !== todo.id))
    }

    const setTodo = () => {
        setSettingsOpen(!settingsOpen)
    }

    return (
        <div className="ToDoItem" style={(todo.completed) ? { opacity: '0.5' } : {}} >
            <div className="item_left">
                <Button completed={todo.completed} btnFunc={setCompleted} />
                {
                    !settingsOpen
                        ? <span style={(todo.completed) ? { textDecoration: 'line-through' } : {}} >{todo.title}</span>
                        : <input type="text"
                            className="inputSettings"
                            value={newInputValue}
                            onChange={newValueChange}
                            ref={newValueInputRef}
                        />
                }
            </div>
            <div className="item_right">
                <button className="btnItem" onClick={!settingsOpen ? setTodo : saveNewTodo}>
                    {!settingsOpen ? <AiFillSetting /> : <AiFillSave />}
                </button>
                <button className="btnItem" onClick={removeTodo}><AiTwotoneDelete /></button>
            </div>
        </div>
    )
}

export default ToDoItem