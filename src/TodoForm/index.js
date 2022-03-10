import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue , setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    
    const onchange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    const onCancel = () =>{
        setOpenModal(false);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        // if(newTodoValue.length <= 0)
        //     return;
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue}
                onChange={onchange}
                placeholder="Añade el nuevo TODO"
            />
            <div className="TodoForm-buttonContainer" >
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"    
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export {TodoForm};