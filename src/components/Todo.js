import React from 'react';

const Todo = ({ tasks, removeTask, id}) => {
    const handleClick = () => {
        removeTask(id);
    }
    return (
        <div className=''>
            <p>{tasks}<button onClick={handleClick}>X</button></p>
        </div>
    )
};

export default Todo;