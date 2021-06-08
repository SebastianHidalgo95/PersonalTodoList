import React, { useEffect, useReducer } from 'react';

import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify( todos ))
        
    }, [ todos ])


    const handleDelete = ( id ) => {        
        
        const action = {
            type: 'delete',
            payload: id,
        }
        dispatch( action );
    }

    const handleToogle = ( id ) => {
        dispatch( {
            type: 'toggle',
            payload: id,
        });
    }

    const handleAddTodo = ( newTodo ) => {
        
        dispatch ({
            type: 'add',
            payload: newTodo,
        });
    }
   
    return (
        <div>
            <h1>TodoApp ({ todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                    />
                     
                </div>

                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>

            </div>
        </div>
    )
}
