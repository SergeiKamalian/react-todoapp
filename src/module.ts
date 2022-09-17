export interface IToDo {
    title: string
    id: number
    completed: boolean
    setting: boolean
}
export interface IToDoItemProps {
    todo: IToDo
    setTodoList: React.Dispatch<React.SetStateAction<IToDo[]>>
    todoList: IToDo[]
}
export interface IButtonProps {
    completed: boolean | null
    btnFunc: () => void
}

export interface ICounstructorTodo {
    title: string,
    id: number,
}

export interface IToDoAddProps {
    setTodoList: React.Dispatch<React.SetStateAction<IToDo[]>>
    todoList: IToDo[]
}

export interface IToDoInfoProps {
    todoList: IToDo[]
    setTodoList: React.Dispatch<React.SetStateAction<IToDo[]>>
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>
    activeCategory: string
}