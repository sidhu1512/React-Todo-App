import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div>
                <span className='fs-4 fw-bold'>{todo.title}</span>
                <span className="badge bg-info rounded-pill  text-dark mx-2">{todo.category}</span>
                <span className="badge bg-success rounded-pill  mx-2">Complete by: {todo.date}</span>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}
