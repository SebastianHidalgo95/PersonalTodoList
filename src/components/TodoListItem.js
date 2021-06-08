import React from 'react'

export const TodoListItem = ({ todo, handleDelete, handleToogle, i }) => {
    return (
        <>
            <li key={todo.id} className="list-group-item rounded border">
                <p
                    className={`${todo.done && 'complete '}`}
                    onClick={() => handleToogle(todo.id)}
                >
                    {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                    Borrar
                </button>
            </li>
        </>
    )
}
