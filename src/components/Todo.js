import { useState } from 'react';

function Todo ({item, onUpdate, onDelete}){

    const [edit, setEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClick(e){
            onUpdate(item.id, newValue);
            setEdit(false);
        }

        return (
            <form className="updateForm" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={newValue} />
            <button className="btnUpdate" onClick={handleClick}>Actualizar</button>
            </form>
        );
    }

    function TodoElement(){
        return <div className="listInfo">
                    <span className="listTitle">{item.title}</span>
                    <button className="btn" onClick={()=> setEdit(true)}>Editar</button>
                    <button className="btn" onClick={()=> onDelete(item.id)}>Eliminar</button>
                </div> 
                }
    
    return(
        <div className="todo">
            {edit ? <FormEdit /> : <TodoElement />}
        </div>
        
    ); 
}

export default Todo;

 