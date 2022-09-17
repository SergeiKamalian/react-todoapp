import { FC, useRef, useState } from "react"
import { IToDoAddProps } from "../../../module"
import { checkEmpty } from "../../../Functions/Functions"

const ToDoAdd: FC<IToDoAddProps> = ({ setTodoList, todoList }) => {


    const lastId: number = (todoList.length ? todoList[todoList.length - 1].id + 1 : 1)

    const [inputValue, setInputValue] = useState('')

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const inputRef = useRef(null)

    const constructorToDo = (title: string, id: number) => {
        return {
            title: title,
            id: id,
            completed: false,
            setting: false
        }
    }

    const addToList = () => {
        {checkEmpty(inputValue) && setTodoList((prev) => ([...prev, constructorToDo(inputValue, lastId)])) }
        setInputValue('')
    }

    return (
        <div className="ToDoAdd">
            <button className="buttonCircle" onClick={addToList}>
                +
            </button>
            <input
                type="text"
                placeholder="Create a new ToDo..."
                value={inputValue}
                onChange={(inputChange)}
                ref={inputRef}
            />
        </div>
    )
}

export default ToDoAdd