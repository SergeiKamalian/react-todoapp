import { useEffect, useState } from "react"
import { IToDo } from "../../module"
import ToDoAdd from "./ToDoAdd/ToDoAdd"
import ToDoInfo from "./ToDoInfo/ToDoInfo"
import ToDoItem from "./ToDoItem/ToDoItem"

const ToDo = () => {
    const localStorageList: string | null = localStorage.getItem('toDoList')

    const [todoList, setTodoList] = useState<IToDo[]>(localStorageList ? JSON.parse(localStorageList) : [])
    const [activeCategory, setActiveCategory] = useState('All')

    useEffect(() => {
        if (todoList.length) {
            localStorage.setItem('toDoList', JSON.stringify(todoList))
        }
    }, [todoList])

    return (
        <div className="ToDo">
            <ToDoAdd setTodoList={setTodoList} todoList={todoList} />
            <div className="ToDoList">

                {todoList.map((todo) => {
                    if (activeCategory === 'All') {
                        return <ToDoItem todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
                    } else if (activeCategory === 'Active' && !todo.completed) {
                        return <ToDoItem todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
                    } else if (activeCategory === 'Completed' && todo.completed) {
                        return <ToDoItem todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />
                    }
                })}
                <ToDoInfo todoList={todoList} setTodoList={setTodoList} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
            </div>
        </div>
    )
}

export default ToDo