import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item:todos, 
        saveItem:saveTodos , 
        loading, 
        error} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo=> !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue >= 1){
        searchedTodos = todos;
    }
    else{
        searchedTodos = todos.filter(todo =>{
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
    });
    }
    //se realiza las funciones de completar y eliminar la lista de TODOS
    const addTodo  =(text) =>{
        if (!text.trim()) {
            alert("El Todo está vacío, escribe algo");
            return;
          }
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };
    
    const toggleCompleteTodo  =(text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed= !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo =(text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider 
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                toggleCompleteTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo,
            }}    
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};
