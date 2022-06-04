import { useState } from "react";
import Todo from "./Todo";

import './TodoApp.css';

function TodoApp (){
    
    const [title, setTitle] = useState('');
    const [list, setList] = useState([])
    

    function handleChange(e){
        setTitle(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const newList = {
            id: Date.now(),
            title: title,
            completed: false
        };

        const temp = [...list];
        temp.unshift(newList);

        setList(temp);
        setTitle('')
    }

    function handleUpdate(id, value){
        const temp = [...list];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setList(temp);
    }

    function handleDelete(id){
        const temp = list.filter(item => item.id !== id);
        setList(temp);
    }

    return <div className="container">
        <div className="titleApp">Tu Lista de Compras y Tareas</div>
        <form className="formCreateList" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="listInput" value={title} placeholder="Que necesitas comprar o hacer?" />
            <input onClick={handleSubmit} type="submit" value="Crear Item" className="btnCreate" />
        </form>

        <div className="listContainer">
            {
                list.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
}

export default TodoApp