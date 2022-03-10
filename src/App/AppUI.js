import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoContext} from "../TodoContext";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

function AppUI () {
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }= React.useContext(TodoContext);

  return(
    <React.Fragment>      
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            {error && <p>Error al cargar datos</p>}
            {loading && <p>Cargando datos...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu TODO...</p>}
            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed = {todo.completed}
                onComplete= {()=>toggleCompleteTodo(todo.text)} 
                onDelete= {()=>deleteTodo(todo.text)} 
            />
            ))}
        </TodoList>
        { !!openModal &&(
            <Modal>
                <TodoForm />
            </Modal>
        )}
        <CreateTodoButton
            setOpenModal= {setOpenModal} 
        />
  </React.Fragment>        
  );
    
}

export {AppUI};
