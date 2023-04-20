import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import '../styles/TodoList.css'

const TodoList = () => {
    const INITIAL_STATE = [
        {task: 'Add a task', id: uuid()}
    ]
    const [tasks, setTasks] = useState(INITIAL_STATE);
    console.log(tasks)

    const addTask = (newTask) => {
        console.log(newTask)
        setTasks(tasks => [...tasks, {...newTask, id: uuid()}])
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }


    return (
        <div className="TodoList">
            <h1 className="TodoList-header">To-do App</h1>
            <NewTodoForm addTask={addTask}/>
            {tasks.map(({task, id}) => <Todo tasks={task} key={id} id={id} removeTask={removeTask} />)}
        </div>
    );
};


export default TodoList;