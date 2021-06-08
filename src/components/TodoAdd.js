import React from 'react';
import { useForm } from '../Hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm( { 
        description:'',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <=1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo( newTodo );
        reset();

    }

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    placeholder="aprender"
                    autoComplete="off"
                    className="form-control"
                    value={ description }
                    onChange={ handleInputChange }
                    required
                />
                <button type="submit" className="btn btn-outline-primary mt-1 col-12">
                    Agregar
        </button>
            </form>
        </>
    );
};
