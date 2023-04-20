import React, { useState } from 'react';

const NewTodoForm = ({addTask}) => {
    const INITIAL_STATE = {
        task: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(() => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        addTask({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <>  
            <h2>Add a Task!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">New Task: </label>
                <input 
                    type="text"
                    id="task"
                    name="task"
                    value={formData.task}
                    placeholder="Add task..."
                    onChange={handleChange}
                />
                <button>Add task!</button>
            </form>
        </>
    );


};

export default NewTodoForm;